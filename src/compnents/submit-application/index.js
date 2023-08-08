import React, { useState } from 'react';
import axios from 'axios';
import MoBlockLine from "@/molecules/block-line";
import { Inter } from "next/font/google";
import s from './styles.module.css'

const interM = Inter({
    subsets: ["latin"],
    weight: '500'
})
const inter = Inter({
    subsets: ["latin"],
    weight: '400'
})

function CoSubmitApplication() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        comments: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Отправка данных формы на сервер
            await axios.post('http://localhost:4444/submit-form-multimodal', formData);

            // Успешное оповещение о отправке заявки
            alert('Заявка успешно отправлена');
        } catch (error) {
            console.error('Ошибка при отправке заявки:', error);

            console.log('Содержимое ошибки:', error.response.data);

            // Оповещение об ошибке при отправке заявки
            alert('Произошла ошибка при отправке заявки');
        }
    };

    return (
        <div>
            <MoBlockLine text="Оставить заявку" />
            <div className={s['block-pos']}>
                <div className={s['container']}>
                    <div className={s['container-width']}>
                        <h1 className={inter.className}>
                            Получить консультацию
                        </h1>
                    </div>
                    <div className={s['contacts-container']}>
                        <div className={inter.className} style={{
                            width: '138px',
                            marginRight: '44px'
                        }}>
                            <div className={s['contacts-header']}>Соц. сети:</div>
                            <div>
                                <a>Facebook</a>
                            </div>
                            <div>
                                <a>Twitter</a>
                            </div>
                        </div>
                        <div className={inter.className}>
                            <div className={s['contacts-header']}>Контакты:</div>
                            <div>
                                <a>+7 (727)-367-11-04</a>
                            </div>
                            <div>
                                <a>info@transline.kz</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s['contacts-and-form-finish']}>
                    <div className={s['form-input-container']}>
                        <input
                            className={s['form-input']}
                            placeholder="Имя"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <input
                            className={s['form-input']}
                            placeholder="Телефон"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <input
                            className={s['form-input']}
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <input
                            className={s['form-input']}
                            placeholder="Коментарии (не обязательно)"
                            name="comments"
                            value={formData.comments}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={s['form-input-finish-container']}>
                        <div className={s['form-input-button-container']}>
                            <button onClick={handleSubmit}>Отправить</button>
                            <div className={s['form-input-button-desc']}>
                                <a className={inter.className} style={{ color: '#666' }}>Нажимая "Отправить" вы </a>
                                <a className={inter.className}>соглашаетесь с обработкой персональных данных</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s['line-gray']} />
        </div>
    )
}
export default CoSubmitApplication;