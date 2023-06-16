import { TitleText } from '@/components/CustomText';
import SocialLinks from '@/components/SocialLinks';
import { motion } from 'framer-motion';
import { slideIn, zoomIn } from '@/utils/motion';

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
        <motion.div
          initial="hidden"
          whileInView="show"
          className="md:w-[45%] min-w-[350px]"
        >
          <form
            className="flex flex-col gap-3"
            action="mailto:ahmedmosaleh98@gmail.com"
            method="post"
            encType="text/plain"
          >
            <div className="overflow-hidden">
              <motion.input
                variants={slideIn('up', 100, 0.4, 0.4)}
                required
                type="text"
                name="name"
                placeholder="Name"
                className="contact-input h-[70px] px-4 "
              />
            </div>
            <div className="overflow-hidden">
              <motion.input
                variants={slideIn('up', 100, 0.7, 0.5)}
                required
                type="email"
                name="email"
                placeholder="Email"
                className="contact-input h-[70px] px-4"
              />
            </div>
            <div className="overflow-hidden">
              <motion.textarea
                variants={slideIn('up', 100, 1, 0.7)}
                required
                name="message"
                placeholder="Type your message here"
                className="contact-input h-[250px] p-4 resize-none"
              />
            </div>
            <motion.button
              variants={zoomIn(1.2, 0.5)}
              type="submit"
              className="bg-[--main-color] w-[150px] h-[60px] mt-2 text-white font-semibold 
              hover:shadow-[0_0_5px_1px_var(--color-secondary)]"
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
