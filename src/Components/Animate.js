import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion"

const AnimatedPart = ( {part} ) => {
    const ref = useRef(null);
    const isInView = useInView(ref)

    const visibleControls = useAnimation(); 

    useEffect(() => {
        if (isInView) {
            visibleControls.start("visible");
            console.log(isInView)
        } else {
            visibleControls.start("hidden");
        }
    }, [isInView]);

    return (
        <div ref={ref}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75},
                    visible: { opacity: 1, y: 0},
                }}
                initial="hidden"
                animate={visibleControls}
                transition={{ duration: 0.7, delay: 0.3 }}
            >
                {part}
            </motion.div>
        </div>        
    );
};

export default AnimatedPart;