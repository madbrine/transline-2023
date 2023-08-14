import React, { useState } from 'react';
import s from './styles.module.css';
import NewsItem from '../news-item';
import ModalWindow from '../modal-window';

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
                        title={item.title}
                        text1={item.text1}
                        text2={item.text2}
                        img_text1={item.img_text1}
                        text3={item.text3}
                        text4={item.text4}
                        text5={item.text5}
                        text6={item.text6}
                        img_text2={item.img_text2}
                        text7={item.text7}
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