import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FinalCTA = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR'>('IDLE');

    // REPLACE THIS WITH YOUR DEPLOYED GOOGLE APPS SCRIPT URL
    const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

    // Check for previous initialization
    React.useEffect(() => {
        const storedEmail = localStorage.getItem('peasy_initialized_email');
        if (storedEmail) {
            setEmail(storedEmail);
            setStatus('SUCCESS');
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus('LOADING');

        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                body: JSON.stringify({ email }),
                mode: 'no-cors',
                headers: {
                    "Content-Type": "application/json",
                },
            });

            // Save to localStorage to prevent re-submission
            localStorage.setItem('peasy_initialized_email', email);

            setStatus('SUCCESS');
        } catch (error) {
            console.error("Submission error:", error);
            setStatus('ERROR');
        }
    };

    return (
        <section id="download" className="min-h-screen w-full bg-swiss-white flex flex-col justify-between py-12 px-4 md:px-8 relative overflow-hidden">
            <div className="w-full h-[1px] bg-swiss-black" />

            <div className="swiss-grid flex-grow items-center">
                <div className="col-span-12 text-center relative">
                    <div className="mb-8 md:absolute md:top-0 md:left-0">
                        <span className="text-technical text-xs tracking-widest text-swiss-black">
                            07 // INITIALIZE
                        </span>
                    </div>

                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-sub-massive font-bold tracking-tighter mb-24 text-swiss-black flex flex-col items-center gap-6"
                    >
                        <span>READY_TO</span>
                        <span>BUILD?</span>
                    </motion.h2>

                    <div className="max-w-2xl mx-auto">
                        {status === 'SUCCESS' ? (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-center p-8 border border-swiss-cyan bg-swiss-cyan/5"
                            >
                                <h3 className="text-2xl font-bold text-swiss-black mb-2 tracking-tighter">[ INITIALIZATION COMPLETE ]</h3>
                                <p className="font-mono text-sm text-gray-600">YOU HAVE BEEN ADDED TO THE SYSTEM.</p>
                            </motion.div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="flex flex-col md:flex-row gap-4 border-b border-swiss-black pb-4 relative"
                            >
                                <input
                                    type="email"
                                    required
                                    placeholder="ENTER_EMAIL_ADDRESS"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={status === 'LOADING'}
                                    className="flex-grow bg-transparent text-lg md:text-xl font-mono placeholder:text-gray-400 focus:outline-none text-center md:text-left text-swiss-black disabled:opacity-50"
                                />

                                <button
                                    type="submit"
                                    disabled={status === 'LOADING'}
                                    className="text-lg md:text-xl font-bold text-swiss-black hover:text-swiss-cyan transition-colors whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === 'LOADING' ? '[ PROCESSING... ]' : '[ INITIALIZE ]'}
                                </button>

                                {status === 'ERROR' && (
                                    <span className="absolute -bottom-8 left-0 text-xs font-mono text-red-500 tracking-widest">
                                        [ SYSTEM ERROR: RETRY INITIALIZATION ]
                                    </span>
                                )}
                            </form>
                        )}
                    </div>
                </div>
            </div>

            <div className="w-full h-[1px] bg-swiss-black" />
        </section>
    );
};

export default FinalCTA;
