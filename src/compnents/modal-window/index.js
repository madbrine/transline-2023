import React from "react";
import s from './styles.module.css';

const ModalWindow = ({ isOpen, onClose, news }) => {
    if (!isOpen || !news) return null; // Добавляем проверку news

    return (
        <div className={s['modalOverlay']} onClick={onClose}>
            <div className={s['modalContent']} onClick={(e) => e.stopPropagation()}>
                {/* Вывод подробной информации о новости */}
                {/* <h2>{news.title}</h2>
                <p>{news.content}</p> */}
                <button onClick={onClose}>Закрыть</button>
            </div>
        </div>
    );
};

export default ModalWindow;