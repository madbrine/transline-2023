import React, { useState } from 'react';
import s from './styles.module.css';
import NewsItem from '../news-item';
import ModalWindow from '../modal-window'; // Импортируйте компонент ModalWindow

const NewsLine = ({ news }) => {
    const [selectedNews, setSelectedNews] = useState(null);

    const handleNewsClick = (index) => {
        setSelectedNews(news[index]);
    };

    const handleCloseModal = () => {
        setSelectedNews(null);
    };

    return (
        <div className={s["news-line"]}>
            {news.map((item, index) => (
                <div
                    key={index}
                    className={s["news-item-wrapper"]}
                    onClick={() => handleNewsClick(index)}
                >
                    <NewsItem
                        img={item.img}
                        content={item.content}
                        date={item.date}
                        tag={item.tag}
                    />
                </div>
            ))}
            <ModalWindow
                isOpen={selectedNews !== null}
                onClose={handleCloseModal}
                news={selectedNews}
            />
        </div>
    );
};

export default NewsLine;