import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      {/* Títulos animados */}
      <motion.div variants={textVariant()} className="text-center mb-10">
        <p className={styles.sectionSubText}>Habilidades.</p>
        <h2 className={styles.heroHeadText}>Ferramentas.</h2>
      </motion.div>

      {/* Ícones centralizados em grid flexível */}
      <div className="flex flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "Skills");
