import MoBlockHeader from "@/molecules/block-header";
import MoBlockLine from "@/molecules/block-line";
import s from './styles.module.css';
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef, useState } from "react";

function CoOurServices() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    });
    const a = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });
    const leftY = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });
    const rightY = useSpring(a.scrollYProgress, { stiffness: 100, damping: 20 });
    return (
        <div>
            <MoBlockLine text="Услуги" />
            <div ref={ref}>
                <MoBlockHeader
                    text="Решения, для компаний, любой сложности"
                    small
                    getFormButton
                />
                <div className={s['container']}>
                    <div
                    >
                        <div
                            style={{
                                marginLeft: 0,
                            }}
                        >
                            <div className={s['services-container']}>
                                <motion.div className={s['flex-1']}
                                    style={{
                                        flex: leftY,
                                        position: 'static'
                                    }}
                                >
                                </motion.div>
                                <div className={s['service']}>
                                    <div className={s['service-image']}></div>
                                </div>
                                <div className={s['service']}>
                                    <div className={s['service-image']}></div>
                                </div>
                                <div className={s['service']}>
                                    <div className={s['service-image']}></div>
                                </div>
                                <div className={s['service']}>
                                    <div className={s['service-image']}></div>
                                </div>
                                <motion.div className={s['flex-1']}
                                    style={{
                                        flex: rightY,
                                        position: 'static'
                                    }}
                                >
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                        }}>
                        <motion.div>
                            {a.scrollYProgress}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CoOurServices;