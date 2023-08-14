import React, { useState } from 'react';
import axios from 'axios';
import MoBlockLine from "@/molecules/block-line";
import { Inter } from "next/font/google";
import s from './styles.module.css'
import VanishDiv from '@/molecules/vanish-div';
import validator from 'validator';
import InputMask from 'react-input-mask';

const interM = Inter({
    subsets: ["latin"],
    weight: '500'
})
const inter = Inter({
    subsets: ["latin"],
    weight: '400'
})

function CoSubmitApplication(props) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        comments: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Проверяем валидность данных перед отправкой
        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

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

    const validateForm = (data) => {
        const errors = {};

        if (validator.isEmpty(data.name)) {
            errors.name = 'Введите имя';
        }

        if (!validator.isMobilePhone(data.phone, 'any', { strictMode: false })) {
            errors.phone = 'Введите корректный номер телефона';
        }

        if (!validator.isEmail(data.email)) {
            errors.email = 'Введите корректный email';
        }

        return errors;
    };

    return (
        <div>
            <VanishDiv>
                <MoBlockLine text="Оставить заявку" />
            </VanishDiv>
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
                        {
                            props.formData &&
                            props.formData.from &&
                            props.formData.to &&
                            props.formData.volume &&
                            props.formData.weight &&
                            <div className={inter.className}>
                                <div className={s['form-input']}>
                                    {props.formData.from}
                                </div>
                                <div className={s['form-input']}>
                                    {props.formData.to}
                                </div>
                                <div className={s['form-input']}>
                                    {props.formData.volume}
                                </div>
                                <div className={s['form-input']}>
                                    {props.formData.weight}
                                </div>
                            </div>
                        }
                        <input
                            className={s['form-input']}
                            placeholder="Имя"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <InputMask
                            mask="+7 (999) 999-99-99"
                            value={formData.phone}
                            onChange={handleChange}
                        >
                            {(inputProps) => (
                                <input
                                    {...inputProps}
                                    className={`${s['form-input']} ${errors.phone ? s['error'] : ''}`}
                                    placeholder="Телефон"
                                    name="phone"
                                />
                            )}
                        </InputMask>
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