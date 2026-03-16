import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Smartphone, Globe, Terminal, Cpu } from 'lucide-react';

const About = () => {
    const skills = [
        { name: 'C', level: 75, icon: <Terminal className="text-blue-600" /> },
        { name: 'Python', level: 70, icon: <Cpu className="text-yellow-500" /> },
        { name: 'Java', level: 65, icon: <Terminal className="text-red-600" /> },
        { name: 'React', level: 60, icon: <Globe className="text-blue-400" /> },
        { name: 'Tailwind CSS', level: 65, icon: <Code className="text-cyan-400" /> },
        { name: 'Node.js', level: 45, icon: <Server className="text-green-500" /> },
    ];

    return (
        <section id="about" className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold mb-6">About Me</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                        I am a professional and motivated Computer Science (Artificial Intelligence) undergraduate with a strong academic performance and a solid foundation in programming.
                    </p>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                        I am enthusiastic about applying problem-solving skills, logical thinking, and emerging AI concepts to real-world applications while continuously upgrading my technical expertise.
                    </p>

                    <div className="grid grid-cols-1 gap-4">
                        <div className="p-4 glass rounded-xl text-center hover:scale-105 transition-transform duration-300">
                            <h3 className="text-4xl font-bold text-secondary">4+</h3>
                            <p className="text-sm text-slate-500">Projects Completed</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-2xl font-bold mb-8 italic">My Technical Skills</h3>
                    <div className="space-y-6">
                        {skills.map((skill, index) => (
                            <div key={index}>
                                <div className="flex justify-between items-center mb-2">
                                    <div className="flex items-center gap-2 font-medium">
                                        {skill.icon}
                                        {skill.name}
                                    </div>
                                    <span className="text-slate-500">{skill.level}%</span>
                                </div>
                                <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.2 }}
                                        className="h-full bg-gradient-to-r from-primary to-secondary"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
