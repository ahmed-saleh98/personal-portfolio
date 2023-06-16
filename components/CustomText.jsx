import { motion } from 'framer-motion';
import {
  textContainer,
  pTextContainer,
  titleVariants,
  pVariants,
} from '@/utils/motion';

export const TitleText = ({ title }) => {
  return (
    <motion.h2
      variants={textContainer}
      className={`py-8 tracking-[5px] font-semibold text-3xl uppercase`}
    >
      {Array.from(title).map((letter, i) => (
        <motion.span variants={titleVariants} className="inline-block" key={i}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.h2>
  );
};

export const ParagraphText = ({ className, text }) => {
  let textArray = text.split(' ');
  return (
    <motion.p variants={pTextContainer} className={className}>
      {textArray.map((word, i) => (
        <motion.span
          variants={pVariants}
          className="inline-block mx-[2px]"
          key={i}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};
