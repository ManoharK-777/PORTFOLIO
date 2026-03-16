import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Pill, Droplets, Globe, Cpu, LayoutDashboard, Cake } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Portfolio Website',
            description: 'A modern, responsive personal portfolio with glassmorphism and smooth animations.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
            tags: ['React', 'Framer Motion', 'Tailwind'],
            icon: <Globe className="text-primary animate-spin-slow" />,
            github: 'https://github.com',
            live: 'https://example.com',
        },
        {
            title: 'Medicine Reminder App',
            description: 'A user-friendly application to help elderly people take their medicines on time with alerts.',
            image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800',
            tags: ['React', 'Firebase', 'Tailwind'],
            icon: <Pill className="text-red-500 animate-bounce" />,
            github: 'https://github.com',
            live: 'https://e877c777.medcareai.pages.dev/',
        },
        {
            title: 'Water Quality Monitoring',
            description: 'IoT system built with Arduino Uno to monitor water parameters in real-time using C++ and sensors.',
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
            tags: ['Arduino Uno', 'C++', 'IoT', 'Sensors'],
            icon: <Droplets className="text-secondary animate-pulse" />,
            github: 'https://github.com',
            live: 'https://water-quality-monitoring-1h8.pages.dev/',
        },
        {
            title: 'CRM Application',
            description: 'A full-stack Customer Relationship Management system with lead tracking, contact management, and dashboard analytics.',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
            tags: ['React', 'Node.js', 'MongoDB', 'Express'],
            icon: <LayoutDashboard className="text-violet-400 animate-pulse" />,
            github: 'https://github.com',
            live: 'https://8ee08a8f.crm-3la.pages.dev/',
        },
        {
            title: 'Aura Bakes',
            description: 'A premium bakery web business website with an elegant menu, reservation system, and glassmorphism UI for a luxury brand experience.',
            image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&q=80&w=800',
            tags: ['React', 'Framer Motion', 'Tailwind', 'UI/UX'],
            icon: <Cake className="text-pink-400 animate-bounce" />,
            github: 'https://github.com',
            live: 'https://web-business-j12.pages.dev/',
        },
    ];

    return (
        <section id="projects" className="section-container">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">My Projects</h2>
                <p className="text-slate-500 dark:text-slate-400">Some of my recent work</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="glass-card rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300"
                    >
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="flex gap-4">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 transition-colors">
                                        <Github size={20} />
                                    </a>
                                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 transition-colors">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                                <div className="p-2 rounded-lg glass-card">
                                    {project.icon}
                                </div>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, tagIndex) => (
                                    <span key={tagIndex} className="px-2 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
