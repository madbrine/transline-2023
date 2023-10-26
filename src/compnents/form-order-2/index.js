import s from './styles.module.css';
import React from 'react';
import InputMask from 'react-input-mask';

export default function FormOrder2({ formData, setFormData, prevStep, handleModalClose }) {
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: newValue,
        }));
    };

    const handleBack = () => {
        prevStep();
    };

    const handleSend = () => {
        console.log(formData);

    };

    return (
        <div className={s['modal-form']}>
            <div className={s['top-form']}>
                <div className={s['top-form-pos']}>
                    <div className={s['top-elements-pos']}>
                        <svg className={s['location-icon']} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                            <path d="M12.0022 11.75C12.4841 11.75 12.8958 11.5784 13.2375 11.2353C13.5792 10.8921 13.75 10.4796 13.75 9.99778C13.75 9.51593 13.5784 9.10417 13.2353 8.7625C12.8921 8.42083 12.4796 8.25 11.9978 8.25C11.5159 8.25 11.1042 8.42158 10.7625 8.76472C10.4208 9.10786 10.25 9.52036 10.25 10.0022C10.25 10.4841 10.4216 10.8958 10.7647 11.2375C11.1079 11.5792 11.5204 11.75 12.0022 11.75ZM12 20.025C14.2167 18.0083 15.8542 16.1792 16.9125 14.5375C17.9708 12.8958 18.5 11.45 18.5 10.2C18.5 8.23683 17.8726 6.62937 16.6177 5.37762C15.3629 4.12587 13.8236 3.5 12 3.5C10.1764 3.5 8.63715 4.12587 7.3823 5.37762C6.12743 6.62937 5.5 8.23683 5.5 10.2C5.5 11.45 6.04167 12.8958 7.125 14.5375C8.20833 16.1792 9.83333 18.0083 12 20.025ZM12 22C9.31667 19.7167 7.3125 17.5958 5.9875 15.6375C4.6625 13.6792 4 11.8667 4 10.2C4 7.7 4.80417 5.70833 6.4125 4.225C8.02083 2.74167 9.88333 2 12 2C14.1167 2 15.9792 2.74167 17.5875 4.225C19.1958 5.70833 20 7.7 20 10.2C20 11.8667 19.3375 13.6792 18.0125 15.6375C16.6875 17.5958 14.6833 19.7167 12 22Z" fill="#00ACCD" />
                        </svg>
                        <p>Ввод данных отправки</p>
                    </div>
                    <div className={s['line']} />
                    <div className={s['top-elements-pos']}>
                        <svg className={s['phone-icon']} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" fill="none">
                            <path d="M19.875 21.5C17.9417 21.5 15.9708 21.0333 13.9625 20.1C11.9542 19.1667 10.0917 17.8417 8.375 16.125C6.65833 14.4083 5.33333 12.5458 4.4 10.5375C3.46667 8.52917 3 6.55833 3 4.625C3 4.30357 3.10714 4.03571 3.32142 3.82142C3.53571 3.60714 3.80357 3.5 4.125 3.5H7.625C7.85833 3.5 8.05833 3.58333 8.225 3.75C8.39167 3.91667 8.50833 4.125 8.575 4.375L9.24822 7.51603C9.28274 7.75534 9.27917 7.97083 9.2375 8.1625C9.19583 8.35417 9.10642 8.51855 8.96927 8.65565L6.475 11.175C6.90833 11.9083 7.36667 12.5917 7.85 13.225C8.33333 13.8583 8.86667 14.4583 9.45 15.025C10.0667 15.6583 10.7167 16.2375 11.4 16.7625C12.0833 17.2875 12.8 17.75 13.55 18.15L15.925 15.7C16.0917 15.5167 16.2846 15.3917 16.5038 15.325C16.723 15.2583 16.9384 15.2417 17.15 15.275L20.125 15.925C20.375 15.9917 20.5833 16.1254 20.75 16.3261C20.9167 16.5268 21 16.7515 21 17V20.375C21 20.6964 20.8929 20.9643 20.6786 21.1786C20.4643 21.3929 20.1964 21.5 19.875 21.5ZM5.725 9.8L7.75 7.75L7.175 5H4.5C4.53333 5.7 4.64583 6.4375 4.8375 7.2125C5.02917 7.9875 5.325 8.85 5.725 9.8ZM14.95 18.875C15.6333 19.1917 16.375 19.45 17.175 19.65C17.975 19.85 18.75 19.9667 19.5 20V17.325L16.925 16.8L14.95 18.875Z" fill="#00ACCD" />
                        </svg>
                        <p>Подача заявки</p>
                    </div>
                </div>
                <button className={s['close-button']} onClick={handleModalClose}>
                    Закрыть
                    <svg className={s['close-icon']} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                        <path d="M6 14L14 6M14 14L6 6" stroke="#161616" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
            <div className={s['full-form']}>
                <div className={s['name-form-pos']}>
                    <p className={s['name-form']}>Как нам с вами связаться?</p>
                    <div className={s['order-values']}>
                        <div className={s['values-desc']}>
                            <div>{formData.weight} тонн</div>
                            <div id={s['margin-l-r']}>{formData.volume} м³</div>
                            <div>{formData.description}</div>
                        </div>
                        <div className={s['values-from-to']}>
                            <svg className={s['from-to-icon']} width="7" viewBox="0 0 7 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="3.5" cy="4" r="3.5" fill="#00ACCD" />
                                <rect x="3" y="7.5" width="1" height="40" fill="#00ACCD" />
                                <circle cx="3.5" cy="51" r="3.5" fill="#00ACCD" />
                            </svg>
                            <div className={s['from-to-pos']}>
                                <p>{formData.from}</p>
                                <p>{formData.to}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s['form-inputs']}>
                    <div className={s['inputs-pos']}>
                        <input
                            className={s['input-style']}
                            type="text"
                            name="name"
                            placeholder="Имя"
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
                                    className={s['input-style']}
                                    name="phone"
                                    placeholder="Телефон"
                                />
                            )}
                        </InputMask>
                    </div>
                    <input
                        className={s['email-input']}
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        className={s['comment-input']}
                        type="text"
                        name="comments"
                        placeholder="Коментарии (Не обязательно)"
                        value={formData.comments}
                        onChange={handleChange}
                    />
                </div>
                <div className={s['send-form']}>
                    <div className={s['btn-pos']}>
                        <button className={s['btn-send']} onClick={handleSend}>Отправить</button>
                        <button className={s['btn-back']} onClick={handleBack}>Назад</button>
                    </div>
                    <p>Нажимая “Отправить” вы соглашаетесь с обработкой персональных данных</p>
                </div>
            </div>
        </div>
    )
}