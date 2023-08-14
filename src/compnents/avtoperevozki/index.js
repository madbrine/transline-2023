import { Inter } from "next/font/google";
import s from './styles.module.css';
import MoBlockHeader from "@/molecules/block-header";
import MoNavLinker from "@/molecules/nav-linker";
import MoBlockLine from "@/molecules/block-line";
import CoBlockServices from "../add-block-services";

const inter = Inter({
    subsets: ['latin'],
    weights: '400'
})

export default function AvtoperevozkiIntro() {
    return (
        <div className={inter.className}>
            <div className={s['margin-block']}>
                <MoBlockHeader text='Авиа перевозки' />
                <MoNavLinker
                    text2="Автомобильные перевозки"
                    link2="/avtomobilnye-gruzoperevozki"
                />
                <div className={s['container']}>
                    <div className={s['intro']}>
                        <div className={s['intro-text']}>
                            <p>Максимальное качество транспортно-экспедиционных услуг при минимальных затратах</p>
                            <p>Наша цель - занимать лидирующие позиции на рынке грузовых перевозок Казахстана и стран СНГ.</p>
                        </div>
                        <a>Получить консультацию</a>
                    </div>
                </div>
                <MoBlockLine text="Об услуге" />
                <div className={s['container-body']}>
                    <div className={s['about']}>
                        <img className={s['about-img']} src='/avtoperevozki/avto-about-1.png' alt="Изображение" />
                        <div className={s['text-img']} id={s['padding-list']}>
                            <h1>Наши услуги по автомобильным перевозкам</h1>
                            <div className={s['margin-top-about-1']} id={s['margin-list']}>
                                <li>Внутренние и трансграничные грузоперевозки</li>
                                <li>Услуги по перетяжке линий через нашу глобальную сеть</li>
                                <li>Национальные дорожные экспресс-службы для посылок и ранцев</li>
                                <li>Таможенное оформление</li>
                                <li>Услуги по подбору и доставке по контракту Услуги грузовых перевозок премиум-класса по всей нашей глобальной сети</li>
                                <li>Решения для перевозки тяжелых грузов, включая задачи с большой грузоподъемностью до 360 тонн</li>
                                <li>Крупногабаритный транспорт</li>
                                <li>Услуги по обслуживанию платформ / подвесных платформ</li>
                                <li>Подвесной прицеп / специализированные решения для прицепов</li>
                                <li>Извоз / гужевой транспорт</li>
                            </div>
                        </div>
                    </div>
                    <div className={s['about']}>
                        <div className={s['text-img']} id={s['padding-p']}>
                            <h1>Типы автомобильных грузов</h1>
                            <div className={s['margin-top']}>
                                <p>Помимо генеральных грузов, мы перевозим широкий спектр специализированных грузов, включая:</p>
                                <div id={s['margin-list']}>
                                    <li>Вино и алкоголь</li>
                                    <li>Товары для дома</li>
                                    <li>Сталь и промышленные изделия</li>
                                    <li>Развешивание одежды</li>
                                    <li>Автомобильная</li>
                                    <li>Скоропортящиеся товары с регулируемой температурой</li>
                                    <li>Быстро перемещающиеся потребительские товары</li>
                                    <li>Печатные СМИ</li>
                                    <li>Опасные грузы</li>
                                    <li>Оборудование и материалы для горных работ</li>
                                    <li>Вторсырье</li>
                                    <li>Хрупкие и чувствительные грузы</li>
                                </div>
                            </div>
                        </div>
                        <img className={s['about-img']} src="/avtoperevozki/avto-about-2.jpeg" />
                    </div>
                    <div className={s['about']}>
                        <img className={s['about-img']} src='/avtoperevozki/avto-about-3.jpeg' alt="Изображение" />
                        <div className={s['text-img']} id={s['padding-list']}>
                            <h1>Размеры автомобильных грузов</h1>
                            <div className={s['margin-top']}>
                                <p>Мы можем перевозить грузы различных размеров, в том числе:</p>
                                <div id={s['margin-list']}>
                                    <li>Картонные коробки</li>
                                    <li>Заносы</li>
                                    <li>Груз на поддонах</li>
                                    <li>Сборные и насыпные грузы</li>
                                    <li>Скорость FTL (полная загрузка грузовика) и LTL (загрузка меньше, чем у грузовика)</li>
                                    <li>FCL (полная загрузка контейнера) и LCL (загрузка меньше, чем в контейнере)</li>
                                    <li>Негабаритные грузы</li>
                                    <li>Груз, загруженный поло</li>
                                </div>
                                <span>Мы перевозили грузы практически любого размера, конфигурации и типа – расскажите нам о своих требованиях, и мы будем работать с вами, чтобы удовлетворить ваши потребности.</span>
                            </div>
                        </div>
                    </div>
                    <div className={s['about']}>
                        <div className={s['text-img']} id={s['padding-p']}>
                            <h1>Размеры авиаперевозок</h1>
                            <div>
                                <p>Хотя у нас есть планы и опыт по обработке грузов различных форм и размеров, по-прежнему действуют ограничения по весу и габаритам.</p>
                                <p>Свяжитесь с нами, чтобы обсудить ваши требования, и мы будем работать с вами, чтобы удовлетворить ваши потребности.</p>
                                <p>Протяни руку, и давайте начнем разговор. Поговори с одним из наших экспертов по решениям.</p>
                            </div>
                        </div>
                        <img className={s['about-img']} src="/news-img/news-item-3.jpeg" />
                    </div>
                </div>
                <CoBlockServices />
            </div>

        </div>
    )
}