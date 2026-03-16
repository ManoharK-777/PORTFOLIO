import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Loader2 } from 'lucide-react';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await axios.post('http://localhost:5000/api/contact', formData);
            if (response.data.success) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('error');
            }
            setTimeout(() => setStatus('idle'), 5000);
        } catch (err) {
            console.error('Contact form error:', err);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="section-container">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
                <p className="text-slate-500 dark:text-slate-400">Have a project in mind? Let's talk.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <div className="glass p-8 rounded-2xl flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-full text-primary">
                            <Mail size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-1">Email</h3>
                            <p className="text-slate-500 dark:text-slate-400">kmanohar17072007@gmail.com</p>
                        </div>
                    </div>

                    <div className="glass p-8 rounded-2xl flex items-start gap-4">
                        <div className="p-3 bg-secondary/10 rounded-full text-secondary">
                            <Phone size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-1">Phone</h3>
                            <p className="text-slate-500 dark:text-slate-400">+91 6281476340</p>
                        </div>
                    </div>

                    <div className="glass p-8 rounded-2xl flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-full text-primary">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-1">Location</h3>
                            <p className="text-slate-500 dark:text-slate-400">Vizag, AP, India</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 rounded-3xl"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-600 dark:text-slate-400 ml-1">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary outline-none transition-shadow"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-600 dark:text-slate-400 ml-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary outline-none transition-shadow"
                                    placeholder="kmanohar17072007@gmail.com"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-600 dark:text-slate-400 ml-1">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary outline-none transition-shadow"
                                placeholder="How can I help you?"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-600 dark:text-slate-400 ml-1">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="4"
                                className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary outline-none transition-shadow resize-none"
                                placeholder="Your message here..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full btn-primary flex items-center justify-center gap-2"
                        >
                            {status === 'loading' ? (
                                <>
                                    <Loader2 className="animate-spin" size={20} />
                                    Sending...
                                </>
                            ) : status === 'success' ? (
                                'Message Sent!'
                            ) : (
                                <>
                                    <Send size={20} />
                                    Send Message
                                </>
                            )}
                        </button>
                        {status === 'error' && (
                            <p className="text-red-500 text-center text-sm font-medium">Something went wrong. Please try again.</p>
                        )}
                        {status === 'success' && (
                            <p className="text-green-500 text-center text-sm font-medium">Thank you! I'll get back to you soon.</p>
                        )}
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
