import React, { useState, useEffect } from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

// Optimized FeedbackCard for mobile responsiveness
const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  const [tiltOptions, setTiltOptions] = useState({
    max: 0,
    scale: 1,
    speed: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        // Disable tilt on small screens
        setTiltOptions({ max: 0, scale: 1, speed: 0 });
      } else {
        setTiltOptions({ max: 45, scale: 1.1, speed: 450 });
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div variants={fadeIn("", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={tiltOptions}
        className="bg-black-200 p-6 sm:p-10 rounded-3xl sm:w-[320px] w-full"
      >
        {/* Quote icon */}
        <p className="text-white font-black text-[32px] md:text-[48px]">"</p>
        <div className="mt-1">
          <p className="text-white tracking-wider text-[16px] sm:text-[18px]">
            {testimonial}
          </p>
          <div className="mt-7 flex justify-between items-center gap-2">
            <div className="flex-1 flex flex-col">
              <p className="text-white font-medium text-[14px] sm:text-[16px]">
                <span className="blue-text-gradient">@</span> {name}
              </p>
              <p className="mt-1 text-secondary text-[10px] sm:text-[12px]">
                {designation} of {company}
              </p>
            </div>
            <img
              src={image}
              alt={`feedback-by-${name}`}
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Feedbacks = () => {
  const [hovered, setHovered] = useState(false);

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="relative bg-transparent min-h-[400px] flex flex-col items-center justify-center"
      onMouseMove={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* "EM BREVE" overlay, hidden on small screens for performance */}
      <div className="absolute inset-0 flex items-center justify-center z-20 bg-transparent rotate-0 sm:-rotate-12 pointer-events-none">
        {!hovered && (
          <motion.p
            onClick={handleScrollToContact}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="text-white text-3xl sm:text-6xl md:text-9xl font-bold tracking-wide sm:tracking-widest shadow-md"
          >
            EM BREVE!
          </motion.p>
        )}
      </div>

      {/* Hover details, also adjusted for mobile */}
      {hovered && (
        <motion.div
          onClick={handleScrollToContact}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center gap-4 sm:gap-6 z-30 rotate-0 sm:-rotate-12 px-4"
        >
          <p className="text-white text-xl sm:text-2xl font-extrabold tracking-wide drop-shadow-lg">
            EM BREVE!
          </p>

          <p className="text-white text-base sm:text-3xl max-w-xs sm:max-w-md">
            Quer ver seu depoimento aqui? Fale comigo e conte sua experiência em
            relação ao meu trabalho!
          </p>

          <button
            onClick={handleScrollToContact}
            className="relative inline-block group mt-4"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-yellow-600 rounded-lg blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-200"></span>
            <span className="relative inline-flex items-center justify-center bg-tertiary text-white font-semibold py-2 px-6 rounded-lg">
              Entrar em contato
            </span>
          </button>
        </motion.div>
      )}

      {/* Testimonials section */}
      <div className="relative mt-12 w-full bg-black-100 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 backdrop-blur-sm sm:backdrop-blur-md z-10"></div>
        <div
          className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px] relative z-0`}
        >
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>O que os outros dizem.</p>
            <h2 className={styles.sectionHeadText}>Depoimentos.</h2>
          </motion.div>
        </div>

        <div
          className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7 justify-center relative z-0`}
        >
          {testimonials.map((testimonial, index) => (
            <FeedbackCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
