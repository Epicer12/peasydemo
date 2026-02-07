import { useState } from 'react';
import logo from '../assets/logo-white.png';

const Footer = () => {
    const [showEmail, setShowEmail] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('peasy@gmail.com');
        setShowEmail(true);
        setTimeout(() => setShowEmail(false), 3000);
    };

    return (
        <footer className="w-full bg-swiss-black py-12 px-4 md:px-8 border-t border-swiss-white/10">
            <div className="swiss-grid">
                <div className="col-span-12 md:col-span-6 flex flex-col justify-between h-full items-start">
                    <img src={logo} alt="PEASY" className="max-h-10 md:max-h-12 w-auto object-contain" />
                </div>

                <div className="col-span-12 md:col-span-6 flex flex-col md:items-end justify-end gap-4 mt-8 md:mt-0">
                    <div className="flex gap-8 text-sm font-mono text-swiss-white">
                        <a href="https://www.linkedin.com/company/peasyy/" className="hover:text-swiss-cyan px-1 transition-colors">LINKEDIN</a>
                        <a href="https://www.instagram.com/peasy.lk_/" className="hover:text-swiss-cyan px-1 transition-colors">INSTAGRAM</a>
                        <button
                            onClick={handleCopy}
                            className="hover:text-swiss-cyan px-1 transition-colors uppercase text-left w-auto md:text-right"
                        >
                            {showEmail ? '[ COPIED: PEASY@GMAIL.COM ]' : 'CONTACT'}
                        </button>
                    </div>
                    <span className="text-xs font-mono text-gray-500">
                        © 2025 PEASY_SYSTEMS // CS-27 IIT
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
