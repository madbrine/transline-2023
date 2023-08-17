import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

function VanishDiv({ children, big, className, style }) {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "85vh end"]
    });

    const bigRef = useRef(null);
    const a = useScroll({
        target: bigRef,
        offset: ["110vh 100vh", "100vh end"]
    })
    let baseStyleA = {
        opacity: scrollYProgress
    }
    let baseStyleB = {
        opacity: a.scrollYProgress
    }
    let combinedStylesA = Object.assign({}, baseStyleA, style);
    let combinedStylesB = Object.assign({}, baseStyleB, style);
    return (
        <>
            {!big ? 
                <motion.div
                    className={className}
                    style={combinedStylesA}
                    ref={ref}
                >
                    {children}
                </motion.div>
            
                :
                <motion.div
                    className={className}
                    style={combinedStylesB}
                    ref={bigRef}
                >
                    {children}
                </motion.div>
                
            }
        </>
    )
}
export default VanishDiv;