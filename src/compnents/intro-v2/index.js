import { Inter } from 'next/font/google';
import s from './styles.module.css'
import { useState } from 'react';

const inter = Inter({
    subsets: ['latin'],
    weight: '400',
})
function CoIntroV2() {
    const [formData, setFormData] = useState({
        from: '',
        to: '',
        volume: '',
        weight: '',
        description: '',
        name: '',
        phone: '',
        email: '',
        comments: '',
        insurance: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: newValue,
        }));
    };

    const handleFormSent = () => {
        ym(22331872, 'reachGoal', 'form_sent');
    };

    const handleConsole = () => {
        console.log(formData)
    }

    return (
        <div className={inter.className}>
            <div className={s['container']}>
                <div className={s['content']}>
                    <div className={s['header']}>
                        <h1>Крупнейшая логистическая компания Центральной Азии</h1>
                    </div>
                    <div className={s['pos']}>
                        <div className={s['form-input']}>
                            <input className={s['input-from']} onChange={handleChange} type="text" name="from" placeholder="Откуда" />
                            <input className={s['input-to']} onChange={handleChange} type="text" name="to" placeholder="Куда" />
                            <div className={s['input-number']}>
                                <input className={s['input-volume']} onChange={handleChange} type="number" name="volume" placeholder="Объем" />
                                <span className={s['input-addon']}>м³</span>
                            </div>
                            <div className={s['input-number']}>
                                <input className={s['input-weight']} onChange={handleChange} type="number" name="weight" placeholder="Вес" />
                                <span className={s['input-addon']}>тонн</span>
                            </div>
                            <input className={s['input-description']} onChange={handleChange} type="text" name="description" placeholder="Описание груза" />
                            <button onClick={handleConsole}>Рассчитать</button>
                        </div>
                        <label className={s['insurance-box']}>
                            <input
                                className={s['insurance-checkbox']}
                                type="checkbox"
                                name="insurance"
                                onChange={handleChange}
                            />
                            <span className={s['checkmark']}></span>
                            <div className={s['text-insurance']}> Требуется страхование</div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CoIntroV2;