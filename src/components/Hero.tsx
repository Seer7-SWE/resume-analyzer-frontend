import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-12 py-24 bg-gradient-to-r from-blue-600 to-purple-700 text-white relative">
      <div className="max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-extrabold leading-tight"
        >
          {/* First Line - "Optimize Your Resume" */}
          <span className="typewriter-effect-wrapper">
            <span className="typewriter-effect line-1">
              Optimize Your Resume
            </span>
          </span>
          <br /> {/* Line break between the two parts */}
          {/* Second Line - "with AI" */}
          <span className="typewriter-effect-wrapper">
            <span className="typewriter-effect line-2">
              with AI
            </span>
          </span>
        </motion.h1>
        <p className="mt-5 text-lg opacity-90">
          Get instant feedback and improve your chances of landing your dream job.
        </p>
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 4px 15px rgba(255, 255, 255, 0.5)",
          }}
          className="mt-6 bg-white text-blue-600 px-7 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-gray-100 transition-all"
        >
          Upload Resume
        </motion.button>
      </div>
      <div className="mt-10 md:mt-0 flex justify-center">
        <Image
          src="/hero-image.png"
          alt="AI analyzing resume"
          width={500}
          height={350}
          className="rounded-lg shadow-lg mix-blend-multiply"
        />
      </div>
    </section>
  );
};

export default Hero;
