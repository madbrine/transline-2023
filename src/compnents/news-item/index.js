import React, { useState } from 'react';
import s from './styles.module.css';
import { Inter } from "next/font/google";
import ModalWindow from '@/compnents/modal-window' // Импортируйте компонент ModalWindow

const inter = Inter({
    subsets: ['latin'],
    weights: '400'
})

const NewsItem = ({ img, content, date, tag }) => {
    const [isModalWindowOpen, setIsModalWindowOpen] = useState(false);

    const handleOpenModalWindow = () => {
        setIsModalWindowOpen(true);
    };

    const handleCloseModalWindow = () => {
        setIsModalWindowOpen(false);
    };

    return (
        <div className={inter.className}>
            <div className={s["news-item"]} onClick={handleOpenModalWindow}>
                <img src={img} alt="Изображение новости" />
                <div className={s['content-pos']}>
                    <p>{content}</p>
                    <div>
                        <div className={s['info-pos']}>
                            <span className={s['date']}>{date}</span>
                            <span className={s['tag']}>{tag}</span>
                        </div>
                        <div className={s['line']} />
                    </div>
                </div>
            </div>
            <ModalWindow isOpen={isModalWindowOpen} onClose={handleCloseModalWindow} img={img} content={content} date={date} tag={tag} />
        </div>
    );
};

export default NewsItem;