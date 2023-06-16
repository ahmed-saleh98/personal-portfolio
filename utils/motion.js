export const navVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 0.2,
    },
  },
};

export const slideIn = (direction, space, delay, duration) => ({
  hidden: {
    x:
      direction === 'left'
        ? `-${space}%`
        : direction === 'right'
        ? `${space}%`
        : 0,
    y:
      direction === 'up'
        ? `${space}%`
        : direction === 'down'
        ? `-${space}%`
        : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      delay,
      duration,
    },
  },
});

export const textContainer = {
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: i * 0.1 },
  }),
};
export const pTextContainer = {
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: i * 0.06 },
  }),
};

export const titleVariants = {
  hidden: {
    opacity: 0,
    scale: 0.7,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'tween',
      ease: 'easeIn',
      duration: 0.3,
    },
  },
};
export const pVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      type: 'tween',
      ease: 'easeIn',
      duration: 0.1,
    },
  },
};

export const fadeIn = (type, delay, duration) => ({
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const zoomIn = (delay, duration) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'tween',
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const footerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 100,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 0.2,
    },
  },
};
