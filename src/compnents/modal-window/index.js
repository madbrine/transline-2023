import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import s from './styles.module.css';
import { Inter } from "next/font/google";
import MoBlockLine from "@/molecules/block-line";
import NewsItem from "../news-item";

const inter = Inter({
    subsets: ['latin'],
    weights: '400'
})

const ModalWindow = ({ isOpen, onClose, news, allNewsData }) => {
    const [isClosing, setIsClosing] = useState(false);

    const [selectedNews, setSelectedNews] = useState(null); // Инициализация выбранной новостью

    // Функция для обновления выбранной новости
    const handleNewsClick = (selectedNews) => {
        setSelectedNews(selectedNews);

        var myDiv = document.getElementById('newsScrollTop');
        myDiv.scrollTop = 0;
    }

    const modalNews = selectedNews || news;

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = `${getScrollbarWidth()}px`;
        } else {
            document.body.style.overflow = "auto";
            document.body.style.paddingRight = "0";
        }
    }, [isOpen]);

    const handleModalClose = () => {
        setIsClosing(true);
        setSelectedNews(null);
        setTimeout(() => {
            setIsClosing(false);
            onClose();
        }, 300);
    }

    if (!isOpen || !news) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className={s['modalOverlay']}
                    onClick={handleModalClose}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >
                    <motion.div
                        id='newsScrollTop'
                        className={s['modalContent']}
                        onClick={(e) => e.stopPropagation()}
                        initial={{ x: "100%" }}
                        animate={isClosing ? { x: "100%" } : { x: "0%" }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <div className={inter.className}>
                            <button onClick={handleModalClose}>Закрыть</button>
                            <img className={s['preview-img']} src={modalNews.img} alt="Изображение новости" />
                            <div className={s['container']}>
                                <div className={s['title']}>
                                    {/* <div className={s['arrows-pos']}>
                                        <div className={s['arrow-l']}>
                                            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M5.40976 0.155848C5.30351 0.049597 5.16893 1.35935e-05 5.03434 1.35818e-05C4.89976 1.357e-05 4.76518 0.049597 4.65893 0.155848L0.359341 4.45543C0.153923 4.66085 0.153923 5.00085 0.359341 5.20626L4.65893 9.50585C4.86434 9.71127 5.20434 9.71127 5.40976 9.50585C5.50856 9.40588 5.56396 9.27099 5.56396 9.13043C5.56396 8.98988 5.50856 8.85499 5.40976 8.75502L2.01623 5.36149L12.7773 5.36149C13.0678 5.36149 13.3086 5.12066 13.3086 4.83024C13.3086 4.53982 13.0678 4.29899 12.7773 4.29899L2.01745 4.29899L5.40976 0.906679C5.50856 0.806709 5.56396 0.671819 5.56396 0.531264C5.56396 0.39071 5.50856 0.25582 5.40976 0.155848Z" fill="#161616" />
                                            </svg>
                                        </div>
                                        <div className={s['arrow-r']}>
                                            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M8.21134 9.50406C8.31759 9.61031 8.45217 9.6599 8.58675 9.6599C8.72134 9.6599 8.85592 9.61031 8.96217 9.50406L13.2618 5.20448C13.4672 4.99906 13.4672 4.65906 13.2618 4.45364L8.96217 0.154061C8.75675 -0.0513557 8.41675 -0.0513557 8.21133 0.154061C8.11254 0.254034 8.05713 0.388923 8.05713 0.529478C8.05713 0.670033 8.11254 0.804922 8.21133 0.904895L11.6049 4.29842L0.843751 4.29842C0.553334 4.29842 0.312501 4.53926 0.312501 4.82967C0.312501 5.12009 0.553334 5.36092 0.843751 5.36092L11.6036 5.36092L8.21134 8.75323C8.11254 8.8532 8.05713 8.98809 8.05713 9.12865C8.05713 9.2692 8.11254 9.40409 8.21134 9.50406Z" fill="#161616" />
                                            </svg>
                                        </div>
                                    </div> */}
                                    <p className={s['text-title']}>{modalNews.title}</p>
                                </div>
                                <div className={s['line']} id={s['margin-line']} />
                                <div className={s['text-date']}>
                                    <p className={s['date']}>{modalNews.date}</p>
                                    <p className={s['text']}>{modalNews.text1}</p>
                                </div>
                                <p className={s['text']}>{modalNews.text2}</p>
                                <img className={s['img-text']} src={modalNews.img_text1} />
                                <p className={s['text']}>{modalNews.text3}</p>
                                <p className={s['text']}>{modalNews.text4}</p>
                                <p className={s['text']}>{modalNews.text5}</p>
                                <p className={s['text']}>{modalNews.text6}</p>
                                <img className={s['img-text']} src={modalNews.img_text2} />
                                <p className={s['text']}>{modalNews.text7}</p>
                            </div>
                            <MoBlockLine text='Еще новости' />
                            <div className={s['horizontal-container']}>
                                {allNewsData.map((newsGroup, groupIndex) => (
                                    <div className={s['pos-elements']} key={groupIndex}>
                                        {newsGroup.map((item, itemIndex) => (
                                            <div className={s['element']} onClick={() => handleNewsClick(item)}>
                                                <NewsItem
                                                    key={itemIndex}
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
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ModalWindow;

function getScrollbarWidth() {
    const outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.overflow = "scroll";
    outer.style.msOverflowStyle = "scrollbar";
    document.body.appendChild(outer);
    const scrollbarWidth = outer.offsetWidth - outer.clientWidth;
    document.body.removeChild(outer);
    return scrollbarWidth;
}