const { default: MoBlockHeader } = require("@/molecules/block-header");
const { default: MoBlockLine } = require("@/molecules/block-line");
import { motion, useScroll } from "framer-motion";
import { Inter } from "next/font/google";
import { useRef } from "react";
import s from "./styles.module.css";

const inter = Inter({
    subsets: ['latin'],
    weight: '400'
})

function CoWhyWe() {
    const ref = useRef(null);

    const circleLeft = useScroll({
        target: ref,
        offset: ['end 80vh', 'start start']
    })
    const circleRight = useScroll({
        target: ref,
        offset: ['start start', 'end end']
    })
    return (
        <div>
            <MoBlockLine text="Почему мы?" />
            <MoBlockHeader text="Преимущества нашей компании" />
            <div className={s['container']}>
                <div className={s['reasons-scrollbar']}>
                    <div className={s['reason-card']}></div>
                    <div className={s['reason-card']}></div>
                    <div className={s['reason-card']}></div>
                    <div className={s['reason-card']}></div>
                    <div className={s['reason-card']}></div>
                    <div className={s['reason-card']}></div>
                    <div className={s['reason-card']}></div>
                </div>
                <div className={inter.className}>
                    <div className={s['circle-container']} ref={ref}>
                        <motion.div 
                            style={{flex: circleLeft.scrollYProgress}}
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                            <circle cx="15" cy="15" r="14" fill="white" stroke="#00ACCD" stroke-width="2" />
                        </svg>
                        <motion.div
                        />
                    </div>
                    <div className={s['line-scrollbar']}>
                        <div className={s['vert-line']}>
                            <a>0%</a>
                        </div>
                        <div className={s['horiz-line']} />
                        <div className={s['vert-line']}>
                            <a>25%</a>
                        </div>
                        <div className={s['horiz-line']} />
                        <div className={s['vert-line']}>
                            <a>50%</a>
                        </div>
                        <div className={s['horiz-line']} />
                        <div className={s['vert-line']}>
                            <a>75%</a>
                        </div>
                        <div className={s['horiz-line']} />
                        <div className={s['vert-line']}>
                            <a>100%</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CoWhyWe;