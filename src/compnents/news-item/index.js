import s from './styles.module.css';
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ['latin'],
    weights: '400'
})

const NewsItem = ({ img, content, date, tag }) => {
    return (
        <div className={inter.className}>
            <div className={s["news-item"]}>
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
        </div>
    );
};

export default NewsItem;