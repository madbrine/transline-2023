import React, { useEffect, useState } from 'react';
import s from './styles.module.css';
import { Inter } from 'next/font/google';
import MoLogo from '../logo';
import { IoClose } from "react-icons/io5";
import InputMask from 'react-input-mask';
import { motion, AnimatePresence } from 'framer-motion';
import validator from 'validator';
import { useRouter } from 'next/router';
import axios from 'axios';

const inter = Inter({
    subsets: ["latin"],
    weights: ['400']
})

export default function CoHeaderV2() {
    const [isNav, setNav] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        comments: '',
    });
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

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

    const handleOpenMobileMenu = () => {
        setNav(!isNav);
    }

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
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


    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleSubmit = async (e) => {
        ym(22331872, 'reachGoal', 'svyazatsya')
        e.preventDefault();

        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        if (isSubmitting) {
            return;
        }

        setIsSubmitting(true);

        try {
            // Отправка данных формы на сервер
            await axios.post('https://transline.kz:4444/api/submit-form-connect', formData);
            router.push('/spasibo');
        } catch (error) {
            console.error('Ошибка при отправке заявки:', error);

            // Оповещение об ошибке при отправке заявки
            alert('Произошла ошибка при отправке заявки');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <header className={inter.className}>
            <div className={`${s['container']} ${scrolled ? s['scrolled'] : ''}`}>
                <div className={s['header-l']}>
                    <div className={s['logo']}>
                        <MoLogo />
                    </div>
                    <ul className={isNav ? [s['menu'], s['active']].join(' ') : s['menu']}>
                        <li>
                            <a href='/o-kompanii'>О компании</a>
                        </li>
                        <li>
                            <a href='/vidy-perevozok'>Услуги</a>
                        </li>
                        <li>
                            <a href='/sertifikaty'>Сертификаты</a>
                        </li>
                        <li>
                            <a href='/avtopark'>Автопарк</a>
                        </li>
                        <li>
                            <a href='/kontakty'>Контакты</a>
                        </li>
                        <div className={s['social-sites']}>
                            <div>Соц. сети</div>
                            <a href="https://twitter.com/TranslineKz/">Twitter</a>
                            <a href="https://facebook.com/transline.kz/">Facebook</a>
                            <a href="https://instagram.com/transline.kz/">Instagram</a>
                        </div>
                        <div className={s['contacts-mobile']}>
                            <div>Контакты</div>
                            <a className={s['mail']} href='mailto:info@transline.kz'>info@transline.kz</a>
                            <a className={s['phone']} href='tel:+7 (707) 367-11-04'>+7 (707) 367-11-04</a>
                        </div>
                    </ul>
                </div>
                <div className={s['header-r']}>
                    <div className={s['contacts']}>
                        <span><a href="mailto:info@transline.kz">info@transline.kz</a></span>
                        <span>+7 (707) 367-11-04</span>
                    </div>
                    <button className={s['button-form']} onClick={openModal}>Связаться</button>
                </div>
                <div className={s['mobile-menu-btn']} onClick={handleOpenMobileMenu}>
                    {isNav ?
                        <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Frame 1316479">
                                <g id="Vector">
                                    <path d="M4.00034 18.1421L18.1425 4.00001L19.5567 5.41422L5.41456 19.5564L4.00034 18.1421Z" fill="#161616" />
                                    <path d="M19.5563 18.1421L5.41421 4L4 5.41421L18.1421 19.5563L19.5563 18.1421Z" fill="#161616" />
                                </g>
                            </g>
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M2 8H22V10H2V8Z" fill="#161616" />
                            <path d="M2 14H22V16H2V14Z" fill="#161616" />
                        </svg>
                    }
                </div>
            </div>
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className={s['modal']}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <div className={s['form-connect']}>
                            <div className={s['close-modal']}>
                                <p>Как нам с вами связаться?</p>
                                <button onClick={closeModal}>
                                    <span>Закрыть</span>
                                    <IoClose className={s['close-icon']} />
                                </button>
                            </div>
                            <form className={s['form']}>
                                <div className={s['input-pos']}>
                                    <input
                                        className={s['form-input']}
                                        type="text"
                                        placeholder='Имя'
                                        name='name'
                                        value={formData.name}
                                        onChange={handleChange}
                                        id={s['margin-right-input']}
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
                                                className={s['form-input']}
                                                placeholder="Телефон"
                                                name="phone"
                                            />
                                        )}
                                    </InputMask>
                                    {errors.phone && <div className={s['error-message']}>{errors.phone}</div>}
                                </div>
                                <input
                                    className={s['form-input']}
                                    placeholder="Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    id={s['margin-bottom-input']}
                                />
                                {errors.email && <div className={s['error-message']}>{errors.email}</div>}
                                <input
                                    className={s['form-input']}
                                    placeholder="Коментарии (Не обязательно)"
                                    name="comments"
                                    value={formData.comments}
                                    onChange={handleChange}
                                    id={s['bottom-borders-input']}
                                    type="text"
                                />
                                <div className={s['send-btn']}>
                                    <button type="submit" onClick={handleSubmit} disabled={!isFormValid}>
                                        {isSubmitting ?
                                            <svg className={s['loader']} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" fill="none">
                                                <path d="M12 22.5C10.6333 22.5 9.34167 22.2375 8.125 21.7125C6.90833 21.1875 5.84583 20.4708 4.9375 19.5625C4.02917 18.6542 3.3125 17.5917 2.7875 16.375C2.2625 15.1583 2 13.8667 2 12.5C2 11.1167 2.2625 9.82083 2.7875 8.6125C3.3125 7.40417 4.02917 6.34583 4.9375 5.4375C5.84583 4.52917 6.90833 3.8125 8.125 3.2875C9.34167 2.7625 10.6333 2.5 12 2.5C12.2833 2.5 12.5208 2.59583 12.7125 2.7875C12.9042 2.97917 13 3.21667 13 3.5C13 3.78333 12.9042 4.02083 12.7125 4.2125C12.5208 4.40417 12.2833 4.5 12 4.5C9.78333 4.5 7.89583 5.27917 6.3375 6.8375C4.77917 8.39583 4 10.2833 4 12.5C4 14.7167 4.77917 16.6042 6.3375 18.1625C7.89583 19.7208 9.78333 20.5 12 20.5C14.2167 20.5 16.1042 19.7208 17.6625 18.1625C19.2208 16.6042 20 14.7167 20 12.5C20 12.2167 20.0958 11.9792 20.2875 11.7875C20.4792 11.5958 20.7167 11.5 21 11.5C21.2833 11.5 21.5208 11.5958 21.7125 11.7875C21.9042 11.9792 22 12.2167 22 12.5C22 13.8667 21.7375 15.1583 21.2125 16.375C20.6875 17.5917 19.9708 18.6542 19.0625 19.5625C18.1542 20.4708 17.0958 21.1875 15.8875 21.7125C14.6792 22.2375 13.3833 22.5 12 22.5Z" fill="white" />
                                            </svg>
                                            :
                                            'Отправить'
                                        }
                                    </button>
                                    <p>Нажимая “Отправить” вы соглашаетесь с обработкой персональных данных</p>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}