import MoBlockHeader from "@/molecules/block-header";
import MoBlockLine from "@/molecules/block-line";
import VanishDiv from "@/molecules/vanish-div";
import { motion, useScroll, useSpring } from "framer-motion";
import { Inter } from "next/font/google";
import { useRef } from "react";
import s from './styles.module.css';

const inter = Inter({
    subsets: [
        'latin'
    ],
    weight: '400',
})
const interM = Inter({
    subsets: [
        'latin'
    ],
    weight: '500',
})
function CoAboutCompany() {

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

    const refPhotos = useRef(null);
    const scrollPhotos = useScroll({
        target: refPhotos,
        offset: ["150vh 100vh", "100vh end"]
    })

    const refDesc = useRef(null);
    const scrollDesc = useScroll({
        target: refDesc,
        offset: ["start start", "85vh end"]
    })

    const refValues = useRef(null);
    const scrollValues = useScroll({
        target: refDesc,
        offset: ["start start", "85vh end"]
    })
    //animate for horizontal services scroll
    const offset1 = "start 20vh";
    const offset2 = "70vh end";

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
                <MoBlockLine text={'О компании'} />
            </motion.div>
            <motion.div
                ref={refMoBlockHeader}
                style={{ opacity: scrollMoBlockHeader.scrollYProgress }}
                className={inter.className}
            >
                <MoBlockHeader text={'О компании'} />
            </motion.div>
            <div className={s['container']}>
                <motion.div
                    ref={refPhotos}
                    style={{ opacity: scrollPhotos.scrollYProgress }}
                    className={s['photos-container']}
                >
                    <div className={s['photos-position']}
                        ref={ref}
                    >
                        <motion.div
                            className={s['image-flex']}
                            style={{
                                flex: leftY,
                            }}
                        />
                        <div className={s['image']} />
                        <div className={s['image']} />
                        <div className={s['image']} />
                        <div className={s['image']} />
                        <motion.div
                            className={s['image-flex']}
                            style={{
                                flex: rightY,
                            }}
                        />
                    </div>
                </motion.div>
                <div style={{ display: 'flex' }}>
                    <div style={{ flex: 1 }} />
                    <div className={interM.className}
                        style={{
                            flex: 1,
                            marginLeft: '16px',
                            marginBottom: '100px',
                        }}>
                        <VanishDiv>
                            <a className={s['link-read-more']}>
                                Читать больше
                            </a>
                        </VanishDiv>
                    </div>
                </div>
                <div className={s['reason-container']}>
                    <motion.div className={inter.className}
                        style={{
                            fontSize: '23px',
                            width: '660px',
                            opacity: scrollDesc.scrollYProgress,
                        }} >
                        Преимущества
                    </motion.div>
                    <div className={inter.className}>
                        <div className={s['reasons-box']}>
                            <motion.div
                                ref={refDesc}
                                style={{
                                    color: '#161616',
                                    opacity: scrollDesc.scrollYProgress,
                                }}>
                                Мы организуем надежные и безопасные транспортные решения для отечественных компаний и за рубежом. Наша команда профессионалов может предоставить индивидуальные решения для удовлетворения ваших уникальных потребностей и гарантировать своевременную доставку вашего груза по востребованным маршрутам.
                            </motion.div>
                            <VanishDiv>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    marginTop: '88px',
                                    marginBottom: '70px'
                                }}>
                                    <div style={{}}>
                                        <div className={s['reason-value-big']}>100 млн</div>
                                        <div className={s['reason-line']} />
                                        <div className={s['reason-desc']}>Страхование груза на 100 млн тенге</div>
                                        <div className={s['reason-desc']}> </div>
                                    </div>
                                </div>
                            </VanishDiv>
                            <VanishDiv>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    marginBottom: '140px'
                                }}>
                                    <div style={{ width: '290px', marginRight: '90px' }}>
                                        <div className={s['reason-value']}>300+</div>
                                        <div className={s['reason-line']} />
                                        <a className={s['reason-desc']}>Единиц собственного транспорта</a>
                                    </div>
                                    <div style={{ width: '316px' }}>
                                        <div className={s['reason-value']}>16 лет</div>
                                        <div className={s['reason-line']} />
                                        <a className={s['reason-desc']}>Бережно доставляем ваш груз</a>
                                    </div>
                                </div>
                            </VanishDiv>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CoAboutCompany;