import { motion } from 'framer-motion';
import { TitleText, ParagraphText } from '@/components/CustomText';

const About = () => {
  return (
    <section
      id="about"
      className="bg-[--color-gray] dark:bg-[--main-color] py-14 mt-4"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.4 }}
        className="container flex flex-col items-center"
      >
        <TitleText title="About" />

        <ParagraphText
          className="w-3/4 text-center text-2xl font-medium"
          text="I'm Ahmed Mohamed Saleh,
        Passionate junior Front-end developer with a desire to learn and grow,
        I have a bachelor's degree in computer science and management information systems,
        I have a passion for programming, especially for Front-End development.
        I have some skills and experience in HTML, CSS, JavaScript, Bootstrap, Jquery,
        React, Next, Redux, Sass, tailwind.js, and webpack.
        I hope to be a great engineer and I'm working on it…"
        />
      </motion.div>
    </section>
  );
};

export default About;
