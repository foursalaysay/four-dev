'use client';
import { motion } from "framer-motion";

export default function Home() {
  // Animation variants for floating boxes
  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-20, 20, -20],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const wordAnimation = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { 
      opacity: [0.3, 0.7, 0.3],
      scale: [1, 1.1, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] relative overflow-hidden">
      {/* Floating Words */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute top-[35%] right-[8%] transform rotate-12"
          variants={wordAnimation}
          initial="initial"
          animate="animate"
          style={{ animationDelay: "1s" }}
        >
          <span className="text-4xl md:text-6xl font-bold text-violet-500/20 font-mono">bUILD</span>
        </motion.div>
        <motion.div
          className="absolute bottom-[25%] left-[15%] transform -rotate-6"
          variants={wordAnimation}
          initial="initial"
          animate="animate"
          style={{ animationDelay: "2s" }}
        >
          <span className="text-4xl md:text-6xl font-bold text-indigo-500/20 font-mono">sCALE</span>
        </motion.div>
      </div>

      {/* Floating Boxes */}
      <div className="fixed inset-0 z-0">
        <motion.div
          className="absolute top-[60%] left-[20%] w-32 h-32 bg-sky-500/10 rounded-lg border border-sky-500/30"
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
          style={{ animationDelay: "0s" }}
        />
        <motion.div
          className="absolute top-[70%] right-[15%] w-24 h-24 bg-violet-500/10 rounded-lg border border-violet-500/30"
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
          style={{ animationDelay: "1s" }}
        />
        <motion.div
          className="absolute bottom-[15%] left-[35%] w-40 h-40 bg-indigo-500/10 rounded-lg border border-indigo-500/30"
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Background Collage Pattern */}
      <div className="fixed inset-0 z-0">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#0ea5e9" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          
          {/* Geometric Patterns */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M0,20 L30,20 L30,40 L0,40 Z"
            stroke="url(#gradient1)"
            strokeWidth="0.5"
            fill="none"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
            d="M5,25 L25,25 L25,35 L5,35 Z"
            stroke="url(#gradient2)"
            strokeWidth="0.5"
            fill="none"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.6 }}
            d="M70,10 L100,10 L100,30 L85,30 L85,20 L70,20 Z"
            stroke="url(#gradient3)"
            strokeWidth="0.5"
            fill="none"
          />
        </svg>
      </div>

      {/* Hero Section with Collage Background */}
      <header className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-16">
          {/* Design Word Above */}
          <motion.div
            className="transform -rotate-12"
            variants={wordAnimation}
            initial="initial"
            animate="animate"
          >
            <span className="text-4xl md:text-6xl font-bold text-sky-500/40 font-mono">dESIGN</span>
          </motion.div>

          {/* Title Container */}
          <motion.div
            className="text-center relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="relative inline-block"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Geometric Frame */}
              <motion.div
                className="absolute -inset-4 border-2 border-sky-500/50 transform rotate-2"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
              <motion.div
                className="absolute -inset-4 border-2 border-violet-500/30 transform -rotate-2"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              />
              
              {/* Main Title Container */}
              <div className="relative border-2 border-sky-400/50 bg-[#0a0a0a] p-8 transform hover:rotate-0 transition-transform duration-500 -rotate-1 backdrop-blur-sm">
                <h1 className="text-6xl sm:text-6xl lg:text-7xl font-mono font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-violet-500">
                  four.devs
                </h1>
              </div>
              
              {/* Text Below */}
              <motion.div
                className="absolute -bottom-28 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-2xl text-sky-200/70 font-mono">WE DESIGN, WE BUILD AND WE SCALE</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* Services Grid */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-[#111111]/80 backdrop-blur-sm relative z-10"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {/* Image Block */}
            <motion.div
              className="relative border-2 border-sky-500/30 p-6 transform rotate-2 bg-sky-500/5 backdrop-blur-sm"
              whileHover={{ scale: 1.02, rotate: 0, borderColor: "rgba(56, 189, 248, 0.5)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-mono mb-2 text-sky-300">dESIGN</h3>
              <div className="w-full h-32 border border-sky-500/20 p-8">We help companies create exposure through making websites for them.</div>
            </motion.div>

            {/* Text Block */}
            <motion.div
              className="relative border-2 border-violet-500/30 p-6 transform -rotate-1 bg-violet-500/5 backdrop-blur-sm"
              whileHover={{ scale: 1.02, rotate: 0, borderColor: "rgba(139, 92, 246, 0.5)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-mono mb-2 text-violet-300">bUILD</h3>
              <div className="w-full h-32 flex items-center justify-center border border-violet-500/20">
                <p className="text-violet-200/70 font-mono p-8">We help companies build reliable and efficient software solutions tailored to their needs.</p>
              </div>
            </motion.div>

            {/* Parameters Block */}
            <motion.div
              className="relative border-2 border-indigo-500/30 p-6 transform rotate-1 bg-indigo-500/5 backdrop-blur-sm"
              whileHover={{ scale: 1.02, rotate: 0, borderColor: "rgba(99, 102, 241, 0.5)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-mono mb-2 text-indigo-300">sCALE</h3>
              <div className="w-full h-32 border border-indigo-500/20">
              <p className="text-blue-200/70 p-8">We scale existing company solutions, enhancing performance, efficiency, and innovation
              </p></div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-[#0a0a0a]/90 backdrop-blur-sm border-t border-sky-500/20 py-12 px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="mb-8 md:mb-0 font-mono"
            whileHover={{ scale: 1.05 }}
          >
            <div className="border-2 border-sky-500/30 p-4 inline-block transform -rotate-2 bg-sky-500/5">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-500">
                four.devs
              </h3>
            </div>
          </motion.div>
          <div className="flex gap-8 font-mono">
            {["mICHAEL", "kYLE", "mARY"].map((item, index) => (
              <motion.a
                key={index}
                href="#"
                className="text-sky-300 hover:text-violet-300 transition-colors relative"
                whileHover={{ scale: 1.1, rotate: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
