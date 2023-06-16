import { motion } from 'framer-motion';
import { slideIn } from '@/utils/motion';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaCodepen,
  FaWhatsapp,
} from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const SocialLinks = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={slideIn('up', 100, 0.6, 0.4)}
      className="social-links "
    >
      <ul className="flex gap-4 transition">
        <li>
          <a
            aria-label="facebook"
            className="facebook"
            target="_blank"
            href="https://www.facebook.com/abusaleh1998"
            rel="noreferrer"
          >
            <FaFacebook />
          </a>
        </li>
        <li>
          <a
            aria-label="twitter"
            className="twitter"
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/ahmed_saleh_98"
          >
            <FaTwitter />
          </a>
        </li>
        <li>
          <a
            aria-label="whatsapp"
            className="whatsapp"
            target="_blank"
            rel="noreferrer"
            href="https://api.whatsapp.com/send?phone=+20 01273698284"
          >
            <FaWhatsapp />
          </a>
        </li>
        <li>
          <a
            aria-label="linkedin"
            className="linkedin"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/ahmed-mo-saleh"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            aria-label="github"
            className="github"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ahmed-saleh98"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            aria-label="codepen"
            className="codepen"
            target="_blank"
            rel="noreferrer"
            href="https://codepen.io/ahmed-saleh98"
          >
            <FaCodepen />
          </a>
        </li>
        <li>
          <a
            aria-label="e-mail"
            className="mail"
            rel="noreferrer"
            href="mailto:ahmed.mo.saleh98@gmail.com"
          >
            <HiMail />
          </a>
        </li>
      </ul>
    </motion.div>
  );
};

export default SocialLinks;
