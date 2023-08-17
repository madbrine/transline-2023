import { Inter } from 'next/font/google';
import s from './styles.module.css'
import { motion, useScroll } from 'framer-motion'
import { useRef, useState } from 'react';
import VanishDiv from '@/molecules/vanish-div';

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

    const [isInsuranceChecked, setIsInsuranceChecked] = useState(false);

    const handleInsuranceChange = (e) => {
        setIsInsuranceChecked(e.target.checked);
    };

    const updateFrom = e => setFrom(e.target.value);
    const updateTo = e => setTo(e.target.value);
    const updateVolume = e => setVolume(e.target.value);
    const updateWeight = e => setWeight(e.target.value);
    const updateDescription = e => setDescription(e.target.value);

    function storageLoader() {
        sessionStorage.setItem('offerDataTo', isFrom)
        sessionStorage.setItem('offerDataFrom', isTo)
        sessionStorage.setItem('offerDataVolume', isVolume)
        sessionStorage.setItem('offerDataWeight', isWeight)
        sessionStorage.setItem('offerDataDesc', isDescription)
        sessionStorage.setItem('offerDataChecked', isInsuranceChecked ? 'да' : 'нет');
        console.log(`from intro ${sessionStorage.getItem('offerDataTo')} to ${sessionStorage.getItem('offerDataFrom')}`)
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
                <div className={s['form-container']}
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
                            <VanishDiv className={s['input-container']}>
                                <input className={s['input-top-border']} onChange={updateFrom} type="text" name="name" placeholder="Откуда" />
                            </VanishDiv>
                            <VanishDiv className={s['input-container']}>
                                <input onChange={updateTo} type="text" name="name" placeholder="Куда" />
                            </VanishDiv>
                            <VanishDiv className={s['input-container']}>
                                <input className={s['input-field']} onChange={updateVolume} type="number" name="name" placeholder="Объем" />
                                <span className={s['input-addon']}>м³</span>
                            </VanishDiv>
                            <VanishDiv className={s['input-container']}>
                                <input className={s['input-field']} onChange={updateWeight} type="number" name="name" placeholder="Вес" />
                                <span className={s['input-addon']}>тонн</span>
                            </VanishDiv>
                            <VanishDiv className={s['input-container']}>
                                <input className={s['input-bottom-border']} onChange={updateDescription} type="text" name="name" placeholder="Описание груза" />
                            </VanishDiv>
                            <VanishDiv className={s['input-container']}>
                                <a href="/oformit-zayavku">
                                    <button onClick={storageLoader} className={inter.className}>Рассчитать</button>
                                </a>
                            </VanishDiv>
                        </div>
                        <div className={s['insurance-container']}>
                            <label className={s['insurance-box']}>
                                <input
                                    className={s['insurance-checkbox']}
                                    type='checkbox'
                                    checked={isInsuranceChecked}
                                    onChange={handleInsuranceChange}
                                />
                                <span className={s['checkmark']}></span>
                                <div className={inter.className} id={s['text-insurance']}> Требуется страхование</div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default CoIntro;