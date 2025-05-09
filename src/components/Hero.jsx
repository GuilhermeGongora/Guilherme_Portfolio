import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="w-full mx-auto overflow-hidden">
      <div
        className={`${styles.paddingX} pt-32 pb-10 max-w-7xl mx-auto flex flex-row md:flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center md:mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Olá, eu sou o <span className="text-[#915eff]">Guilherme!</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Desenvolvo aplicações funcionais e
            <br className="sm:block hidden" />
            objetivo sempre criar um pedaço
            <br className="sm:block hidden" />
            mais bacana de internet!
          </p>
        </div>
      </div>

      {/* Render seguro do Canvas como em Contact */}
      {isClient && (
        <div className="w-full h-[350px] md:h-[550px]">
          <EarthCanvas />
        </div>
      )}

      {/* Indicador de scroll */}
      <div className="w-full flex justify-center items-center mt-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
