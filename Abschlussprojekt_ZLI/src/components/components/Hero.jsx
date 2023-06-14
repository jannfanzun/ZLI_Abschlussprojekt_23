import { motion } from "framer-motion";
import { styles } from "../../styles";
import { ComputersCanvas } from "./canvas";
import herobg from '../../assets/assets/herobg.png'; // Stelle sicher, dass der Dateipfad korrekt ist

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto" style={{ backgroundImage: `url(${herobg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Jann</span>!
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop user interfaces, web applications <br className="sm:block hidden" />and I'm in an apprenticeship as a computer scientist.
          </p>
        </div>
      </div>
      
      <ComputersCanvas />
      <div className="absolute xs:bottom-5 bottom-12 w-full justify-center flex items-center">
        <a href="#about">
          <div className="w-[45px] h-[74px] rounded-3xl border-4 
          border-secondary flex justify-center items-start p-2">
            <motion.div animate={{
              y: [0, 34, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className="w-4 h-4 rounded-full bg-secondary mb-1"
            />

          </div>
        </a>
      </div>
    </section>
  );
};


export default Hero