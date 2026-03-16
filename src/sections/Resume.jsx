import { Download, FileText, ChevronRight, Award, GraduationCap, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const Resume = () => {
    const experiences = [
        {
            company: 'Future Intern',
            role: 'Front Developer Intern',
            period: 'Upcoming',
            description: 'Preparing to develop responsive web applications and gain hands-on experience in frontend technologies.',
        },
    ];

    const education = [
        {
            school: "Vignan's Institute of Information Technology",
            degree: 'Bachelor Degree in CSE (AI)',
            period: '2024 - 2028',
            description: 'Currently in 2nd Year with a CGPA of 9.04. Specializing in Artificial Intelligence and Computer Science Engineering.',
        },
        {
            school: 'Sri Chaitanya Junior College',
            degree: 'Intermediate (Class XII)',
            period: '2022 - 2024',
            description: 'Completed higher secondary education (MPC) with 968 / 1000 marks.',
        },
        {
            school: 'Sri Chaitanya EM School',
            degree: 'Secondary Education (Class X)',
            period: '2022',
            description: 'Completed secondary education with 532 / 600 marks.',
        },
    ];

    const certifications = [
        {
            title: 'CISCO Online Certification',
            org: 'Cisco Networking Academy',
            date: '2024',
        },
        {
            title: 'Prompt Engineering Certification',
            org: 'Online',
            date: '2024',
        },
    ];

    return (
        <section id="resume" className="section-container">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Resume</h2>
                <p className="text-slate-500 dark:text-slate-400">My professional path and education</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Experience & Certifications */}
                <div className="space-y-12">
                    <div>
                        <div className="flex items-center gap-2 mb-8 text-2xl font-bold text-primary">
                            <Briefcase size={28} />
                            Experience
                        </div>
                        <div className="space-y-8 border-l-2 border-slate-200 dark:border-slate-700 ml-4 pl-8">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative"
                                >
                                    <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-dark shadow-md" />
                                    <span className="text-sm font-semibold text-secondary mb-2 block">{exp.period}</span>
                                    <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                                    <h4 className="text-slate-600 dark:text-slate-400 font-medium mb-3">{exp.company}</h4>
                                    <p className="text-slate-500 dark:text-slate-400">{exp.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-2 mb-8 text-2xl font-bold text-secondary">
                            <Award size={28} />
                            Certifications
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="p-4 glass-card rounded-xl border border-white/10"
                                >
                                    <h4 className="font-bold text-primary mb-1">{cert.title}</h4>
                                    <p className="text-xs text-slate-500 mb-2">{cert.org}</p>
                                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/10 text-primary uppercase">
                                        {cert.date}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Education & Download */}
                <div className="flex flex-col justify-between space-y-12 lg:space-y-0">
                    <div>
                        <div className="flex items-center gap-2 mb-8 text-2xl font-bold text-secondary">
                            <GraduationCap size={28} />
                            Education
                        </div>
                        <div className="space-y-8 border-l-2 border-slate-200 dark:border-slate-700 ml-4 pl-8">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    className="relative"
                                >
                                    <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-secondary border-4 border-white dark:border-dark shadow-md" />
                                    <span className="text-sm font-semibold text-primary mb-2 block">{edu.period}</span>
                                    <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                                    <h4 className="text-slate-600 dark:text-slate-400 font-medium mb-2">{edu.school}</h4>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm italic">{edu.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mt-12 p-8 glass-card rounded-3xl text-center border border-white/10"
                    >
                        <FileText size={48} className="mx-auto mb-4 text-primary opacity-50" />
                        <h3 className="text-2xl font-bold mb-4">Want the full picture?</h3>
                        <p className="text-slate-500 dark:text-slate-400 mb-8">
                            Download my complete resume for detailed information about my skills and experience.
                        </p>
                        <a
                            href="/resume.pdf"
                            download="Manohar_Kondapalli_Resume.pdf"
                            className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 transition-all inline-flex items-center gap-2"
                        >
                            <Download size={20} />
                            Download PDF
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
