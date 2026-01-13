import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

const Team = () => {
    const team = [
        {
            name: "HASUN_TISERA",
            role: "SYSTEM_LEAD_&_CV_ENG",
            linkedin: "https://www.linkedin.com/in/hasun-tisera/",
            github: "https://github.com/Epicer12"
        },
        {
            name: "NERESH_RANJITHKUMAR",
            role: "3D/AR_LEAD",
            linkedin: "https://www.linkedin.com/in/neresh-ranjithkumar-a63b69347/",
            github: "https://github.com/neresh25"
        },
        {
            name: "DEMINDA_RUPASINGHE",
            role: "3D_+_BACKEND",
            linkedin: "https://www.linkedin.com/in/deminda-rupasinghe-757198356/",
            github: "https://github.com/Deminda1"
        },
        {
            name: "SETHUMI_JAYASURIYA",
            role: "FRONTEND_+_BACKEND_LEAD",
            linkedin: "https://www.linkedin.com/in/sethumi-jayasuriya-7b40792b7/",
            github: "https://github.com/SethuJay"
        },
        {
            name: "AYUMI_DISSANAYAKE",
            role: "FRONTEND_+_BACKEND",
            linkedin: "https://www.linkedin.com/in/ayumidissa/",
            github: "https://github.com/ayuuz"
        },
        {
            name: "JAYATHMI_GUNAWARDHANA",
            role: "FRONTEND_LEAD_+_DATASET",
            linkedin: "https://www.linkedin.com/in/jayathmi-gunawardhana-8aa837223/",
            github: "https://github.com/MehansaJ"
        }
    ];

    return (
        <section id="team" className="min-h-screen w-full bg-swiss-white text-swiss-black py-40 px-4 md:px-8 relative overflow-hidden">
            <div className="swiss-grid relative z-10">
                <div className="col-span-12 mb-24">
                    <span className="text-technical text-sm tracking-widest block mb-8">05 // THE_TEAM</span>
                    <h2 className="text-sub-massive leading-none tracking-tighter">
                        THE<br />BUILDERS
                    </h2>
                </div>

                <div className="col-span-12 md:col-span-8 md:col-start-5">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col border-b border-swiss-black py-8 md:hover:bg-swiss-cyan md:hover:text-swiss-white md:hover:px-4 transition-all duration-300 group"
                        >
                            <div className="flex justify-between items-start w-full">
                                <h3 className="text-xl md:text-3xl font-bold tracking-tight">{member.name}</h3>
                                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                                        <Linkedin size={24} strokeWidth={1.5} />
                                    </a>
                                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                                        <Github size={24} strokeWidth={1.5} />
                                    </a>
                                </div>
                            </div>
                            <span className="font-mono text-xs md:text-sm tracking-widest mt-2">{member.role}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
