import MoBlockHeader from '@/molecules/block-header';
import MoBlockLine from '@/molecules/block-line';
import VanishDiv from '@/molecules/vanish-div';
import { Inter } from 'next/font/google';
import s from './styles.module.css'
import NewsLine from '../news-line';

const interM = Inter({
    subsets: ["latin"],
    weight: '500'
})
const inter = Inter({
    subsets: ["latin"],
    weight: '400'
})

function CoNews() {
    const firstLineNews = [
        { img: '/news-img/news-item-1.jpeg', content: 'Не следует, однако, забывать, что дальнейшее развитие различных форм деятельности прекрасно подходит для', date: "10.10.2023", tag: "Новости, Награды" },
        { img: '/news-img/news-item-2.jpeg', content: 'Не следует, однако, забывать, что дальнейшее развитие различных форм деятельности прекрасно подходит для', date: "10.10.2023", tag: "Новости, Награды" },
    ];

    const secondLineNews = [
        { img: '/news-img/news-item-3.webp', content: 'Не следует, однако, забывать, что дальнейшее развитие различных форм деятельности прекрасно подходит для', date: "10.10.2023", tag: "Новости, Награды" },
        { img: '/news-img/news-item-4.jpeg', content: 'Не следует, однако, забывать, что дальнейшее развитие различных форм деятельности прекрасно подходит для', date: "10.10.2023", tag: "Новости, Награды" },
    ];

    return (
        <div>
            <MoBlockLine text="Новости" />
            <div>
                <div className={s['container']}>
                    <h1 className={inter.className}>
                        Новости
                    </h1>
                    <div className={s['news-container']}>
                        <NewsLine news={firstLineNews} />
                        <NewsLine news={secondLineNews} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CoNews;