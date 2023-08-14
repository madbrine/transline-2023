import { Inter } from 'next/font/google';
import s from './styles.module.css'
import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react';

const inter = Inter({
    subsets: ['latin-ext'],
    weight: '400',
})
function CoIntro() {
    const refH1 = useRef(null);
    const ScrollH1 = useScroll({
        target: refH1,
        offset: ["start start", "end 10vh"]
    });

    const refH2 = useRef(null);
    const ScrollH2 = useScroll({
        target: refH2,
        offset: ["start start", "end 10vh"]
    });

    const refForm = useRef(null);
    const ScrollForm = useScroll({
        target: refForm,
        offset: ["start start", "10vh 15vh"]
    })
    return (
        <div className={inter.className}>
            <div className={s['container']}>
                <motion.h1
                    ref={refH1}
                    style={{ opacity: ScrollH1.scrollYProgress }}
                    className={inter.className}
                >
                    Крупнейшая логистическая
                </motion.h1>
                <motion.h1
                    ref={refH2}
                    style={{ opacity: ScrollH2.scrollYProgress }}
                    className={inter.className}
                >
                    компания Центральной Азии
                </motion.h1>
                <motion.div className={s['form-container']}
                    ref={refForm}
                    style={{ opacity: ScrollForm.scrollYProgress }}
                >
                    {/* <div className={s['form-switches']}>
                    <a className={inter.className}>Рассчитать</a>
                    <a className={inter.className}>Консультация</a>
                </div> */}
                    <div className={s['form-inputs-container']}
                        style={{ marginBottom: -50, }}>
                        <div className={s['form-input']}>
                            <input className={s['input-top-border']} type="text" name="name" placeholder="Откуда" />
                            <input type="text" name="name" placeholder="Куда" />
                            <div className={s['input-container']}>
                                <input className={s['input-field']} type="text" name="name" placeholder="Объем" />
                                <span className={s['input-addon']}>м³</span>
                            </div>
                            <div className={s['input-container']}>
                                <input className={s['input-field']} type="text" name="name" placeholder="Вес" />
                                <span className={s['input-addon']}>тонн</span>
                            </div>
                            <input className={s['input-bottom-border']} type="text" name="name" placeholder="Описание груза" />
                            <a>
                                <button className={inter.className}>Рассчитать</button>
                            </a>
                        </div>
                        <div className={s['insurance-container']}>
                            <div className={s['insurance-box']}>
                                <input className={s['insurance-checkbox']} type='checkbox' />
                                <div className={inter.className} id={s['text-insurance']}> Требуется страхование</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
export default CoIntro;