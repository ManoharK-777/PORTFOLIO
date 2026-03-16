import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="section-container relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="px-4 py-2 rounded-full glass text-primary font-medium text-sm mb-6 inline-block">
                        Welcome to my portfolio
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                        Hi, I'm <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Manohar K</span>
                    </h1>
                    <div className="text-2xl md:text-3xl font-medium text-slate-600 dark:text-slate-400 mb-8 h-12">
                        I am a{' '}
                        <span className="text-secondary">
                            <Typewriter
                                words={['Full Stack Developer', 'UI/UX Designer', 'Tech Enthusiast', 'Problem Solver']}
                                loop={true}
                                cursor
                                cursorStyle="_"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </div>
                    <p className="max-w-2xl mx-auto text-lg text-slate-500 dark:text-slate-400 mb-10">
                        I craft beautiful and functional digital experiences with modern technologies. Let's build something amazing together.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link to="projects" smooth={true} duration={500} offset={-80}>
                            <button className="btn-primary flex items-center gap-2 group">
                                View My Work
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                        <div className="flex items-center gap-4">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass hover:text-primary transition-colors">
                                <Github size={24} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass hover:text-primary transition-colors">
                                <Linkedin size={24} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass hover:text-primary transition-colors">
                                <Twitter size={24} />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Blobs */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-[100px] animate-pulse"></div>
        </section>
    );
};

export default Hero;
