import dynamic from 'next/dynamic';
import { useState } from 'react';
import { projects } from '@/constants/projects';
import { TitleText } from '@/components/CustomText';
import LoadingCard from '@/components/LoadingCard';
import { motion } from 'framer-motion';

const ProjectCard = dynamic(() => import('../components/ProjectCard'), {
  loading: () => <LoadingCard />,
});

const Work = () => {
  const [next, setNext] = useState(3);

  const loadMore = () => {
    setTimeout(() => setNext(next + 3), 300);
  };
  const loadLess = () => {
    setTimeout(() => setNext(next - 3), 200);
  };

  let projectsToLoad = projects.slice(0, next);

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.2 }}
      id="work"
      className="flex flex-col items-center py-10 overflow-hidden"
    >
      <TitleText title="Work" />
      <motion.div
        initial="hidden"
        whileInView="show"
        className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all"
      >
        {projectsToLoad.map((project, i) => (
          <ProjectCard project={project} key={i} i={i} />
        ))}
      </motion.div>
      <div className="flex gap-5 font-medium mt-8">
        <button
          onClick={loadMore}
          className="load-button"
          disabled={next < projects.length ? false : true}
        >
          Load More
        </button>
        <button
          onClick={loadLess}
          className="load-button"
          disabled={next > 3 ? false : true}
        >
          Load Less
        </button>
      </div>
    </motion.section>
  );
};

export default Work;
