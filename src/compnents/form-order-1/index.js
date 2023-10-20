import s from './styles.module.css';
import React from 'react';

export default function FormOrder1({ formData, setFormData, nextStep, handleModalClose }) {
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: newValue,
        }));
    };

    const handleNext = () => {
        nextStep();
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
                        <svg className={s['phone-icon']} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                            <path d="M19.875 21C17.9417 21 15.9708 20.5333 13.9625 19.6C11.9542 18.6667 10.0917 17.3417 8.375 15.625C6.65833 13.9083 5.33333 12.0458 4.4 10.0375C3.46667 8.02917 3 6.05833 3 4.125C3 3.80357 3.10714 3.53571 3.32142 3.32142C3.53571 3.10714 3.80357 3 4.125 3H7.625C7.85833 3 8.05833 3.08333 8.225 3.25C8.39167 3.41667 8.50833 3.625 8.575 3.875L9.24822 7.01603C9.28274 7.25534 9.27917 7.47083 9.2375 7.6625C9.19583 7.85417 9.10642 8.01855 8.96927 8.15565L6.475 10.675C6.90833 11.4083 7.36667 12.0917 7.85 12.725C8.33333 13.3583 8.86667 13.9583 9.45 14.525C10.0667 15.1583 10.7167 15.7375 11.4 16.2625C12.0833 16.7875 12.8 17.25 13.55 17.65L15.925 15.2C16.0917 15.0167 16.2846 14.8917 16.5038 14.825C16.723 14.7583 16.9384 14.7417 17.15 14.775L20.125 15.425C20.375 15.4917 20.5833 15.6254 20.75 15.8261C20.9167 16.0268 21 16.2515 21 16.5V19.875C21 20.1964 20.8929 20.4643 20.6786 20.6786C20.4643 20.8929 20.1964 21 19.875 21ZM5.725 9.3L7.75 7.25L7.175 4.5H4.5C4.53333 5.2 4.64583 5.9375 4.8375 6.7125C5.02917 7.4875 5.325 8.35 5.725 9.3ZM14.95 18.375C15.6333 18.6917 16.375 18.95 17.175 19.15C17.975 19.35 18.75 19.4667 19.5 19.5V16.825L16.925 16.3L14.95 18.375Z" fill="#161616" />
                        </svg>
                        <p id={s['opacity']}>Подача заявки</p>
                    </div>
                </div>
                <button className={s['close-button']} onClick={handleModalClose}>
                    Закрыть
                    <svg className={s['close-icon']} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                        <path d="M6 14L14 6M14 14L6 6" stroke="#161616" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
            <form className={s['full-form']}>
                <p className={s['name-form']}>Рассчитать</p>
                <div className={s['full-form-inputs']}>
                    <div className={s['input-pos']}>
                        <input
                            className={s['input-from']}
                            id={s['input-width-l']}
                            onChange={handleChange}
                            type="text"
                            name="from"
                            placeholder="Откуда"
                            value={formData.from}
                        />
                        <input
                            className={s['input-to']}
                            id={s['input-width-r']}
                            onChange={handleChange}
                            type="text"
                            name="to"
                            placeholder="Куда"
                            value={formData.to}
                        />
                    </div>
                    <div className={s['input-pos']}>
                        <div className={s['input-number']} id={s['margin-r']}>
                            <input
                                className={s['input-volume']}
                                id={s['input-width-small-l']}
                                onChange={handleChange}
                                type="number"
                                name="volume"
                                placeholder="Объем"
                                value={formData.volume}
                            />
                            <span className={s['input-addon']}>м³</span>
                        </div>
                        <div className={s['input-number']} id={s['margin-l-r']}>
                            <input
                                className={s['input-weight']}
                                id={s['input-width-small-m']}
                                onChange={handleChange}
                                type="number"
                                name="weight"
                                placeholder="Вес"
                                value={formData.weight}
                            />
                            <span className={s['input-addon']}>тонн</span>
                        </div>
                        <input
                            className={s['input-description']}
                            id={s['input-width-small-r']}
                            onChange={handleChange}
                            type="text"
                            name="description"
                            placeholder="Описание груза"
                            value={formData.description}
                        />
                    </div>
                    <textarea placeholder='Комментарий к заказу (Не обязательно)' />
                    <label className={s['insurance-box']}>
                        <input
                            className={s['insurance-checkbox']}
                            type="checkbox"
                            name="insurance"
                            onChange={handleChange}
                            checked={formData.insurance}
                        />
                        <span className={s['checkmark']}></span>
                        <div className={s['text-insurance']}> Требуется страхование</div>
                    </label>
                </div>
                <div className={s['form-buttons']}>
                    <div className={s['buttons-pos']}>
                        <button className={s['btn-next']} onClick={handleNext}>Далее</button>
                        <button className={s['btn-back']} disabled>Назад</button>
                    </div>
                    <p>Нажимая “Отправить” вы соглашаетесь с обработкой персональных данных</p>
                </div>
            </form>
        </div>
    )
}