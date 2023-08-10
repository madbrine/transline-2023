import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

function VanishDiv({ children }) {

    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "85vh end"]
    });
    return(
        <motion.div
            style={{opacity: scrollYProgress}}
            ref={ref}
        >
            {children}
        </motion.div>
    )
}
export default VanishDiv;