import React, { useState } from 'react';
import NewsLine from '../news-line';
import s from './styles.module.css';
import { Inter } from "next/font/google";
import arrow_left from '../../assets/arrow-prev.svg';

const inter = Inter({
    subsets: ['latin'],
    weights: '400'
})

const newsData = [
    [
        { img: '/news-img/news-item-1.jpeg', content: 'Не следует, однако, забывать, что дальнейшее развитие различных форм деятельности прекрасно подходит для', date: "10.10.2023", tag: "Новости, Награды" },
        { img: '/news-img/news-item-2.jpeg', content: 'Не следует, однако, забывать, что дальнейшее развитие различных форм деятельности прекрасно подходит для', date: "10.10.2023", tag: "Новости, Награды" },
    ],
    [
        { img: '/news-img/news-item-3.jpeg', content: 'Не следует, однако, забывать, что дальнейшее развитие различных форм деятельности прекрасно подходит для', date: "10.10.2023", tag: "Новости, Награды" },
        { img: '/news-img/news-item-4.jpeg', content: 'Не следует, однако, забывать, что дальнейшее развитие различных форм деятельности прекрасно подходит для', date: "10.10.2023", tag: "Новости, Награды" },
    ],
    [
        { img: '/news-img/news-item-5.jpeg', content: 'Не следует, однако, забывать, что дальнейшее развитие различных форм деятельности прекрасно подходит для', date: "10.10.2023", tag: "Новости, Награды" },
        { img: '/news-img/news-item-1.jpeg', content: 'Не следует, однако, забывать, что дальнейшее развитие различных форм деятельности прекрасно подходит для', date: "10.10.2023", tag: "Новости, Награды" },
    ],
    [
        { img: '/news-img/news-item-2.jpeg', content: 'Не следует, однако, забывать, что дальнейшее развитие различных форм деятельности прекрасно подходит для', date: "10.10.2023", tag: "Новости, Награды" },
        { img: '/news-img/news-item-3.jpeg', content: 'Не следует, однако, забывать, что дальнейшее развитие различных форм деятельности прекрасно подходит для', date: "10.10.2023", tag: "Новости, Награды" },
    ],
    [
        { img: '/news-img/news-item-4.jpeg', content: 'Не следует, однако, забывать, что дальнейшее развитие различных форм деятельности прекрасно подходит для', date: "10.10.2023", tag: "Новости, Награды" },
        { img: '/news-img/news-item-5.jpeg', content: 'Не следует, однако, забывать, что дальнейшее развитие различных форм деятельности прекрасно подходит для', date: "10.10.2023", tag: "Новости, Награды" },
    ],
    [
        { img: '/news-img/news-item-1.jpeg', content: 'Не следует, однако, забывать, что дальнейшее развитие различных форм деятельности прекрасно подходит для', date: "10.10.2023", tag: "Новости, Награды" },
        { img: '/news-img/news-item-2.jpeg', content: 'Не следует, однако, забывать, что дальнейшее развитие различных форм деятельности прекрасно подходит для', date: "10.10.2023", tag: "Новости, Награды" },
    ],
    [
        { img: '/news-img/news-item-3.jpeg', content: 'Не следует, однако, забывать, что дальнейшее развитие различных форм деятельности прекрасно подходит для', date: "10.10.2023", tag: "Новости, Награды" },
        { img: '/news-img/news-item-4.jpeg', content: 'Не следует, однако, забывать, что дальнейшее развитие различных форм деятельности прекрасно подходит для', date: "10.10.2023", tag: "Новости, Награды" },
    ],
    [
        { img: '/news-img/news-item-5.jpeg', content: 'Не следует, однако, забывать, что дальнейшее развитие различных форм деятельности прекрасно подходит для', date: "10.10.2023", tag: "Новости, Награды" },
        { img: '/news-img/news-item-1.jpeg', content: 'Не следует, однако, забывать, что дальнейшее развитие различных форм деятельности прекрасно подходит для', date: "10.10.2023", tag: "Новости, Награды" },
    ],
    [
        { img: '/news-img/news-item-2.jpeg', content: 'Не следует, однако, забывать, что дальнейшее развитие различных форм деятельности прекрасно подходит для', date: "10.10.2023", tag: "Новости, Награды" },
        { img: '/news-img/news-item-3.jpeg', content: 'Не следует, однако, забывать, что дальнейшее развитие различных форм деятельности прекрасно подходит для', date: "10.10.2023", tag: "Новости, Награды" },
    ],
];

const NewsPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < Math.ceil(newsData.length / itemsPerPage) - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    const itemsPerPage = 3;
    const startIndex = currentIndex * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentNews = newsData.slice(startIndex, endIndex);

    const totalPages = Math.ceil(newsData.length / itemsPerPage);

    return (
        <div className={inter.className}>
            {currentNews.map((line, index) => (
                <NewsLine key={index} news={line} />
            ))}
            <div className={s['pos-button']}>
                <button
                    onClick={handlePrev}
                    className={s['arrow']}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="arrow / keyboard / left / medium">
                            <path id="icon" d="M15.7069 7.41L14.2969 6L8.29688 12L14.2969 18L15.7069 16.59L11.1269 12L15.7069 7.41Z" fill="#161616" />
                        </g>
                    </svg>
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`${s.button} ${currentIndex === index ? s.active : ''
                            }`}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    onClick={handleNext}
                    className={s['arrow']}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="arrow / keyboard / right / medium">
                            <path id="icon" d="M9.70687 6L8.29688 7.41L12.8769 12L8.29688 16.59L9.70687 18L15.7069 12L9.70687 6Z" fill="#161616" />
                        </g>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default NewsPage;