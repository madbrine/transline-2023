import MoBlockHeader from "@/molecules/block-header";
import MoBlockLine from "@/molecules/block-line";
import s from './styles.module.css';
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef, useState } from "react";

function CoOurServices() {

    const refMoBlockLine = useRef(null);
    const scrollMoBlockLine = useScroll({
        target: refMoBlockLine,
        offset: ["start start", "1vh 25vh"]
    });

    const refMoBlockHeader = useRef(null);
    const scrollMoBlockHeader = useScroll({
        target: refMoBlockHeader,
        offset: ["start start", "85vh end"]
    });

    const refServices = useRef(null);
    const scrollServices = useScroll({
        target: refServices,
        offset: ["150vh 100vh", "100vh end"]
    });

    //animate for horizontal services scroll
    const offset1 = "start start";
    const offset2 = "88vh end";

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [offset1, offset2]
    });
    const a = useScroll({
        target: ref,
        offset: [offset2, offset1]
    });
    const leftY = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });
    const rightY = useSpring(a.scrollYProgress, { stiffness: 100, damping: 20 });

    return (
        <div>
            <motion.div
                ref={refMoBlockLine}
                style={{ opacity: scrollMoBlockLine.scrollYProgress }}
            >
                <MoBlockLine text="Услуги" />
            </motion.div>
            <div ref={ref}>
                <motion.div
                    ref={refMoBlockHeader}
                    style={{ opacity: scrollMoBlockHeader.scrollYProgress }}
                >
                    <MoBlockHeader
                        text="Решения, для компаний, любой сложности"
                        small
                        getFormButton
                    />
                </motion.div>
                <div className={s['container']}>
                    <div>
                        <div>
                            <motion.div
                                ref={refServices}
                                style={{ opacity: scrollServices.scrollYProgress }}
                                className={s['services-container']}
                            >
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
                            </motion.div>
                        </div>
                    </div>
                    <div
                        style={{
                        }}>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CoOurServices;