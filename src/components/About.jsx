import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card
        "
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introdução</p>
        <h2 className={styles.heroHeadText}>Sobre.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17-px] max-w-3xl leading-[30px]"
      >
        Sou desenvolvedor full stack com experiência em front-end e back-end,
        utilizando tecnologias como JavaScript, TypeScript, Node.js, React,
        Three.js e Docker. Minha missão é transformar ideias em experiências
        digitais criativas e funcionais, sempre com foco na qualidade, inovação
        e usabilidade. Apaixonado por programação e aprendizado contínuo, já
        tive a oportunidade de participar de diversos projetos, ministrar
        palestras e lecionar aulas, compartilhando conhecimento e inspirando
        outros desenvolvedores. Acredito que a tecnologia é uma ponte entre o
        imaginário e a realidade — e estou pronto para colaborar em projetos
        incríveis ou ensinar o que aprendi ao longo da jornada. Vamos construir
        algo extraordinário juntos?
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
