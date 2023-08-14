import React, { useState } from 'react';
import s from './styles.module.css';
import { Inter } from "next/font/google";
import ModalWindow from '@/compnents/modal-window' // Импортируйте компонент ModalWindow

const inter = Inter({
    subsets: ['latin'],
    weights: '400'
})

const NewsItem = ({ img, content, date, tag, title, text1, text2, img_text1, img_text2, text3, text4, text5, text6, text7 }) => {
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
            <span className={s['hide-news']}>{title}</span>
            <span className={s['hide-news']}>{text1}</span>
            <span className={s['hide-news']}>{text2}</span>
            <img className={s['hide-news']} src={img_text1} />
            <span className={s['hide-news']}>{text3}</span>
            <span className={s['hide-news']}>{text4}</span>
            <span className={s['hide-news']}>{text5}</span>
            <span className={s['hide-news']}>{text6}</span>
            <img className={s['hide-news']} src={img_text2} />
            <span className={s['hide-news']}>{text7}</span>
            <ModalWindow isOpen={isModalWindowOpen} onClose={handleCloseModalWindow} img={img} content={content} date={date} tag={tag} />
        </div>
    );
};

export default NewsItem;