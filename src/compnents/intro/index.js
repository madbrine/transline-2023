import { Inter } from 'next/font/google';
import s from './styles.module.css'
import { motion, useScroll } from 'framer-motion'
import { useRef, useState } from 'react';

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

    const [isFrom, setFrom] = useState('');
    const [isTo, setTo] = useState('');
    const [isVolume, setVolume] = useState('');
    const [isWeight, setWeight] = useState('');
    const [isDescription, setDescription] = useState('');


    const updateFrom = e => setFrom(e.target.value);
    const updateTo = e => setTo(e.target.value);
    const updateVolume = e => setVolume(e.target.value);
    const updateWeight = e => setWeight(e.target.value);
    const updateDescription = e => setDescription(e.target.value);

    function storageLoader() {
        sessionStorage.setItem('offerData', [isFrom, isTo, isVolume, isWeight, isDescription])
    }
    function localGet() {
        console.log( sessionStorage.getItem('offerData'))
    }

    return (
        <div className={inter.className}>
            <div className={s['container']}>
                <div className={s['header']}>
                    <div>
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
                    </div>
                </div>
                        <button onClick={localGet}>sdsd</button>
                <motion.div className={s['form-container']}
                    ref={refForm}
                    style={{ opacity: ScrollForm.scrollYProgress }}
                >
                    {/* 
                    <div className={s['form-switches']}>
                        <a className={inter.className}>Рассчитать</a>
                        <a className={inter.className}>Консультация</a>
                    </div> 
                    */}
                    <div className={s['form-inputs-container']}
                        style={{ marginBottom: -50, }}>
                        <div className={s['form-input']}>
                            <input className={s['input-top-border']} onChange={updateFrom} type="text" name="name" placeholder="Откуда" />
                            <input onChange={updateTo} type="text" name="name" placeholder="Куда" />
                            <div className={s['input-container']}>
                                <input className={s['input-field']} onChange={updateVolume} type="text" name="name" placeholder="Объем" />
                                <span className={s['input-addon']}>м³</span>
                            </div>
                            <div className={s['input-container']}>
                                <input className={s['input-field']} onChange={updateWeight} type="text" name="name" placeholder="Вес" />
                                <span className={s['input-addon']}>тонн</span>
                            </div>
                            <input className={s['input-bottom-border']} onChange={updateDescription} type="text" name="name" placeholder="Описание груза" />
                            <a href="/sertifikat">
                                <button onClick={storageLoader} className={inter.className}>Рассчитать</button>
                            </a>
                        </div>
                        <div className={s['insurance-container']}>
                            <div className={s['insurance-box']}>
                                <input className={s['insurance-checkbox']} type='checkbox'/>
                                <div className={inter.className} id={s['text-insurance']}> Требуется страхование</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div >
    );
}
export default CoIntro;