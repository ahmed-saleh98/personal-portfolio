import { motion } from 'framer-motion';
import { slideIn } from '@/utils/motion';
import { FaGithub } from 'react-icons/fa';
import { GiWorld } from 'react-icons/gi';

const ProjectCard = ({ project, i }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={slideIn('up', 50, i * 0.1, 0.3)}
      viewport={{ once: true }}
      className="card glassmorphism"
    >
      <img
        loading="lazy"
        className="h-full w-full object-cover"
        src={project.image}
        alt={project.title}
      />
      <h3 className="font-medium ml-3">{project.title}</h3>
      <div className="ml-3">
        <a
          className="text-white p-2 px-4 mr-4 inline-block bg-[--color-primary] 
                rounded-md hover:shadow-[0px_0px_5px_1px_var(--color-secondary)] transition-all"
          href={project.livePreview}
          target="_blank"
        >
          Live Preview
          <GiWorld className="inline-block ml-1" />
        </a>
        <a
          className="text-white p-2 px-4 inline-block bg-[--main-color] 
                rounded-md hover:shadow-[0px_0px_5px_1px_var(--color-secondary)] transition-all"
          href={project.code}
          target="_blank"
        >
          Code
          <FaGithub className="inline-block ml-1" />
        </a>
      </div>
    </motion.div>
  );
};
export default ProjectCard;
