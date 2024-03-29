/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { AnimatePresence, motion } from 'framer-motion';
const AnimationWapper = ({
  children,
  keyValue = null,
  initial = { opacity: 0 },
  animate = { opacity: 1 },
  transition = { duration: 1 },
  className = '',
}: any) => {
  return (
    <AnimatePresence>
      <motion.div
        key={keyValue}
        initial={initial}
        animate={animate}
        transition={transition}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimationWapper;
