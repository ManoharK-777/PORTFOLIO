import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import ParticlesBackground from './components/ParticlesBackground';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Resume from './sections/Resume';
import Contact from './sections/Contact';
import Footer from './components/Footer';

const LoadingScreen = () => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0f172a]"
  >
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse"
      }}
      className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
    >
      Manohar K.
    </motion.div>
  </motion.div>
);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-white dark:bg-dark text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <AnimatePresence>
          {loading && <LoadingScreen />}
        </AnimatePresence>

        {/* <ParticlesBackground /> */}
        <Navbar />

        <main className="flex flex-col gap-24 md:gap-32">
          <Hero />
          <About />
          <Projects />
          <Resume />
          <Contact />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
