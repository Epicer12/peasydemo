import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlowingGridBackground from './GlowingGridBackground';

const Features = () => {
    const [isOverclocked, setIsOverclocked] = useState(false);

    const standardFeatures = [
        { id: "01", title: "AI_DIAGNOSTICS", desc: "Instant hardware analysis." },
        { id: "02", title: "AUTO_PART_PICKER", desc: "Compatibility guaranteed." },
        { id: "03", title: "BUILD_GUIDES", desc: "Step-by-step AR assistance." },
        { id: "04", title: "MARKETPLACE", desc: "Buy & sell verified parts." },
        { id: "05", title: "COMMUNITY", desc: "Island-wide network." },
        { id: "06", title: "BENCHMARKS", desc: "Real-world performance data." }
    ];

    const gamerFeatures = [
        { id: "G-01", title: "DRIVER_PILOT", desc: "Auto-updates & optimization." },
        { id: "G-02", title: "CRASH_RESCUE", desc: "Instant crash logs & fixes." },
        { id: "G-03", title: "OFFER_HUNTER", desc: "GPU/Part price tracking." },
        { id: "G-04", title: "WARRANTY_VAULT", desc: "Auto-warranty tracking." },
        { id: "G-05", title: "LAN_RADAR", desc: "Local events & gaming cafes." }
    ];

    const currentFeatures = isOverclocked ? gamerFeatures : standardFeatures;

    return (
        <section id="features" className={`min-h-screen w-full py-40 px-4 md:px-8 relative overflow-hidden transition-colors duration-700 ${isOverclocked ? 'bg-swiss-black text-swiss-white' : 'bg-swiss-white text-swiss-black'}`}>

            {/* Background Transitions */}
            <div className="absolute inset-0 transition-opacity duration-700">
                {isOverclocked ? (
                    <div className="w-full h-full">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-swiss-cyan/20 via-transparent to-transparent opacity-70" />
                        <GlowingGridBackground variant="cyan" />
                    </div>
                ) : (
                    <GlowingGridBackground variant="cyan" />
                )}
            </div>

            <div className="swiss-grid relative z-10">
                {/* Header & Toggle */}
                <div className="col-span-12 mb-24 flex flex-col md:flex-row justify-between items-end md:items-start gap-8">
                    <div>
                        <span className={`text-technical text-sm tracking-widest block mb-8 transition-colors duration-500 ${isOverclocked ? 'text-swiss-cyan' : 'text-swiss-black'}`}>
                            02 // CAPABILITIES <span className="animate-pulse ml-4">{isOverclocked ? '[ OVERCLOCK_ACTIVE ]' : '[ SYSTEM_NOMINAL ]'}</span>
                        </span>
                        <h2 className="text-sub-massive leading-none tracking-tighter">
                            {isOverclocked ? (
                                <motion.span
                                    key="overclock-title"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-swiss-white"
                                >
                                    PERFORMANCE<br />UNLOCKED
                                </motion.span>
                            ) : (
                                <motion.span
                                    key="standard-title"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    CORE<br />SYSTEMS
                                </motion.span>
                            )}
                        </h2>
                    </div>

                    {/* Industrial Text Tabs */}
                    <div className="flex flex-col items-end">
                        <span className="text-technical text-xs mb-4 tracking-widest">SYSTEM_MODE</span>
                        <div className="flex border border-swiss-black/20 bg-swiss-white relative">
                            <button
                                onClick={() => setIsOverclocked(false)}
                                className={`px-6 py-3 text-xs font-bold tracking-widest transition-all duration-300 relative z-10 ${!isOverclocked ? 'text-swiss-white bg-swiss-black' : 'text-gray-400 hover:text-swiss-black'}`}
                            >
                                SYSTEM [NOMINAL]
                            </button>
                            <button
                                onClick={() => setIsOverclocked(true)}
                                className={`px-6 py-3 text-xs font-bold tracking-widest transition-all duration-300 relative z-10 ${isOverclocked ? 'text-swiss-cyan bg-swiss-black border-l border-swiss-cyan' : 'text-gray-400 hover:text-swiss-black border-l border-swiss-black/10'}`}
                            >
                                SYSTEM [OVERCLOCK]
                            </button>
                        </div>
                    </div>
                </div>

                {/* Features Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={isOverclocked ? 'gamer' : 'standard'}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="col-span-12 grid grid-cols-12 gap-4 w-full"
                    >
                        {currentFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className={`col-span-12 md:col-span-4 mb-16 relative group p-6 border-l-2 ${isOverclocked
                                    ? 'border-swiss-white/20 hover:border-swiss-cyan hover:bg-swiss-white/5'
                                    : 'border-swiss-black/20 hover:border-swiss-black hover:bg-swiss-black/5'
                                    } transition-all duration-300 ${index % 3 === 1 ? 'md:mt-32' : index % 3 === 2 ? 'md:mt-64' : ''}`}
                            >
                                <span className={`text-6xl md:text-8xl font-bold block mb-4 leading-none transition-colors duration-300 ${isOverclocked ? 'text-swiss-white/10 group-hover:text-swiss-cyan' : 'text-gray-200 group-hover:text-swiss-black'}`}>
                                    {feature.id}
                                </span>
                                <h3 className="text-xl md:text-2xl font-bold mb-2">{feature.title}</h3>
                                <p className={`text-sm font-mono max-w-[200px] ${isOverclocked ? 'text-gray-400' : 'text-gray-500'}`}>
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Features;
