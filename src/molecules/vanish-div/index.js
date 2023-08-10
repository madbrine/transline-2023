import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

function VanishDiv({ children, big }) {

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
    return (
        <>
            {!big ? 
                <motion.div
                    style={{ opacity: scrollYProgress }}
                    ref={ref}
                >
                    {children}
                </motion.div>
            
                :
                <motion.div
                    style={{ opacity: a.scrollYProgress }}
                    ref={bigRef}
                >
                    {children}
                </motion.div>
                
            }
        </>
    )
}
export default VanishDiv;