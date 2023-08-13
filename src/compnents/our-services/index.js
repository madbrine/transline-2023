import MoBlockHeader from "@/molecules/block-header";
import MoBlockLine from "@/molecules/block-line";
import s from './styles.module.css';
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import autoPhoto from "../../assets/auto-cargo.webp";
import multimodalPhoto from "../../assets/multimodal-cargo.webp";
import airPhoto from "../../assets/air-cargo.webp";
import negabaritPhoto from "../../assets/negabarit-cargo.webp";
import Image from "next/image";
import { Inter } from "next/font/google";
import MoButton from "@/molecules/button";


const inter = Inter({
    subsets: ['latin'],
    weight: '400'
})
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
    const offset2 = "90vh end";

    const ref = useRef(null);
    const a = useScroll({
        target: refMoBlockLine,
        offset: [offset1, offset2]
    });
    const b = useScroll({
        target: refMoBlockLine,
        offset: [offset2, offset1]
    });
    // const leftY = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });
    // const rightY = useSpring(a.scrollYProgress, { stiffness: 100, damping: 20 });

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
                        buttonText="Все услуги"
                    />
                </motion.div>
                <div className={s['container']}>
                    <div className={inter.className}>
                        <motion.div
                            ref={refServices}
                            style={{ opacity: scrollServices.scrollYProgress }}
                            className={s['services-container']}
                        >
                            <motion.div className={s['flex-1']}
                                style={{
                                    flex: a.scrollYProgress,
                                    position: 'static'
                                }}
                            >
                            </motion.div>
                            <div className={s['service']}>
                                <div className={s['service-image']}>
                                    <Image
                                        src={autoPhoto}
                                        alt="auto"
                                        layout="fill"
                                        objectFit="cover"
                                        style={{ borderRadius: 10 }} />
                                </div>
                                <div className={s['service-space']}>
                                    <div>
                                        <div className={s['service-header']}>
                                            Автомобильные перевозки
                                        </div>
                                        <div className={s['service-desc']}>
                                            Наша глобальная сеть обеспечивает доставку грузов наших клиентов по всему миру
                                        </div>
                                    </div>
                                    <div>
                                        <MoButton text='Узнать больше' blue href='/'/>
                                    </div>
                                </div>
                            </div>
                            <div className={s['service']}>
                                <div className={s['service-image']}>
                                    <Image
                                        src={multimodalPhoto}
                                        alt="auto"
                                        layout="fill"
                                        objectFit="cover"
                                        style={{ borderRadius: 10 }} />
                                </div>
                                <div className={s['service-space']}>
                                    <div>
                                        <div className={s['service-header']}>
                                            Мультимодальные перевозки
                                        </div>
                                        <div className={s['service-desc']}>
                                            Позвольте нам помочь вам донести ваши продукты и идеи до всего мира
                                        </div>
                                    </div>
                                    <div >
                                        <MoButton text='Узнать больше' blue href='/' />
                                    </div>
                                </div>
                            </div>
                            <div className={s['service']}>
                                <div className={s['service-image']}>
                                    <Image
                                        src={airPhoto}
                                        alt="auto"
                                        layout="fill"
                                        objectFit="cover"
                                        style={{ borderRadius: 10 }} />
                                </div>
                                <div className={s['service-space']}>
                                    <div>
                                        <div className={s['service-header']}>
                                            Авиа перевозки
                                        </div>
                                        <div className={s['service-desc']}>
                                        Мы обладаем знаниями, необходимыми для обслуживания широкого спектра отраслей
                                        </div>
                                    </div>
                                    <div >
                                        <MoButton text='Узнать больше' blue href='/' />
                                    </div>
                                </div>
                            </div>
                            <div className={s['service']}>
                                <div className={s['service-image']}>
                                    <Image
                                        src={negabaritPhoto}
                                        alt="auto"
                                        layout="fill"
                                        objectFit="cover"
                                        style={{ borderRadius: 10 }} />
                                </div>
                                <div className={s['service-space']}>
                                    <div>
                                        <div className={s['service-header']}>
                                            Негабаритные перевозки
                                        </div>
                                        <div className={s['service-desc']}>
                                            Мы обладаем знаниями, необходимыми для обслуживания широкого спектра отраслей
                                        </div>
                                    </div>
                                    <div >
                                        <MoButton text='Узнать больше' blue href='/' />
                                    </div>
                                </div>
                            </div>
                            <motion.div className={s['flex-1']}
                                style={{
                                    flex: b.scrollYProgress,
                                    position: 'static'
                                }}
                            >
                            </motion.div>
                        </motion.div>
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