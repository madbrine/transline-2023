import s from './styles.module.css';
import NewsItem from '../news-item';

const NewsLine = ({ news }) => {
    return (
        <div className={s["news-line"]}>
            {news.map((item, index) => (
                <div key={index} className={s["news-item-wrapper"]}>
                    <NewsItem img={item.img} content={item.content} date={item.date} tag={item.tag} />
                </div>
            ))}
        </div>
    );
};

export default NewsLine;