import MoBlockHeader from "@/molecules/block-header";
import MoBlockLine from "@/molecules/block-line";
import s from './styles.module.css';
import { motion, useScroll } from "framer-motion";
import { useRef, useState } from "react";

function CoOurServices() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });
    const [IsAnimate, setAnimate] = useState(0);
    useState(() => {
        let newValud = 1000 * scrollYProgress;
        setAnimate(scrollYProgress);
        console.log(IsAnimate);
    }, [scrollYProgress]);
    return (
        <div>
            <MoBlockLine text="Услуги" />
            <MoBlockHeader
                text="Решения, для компаний, любой сложности"
                small
                getFormButton
            />
            <div className={s['container']}>
                <div
                ref={ref}
                >
                    <div
                        style={{
                            marginLeft: 0,
                        }}
                    >
                        <div className={s['services-container']}>
                            <motion.div className={s['service']}
                                style={{
                                    border: 'solid',
                                    borderWidth: {IsAnimate},
                                    borderColor: '#000'
                                }}
                            >
                                <div className={s['service-image']}></div>
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
                        </div>
                    </div>
                </div>
                <div style={{
                    height: 710
                }}>
                    <motion.div>
                        {scrollYProgress}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
export default CoOurServices;