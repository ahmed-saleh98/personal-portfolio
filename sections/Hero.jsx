import { motion } from 'framer-motion';
import { fadeIn, slideIn, zoomIn } from '../utils/motion';

const Hero = () => {
  return (
    <motion.section
      id="home"
      className="container px-4 flex flex-wrap justify-center md:justify-between 
      items-center gap-8 pb-10 md:pt-32 pt-20 mb-4"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        className="hero-text md:ml-3 md:block flex flex-col items-center"
      >
        <div className="overflow-hidden">
          <motion.p
            variants={slideIn('up', 100, 0.4, 0.4)}
            className="text-xl font-medium"
          >
            Alloha There, It's
          </motion.p>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            variants={slideIn('up', 100, 0.7, 0.4)}
            className="hero-heading text-[--color-primary] "
          >
            Ahmed Saleh
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h2
            variants={slideIn('up', 100, 0.9, 0.4)}
            className="hero-heading"
          >
            a Front-End Developer
          </motion.h2>
        </div>
        <motion.button variants={zoomIn(1, 0.5)}>
          <a
            href="./CV.pdf"
            className="download-btn bg-[--main-color] p-4 text-lg text-white rounded-lg font-medium inline-block"
            download="Ahmed Saleh's Resume"
          >
            Download CV
          </a>
        </motion.button>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={fadeIn('tween', 0.2, 1)}
        className="lg:h-[450px] lg:min-w-[350px] h-[380px] min-w-[300px] 
        bg-[--main-color] rounded-t-full relative"
      >
        <motion.div variants={zoomIn(0.3, 0.5)} className="orange-obj" />
        <div className="overflow-hidden absolute w-full h-full">
          <motion.img
            loading="lazy"
            variants={slideIn('up', 100, 0.2, 0.7)}
            src="./images/hero-avatar.webp"
            alt="hero-avatar"
            className="absolute bottom-0"
          />
        </div>
        <motion.div
          variants={zoomIn(0.5, 0.5)}
          className="green-obj max-sm:-left-[30px]"
        />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
