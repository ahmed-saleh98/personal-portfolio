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
          text="I'm Ahmed Mohamed Saleh, a Front-End Developer with 4+ years of experience building responsive, accessible, and performant web applications using React, Next.js, and Vue.js. I hold a bachelor's degree in Management Information Systems and a UI/UX Development diploma from ITI. Alongside front-end development, I'm an Operations Team Leader at Hudl StatsBomb, where I built a reporting automation that cut weekly reporting from about 3 hours to 30 minutes and led the testing and rollout of a major app release. I like owning projects end to end, from Figma prototypes to production-ready, SEO-optimized interfaces."
        />
      </motion.div>
    </section>
  );
};

export default About;
