import { motion } from 'framer-motion';
import { slideIn } from '@/utils/motion';

const Footer = () => (
  <motion.footer
    initial="hidden"
    whileInView="show"
    variants={slideIn('up', 100, 0.2, 0.4)}
    className="bg-[--color-gray] dark:bg-[--main-color] border-t border-[--main-color] py-2 text-sm"
  >
    <div className="container px-4 flex gap-2 justify-between flex-wrap items-center text-center">
      <p className="text-xs">
        this Template was designed by © AnimaApp & Figma All rights reserved.
      </p>
      <p className="max-sm:w-full">
        Made with
        <span className="text-base text-red-700"> &#10084; </span>
        by{' '}
        <a href="#home" className="font-semibold text-[--color-primary]">
          Ahmed Saleh
        </a>
      </p>
    </div>
  </motion.footer>
);

export default Footer;
