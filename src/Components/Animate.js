import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion"

const AnimatedPart = ( {part, cellClass="", cellImage="", cellBorder=false} ) => {
    
    // animation effect + user effect
    const ref = useRef(null);
    const isInView = useInView(ref)

    const visibleControls = useAnimation(); 
    useEffect(() => {
        if (isInView) {
            if (cellBorder) {
                visibleControls.start("cell");
            } else {
                visibleControls.start("visible");
            }
        } else {
            visibleControls.start("hidden");
        }
    }, [isInView, visibleControls, cellBorder]);

    return (
        <div ref={ref} className={cellClass}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75},
                    visible: { opacity: 1, y: 0, height: '100%'},
                    cell: {
                        opacity: 1, 
                        y: 0, 
                        height: '100%', 
                        backgroundColor: '#1e2124', 
                        borderRadius: '20px',
                        border: '2px solid #32383e',
                        boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.1)',
                    }
                }}
                initial="hidden"
                animate={visibleControls}
                transition={{ duration: 0.7, delay: 0.3 }}
            >
                {cellImage !== "" && cellImage}
                {part}
            </motion.div>
        </div>        
    );
};

export default AnimatedPart;