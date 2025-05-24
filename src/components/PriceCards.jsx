import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { fadeIn, slideIn, textVariant } from "../utils/motion";
import { prices } from "../constants";
import { SectionWrapper } from "../hoc";
import { DeveloperGongora } from "../assets";

const PriceCard = ({ index, title, icon, description, plan }) => {
  return (
    <Tilt className="xs:w-[300px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full bg-gradient-to-r from-blue-900 to-yellow-400 p-[1px] rounded-[20px] shadow-card hover:shadow-blue-500"
      >
        <div className="bg-tertiary rounded-[20px] py-6 px-6 min-h-[380px] flex flex-col justify-between items-center gap-4">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
          <p className="text-white text-[14px] whitespace-pre-line text-left leading-relaxed">
            {description}
          </p>
          <div className="relative mt-4 group">
            {/* Sombra com blur maior e escala maior */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-yellow-600 rounded-lg blur-lg opacity-70 scale-[50px] group-hover:scale-110 transition-transform duration-200 z-0"></div>

            {/* Botão com fundo sólido sobreposto */}
            <div className="relative bg-gradient-to-r from-blue-950 to-yellow-400 p-[2px] rounded-lg z-10">
              <button
                type="button"
                className="w-full h-full bg-tertiary text-white font-semibold py-2 px-6 rounded-lg"
              >
                Obtenha o {plan}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Prices = () => {
  return (
    <>
      {/* Cards de serviços */}
      <motion.div variants={textVariant()} className="mb-10">
        <p className={styles.sectionSubText}>Preços.</p>
        <h2 className={styles.heroHeadText}>Gongora School</h2>
      </motion.div>
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {prices.map((price, index) => (
          <PriceCard key={price.title} index={index} {...price} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Prices, "prices");
