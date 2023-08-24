import React, { useState } from 'react';
import axios from 'axios';
import MoBlockLine from "@/molecules/block-line";
import { Inter } from "next/font/google";
import s from './styles.module.css'
import VanishDiv from '@/molecules/vanish-div';
import validator from 'validator';
import InputMask from 'react-input-mask';
import { useRouter } from 'next/router';

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

    const [isFormValid, setIsFormValid] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));

        const validationErrors = validateForm({
            ...formData,
            [name]: value,
        });

        const hasErrors = Object.values(validationErrors).some((error) => error !== '');
        setIsFormValid(!hasErrors);
    };

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            // Отправка данных формы на сервер
            await axios.post('https://transline.kz:4444/submit-form', formData);

            router.push('/spasibo');
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

        if (validator.isEmpty(data.phone)) {
            errors.phone = 'Введите корректный номер телефона';
        }

        if (!validator.isEmail(data.email)) {
            errors.email = 'Введите корректный email';
        }

        return errors;
    };

    return (
        <div className={inter.className}>
            <VanishDiv>
                <MoBlockLine text="Оставить заявку" />
            </VanishDiv>
            <div className={s['block-pos']}>
                <div className={s['container']}>
                    <div className={s['container-width']}>
                        <div className={inter.className}>
                            Получить консультацию
                        </div>
                    </div>
                    {/* <div className={s['contacts-container']}>
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
                    </div> */}
                </div>
                <form className={s['contacts-and-form-finish']}>
                    <div className={s['form-input-container']}>
                        <input
                            className={s['form-input']}
                            placeholder="Имя"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && <div className={s['error-message']}>{errors.name}</div>}
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
                        {errors.phone && <div className={s['error-message']}>{errors.phone}</div>}
                        <input
                            className={s['form-input']}
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <div className={s['error-message']}>{errors.email}</div>}
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
                            <button type="submit" onClick={handleSubmit} disabled={!isFormValid}>Отправить</button>
                            <div className={s['form-input-button-desc']}>
                                <a className={inter.className} style={{ color: '#666' }}>Нажимая "Отправить" вы </a>
                                <a className={inter.className}>соглашаетесь с обработкой персональных данных</a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className={s['line-gray']} />
        </div>
    )
}
export default CoSubmitApplication;