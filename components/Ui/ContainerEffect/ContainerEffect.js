import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
const ContainerEffect = (props) => {
  const { ref, inView: myElementIsVisible } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (myElementIsVisible === true) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1.4,
          bounce: 0.3,
        },
      });
    }
    if (myElementIsVisible === false) {
      animation.start({ x: "-100%", opacity: 1 });
    }
  }, [animation, myElementIsVisible]);
  return (
    <motion.div animate={animation}>
      <div ref={ref}>{props.children}</div>
    </motion.div>
  );
};

export default ContainerEffect;
