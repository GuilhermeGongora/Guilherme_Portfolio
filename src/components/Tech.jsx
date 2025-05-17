import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { BallCanvas } from "./canvas";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center mb-10">
        <p className={styles.sectionSubText}>Habilidades.</p>
        <h2 className={styles.heroHeadText}>Ferramentas.</h2>
      </motion.div>

      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {technologies.map((tech, index) => (
          <React.Fragment key={tech.name}>
            {/* Mobile: Card simples */}
            <div className="block md:hidden w-[120px] hover:scale-110">
              <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className="w-full bg-[#03346E] p-4 rounded-xl  shadow-card hover:shadow-blue-400  hover:shadow-card  transition-shadow duration-300"
              >
                <div className="flex flex-col items-center">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-12 h-12 object-contain mb-2"
                  />
                  <h3 className="text-white text-sm font-semibold text-center">
                    {tech.name}
                  </h3>
                </div>
              </motion.div>
            </div>

            {/* Desktop: BallCanvas 3D */}
            <div className="hidden md:block w-28 h-28">
              <BallCanvas icon={tech.icon} />
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
