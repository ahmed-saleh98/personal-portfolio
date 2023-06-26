import { TitleText } from '@/components/CustomText';
import SocialLinks from '@/components/SocialLinks';
import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';
import { slideIn } from '@/utils/motion';

const Contact = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      id="contact"
      className="flex flex-col items-center py-10 relative "
    >
      <TitleText title="contact" />
      <div className="flex justify-center md:justify-between w-full gap-5 flex-wrap ">
        <motion.div initial="hidden" whileInView="show" className="md:w-[45%]">
          <div className="overflow-hidden">
            <motion.h3
              variants={slideIn('up', 70, 0.2, 0.4)}
              className="text-3xl font-semibold mb-3"
            >
              Lets Work Together
            </motion.h3>
          </div>
          <div className="overflow-hidden">
            <motion.p
              variants={slideIn('up', 70, 0.4, 0.4)}
              className="w-[350px] py-5 text-lg"
            >
              I will be glad if we can get in touch. You can send me a message,
              or you can find me here...
            </motion.p>
          </div>
          <div className="overflow-hidden">
            <SocialLinks />
          </div>
        </motion.div>
        <ContactForm />
      </div>
    </motion.section>
  );
};

export default Contact;
