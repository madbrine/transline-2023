import MoBlockHeader from '@/molecules/block-header';
import MoBlockLine from '@/molecules/block-line';
import VanishDiv from '@/molecules/vanish-div';
import { Inter } from 'next/font/google';
import s from './styles.module.css'
import NewsLine from '../news-line';
import NewsItem from '../news-item';

const interM = Inter({
    subsets: ["latin"],
    weight: '500'
})
const inter = Inter({
    subsets: ["latin"],
    weight: '400'
})

const newsData = [
    [
        {
            img: '/news-img/101023/img1.jpeg',
            content: 'Партнерские соглашения с Пакистаном по Афганистанскому маршруту',
            date: "10.10.2023",
            tag: "Новости, Награды",
            title: 'Руководство TRANSLINE провело встречи с представителями правительства Пакистана',
            text1: 'Входе плодотворных переговоров с представителями Пакистана, были произведенены двухстороннии соглашения по транс-афганскому маршруту. ',
            text2: 'Теперь TRANSLINE имеет зелёный коридор по перевозкам через Афганистан. Данное соглашение открывает новый транспортный путь, создавая новые возможности для логистической отрасли и экономики Центральной Азии',
            img_text1: '/news-img/101023/img2.jpeg',
            text3: 'Мы собираемся наращивать партнерские соглашения на межгосударственном уровне для достижения развития экономики нашей страны',
            text4: 'Следите за нашими новостями чтобы оставаться в курсе новых событий в логистической отрасли.',
            text5: '',
            text6: '',
            img_text2: '',
            text7: ''
        },
        {
            img: '/news-img/news-item-4.jpeg',
            content: 'Ullamco occaecat nostrud sint est occaecat laborum esse nisi ex.',
            date: "10.10.2023",
            tag: "Новости, Награды",
            title: 'Ullamco occaecat nostrud sint est occaecat laborum esse nisi ex.',
            text1: 'Ullamco occaecat nostrud sint est occaecat laborum esse nisi ex.',
            text2: 'Ullamco occaecat nostrud sint est occaecat laborum esse nisi ex.',
            img_text1: '/news-img/news-item-1.jpeg',
            text3: 'Ullamco occaecat nostrud sint est occaecat laborum esse nisi ex.',
            text4: 'Ullamco occaecat nostrud sint est occaecat laborum esse nisi ex.',
            text5: 'Ullamco occaecat nostrud sint est occaecat laborum esse nisi ex.',
            text6: 'Ullamco occaecat nostrud sint est occaecat laborum esse nisi ex.',
            img_text2: '/news-img/news-item-2.jpeg',
            text7: 'Ullamco occaecat nostrud sint est occaecat laborum esse nisi ex.'
        },
    ],
    [
        { img: '/news-img/news-item-3.webp', content: 'Не следует, однако, забывать, что дальнейшее развитие различных форм деятельности прекрасно подходит для', date: "10.10.2023", tag: "Новости, Награды" },
        { img: '/news-img/news-item-4.jpeg', content: 'Не следует, однако, забывать, что дальнейшее развитие различных форм деятельности прекрасно подходит для', date: "10.10.2023", tag: "Новости, Награды" },
    ],
];

function CoNews() {
    return (
        <div>
            <MoBlockLine text="Новости" />
            <div>
                <div className={s['container']}>
                    <h1 className={inter.className}>
                        Новости
                    </h1>
                    <div className={s['news-container']}>
                        <NewsLine news={newsData[0]} allNewsData={newsData} />
                        <NewsLine news={newsData[1]} allNewsData={newsData} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CoNews;