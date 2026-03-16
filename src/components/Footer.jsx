import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-50 dark:bg-slate-900/50 py-12 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6 inline-block">
                    Portfolio.
                </div>

                <div className="flex justify-center gap-6 mb-8">
                    <a href="#" className="p-3 rounded-full glass hover:text-primary transition-colors"><Github size={20} /></a>
                    <a href="#" className="p-3 rounded-full glass hover:text-primary transition-colors"><Linkedin size={20} /></a>
                    <a href="#" className="p-3 rounded-full glass hover:text-primary transition-colors"><Twitter size={20} /></a>
                    <a href="mailto:kmanohar17072007@gmail.com" className="p-3 rounded-full glass hover:text-primary transition-colors"><Mail size={20} /></a>
                </div>

                <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
                    {['Home', 'About', 'Projects', 'Resume', 'Contact'].map((item) => (
                        <Link
                            key={item}
                            to={item.toLowerCase()}
                            smooth={true}
                            duration={500}
                            offset={-80}
                            className="text-slate-500 hover:text-primary transition-colors cursor-pointer font-medium"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        © {currentYear} Manohar K. All rights reserved.
                    </p>
                    <p className="text-slate-500 text-sm flex items-center gap-1">
                        Made with <Heart size={14} className="text-red-500 fill-red-500" /> by Manohar K
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
