import { useEffect, useState } from 'react';
import s from './styles.module.css';
import { Inter } from 'next/font/google';
import MoLogo from '../logo';
import { IoClose } from "react-icons/io5";
import InputMask from 'react-input-mask';
import { motion, AnimatePresence } from 'framer-motion';

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
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
                            <span>Соц. сети</span>
                            <a href="https://twitter.com/TranslineKz/">Twitter</a>
                            <a href="https://facebook.com/transline.kz/">Facebook</a>
                            <a href="https://instagram.com/transline.kz/">Instagram</a>
                        </div>
                        <div className={s['contacts-mobile']}>
                            <span>Контакты</span>
                            <span>info@transline.kz</span>
                            <span>+7 (707) 367-11-04</span>
                        </div>
                    </ul>
                </div>
                <div className={s['header-r']}>
                    <div className={s['contacts']}>
                        <span>info@transline.kz</span>
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
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <div className={s['form-connect']}>
                            <div className={s['close-modal']}>
                                <p>Как нам с вами связаться?</p>
                                <button onClick={closeModal}>
                                    Закрыть
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
                                </div>
                                <input
                                    className={s['form-input']}
                                    placeholder="Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    id={s['margin-bottom-input']}
                                />
                                <input
                                    className={s['form-input']}
                                    placeholder="Коментарии (Не обязательно)"
                                    name="comments"
                                    value={formData.comments}
                                    onChange={handleChange}
                                />
                                <div className={s['send-btn']}>
                                    <button>Отправить</button>
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