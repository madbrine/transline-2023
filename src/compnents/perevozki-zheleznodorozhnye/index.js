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

export default function ZheleznodorozhnyeIntro() {
    return (
        <div className={inter.className}>
            <div className={s['margin-block']}>
                <MoBlockHeader text='Железнодорожные' />
                <div className={s['head-service']}>
                    <MoBlockHeader text='перевозки' />
                </div>
                <MoNavLinker
                    text2="Железнодорожные перевозки"
                    link2="/zheleznodorozhnye-perevozki"
                />
                <div className={s['container']}>
                    <div className={s['intro']}>
                        <p>Хотите экономичный, надежный и экологически чистый способ перевозки грузов по суше? Тогда воспользуйтесь нашей железнодорожной сетью, чтобы соединить вашу цепочку поставок с основными экономическими регионами по всему миру.</p>
                        <a>Получить консультацию</a>
                    </div>
                </div>
                <MoBlockLine text="Об услуге" />
                <div className={s['container-body']}>
                    <div className={s['about']}>
                        <img className={s['about-img']} src='/zheleznodorozhnye-perevozki/zheleznodorozhnye-about-1.jpeg' alt="Изображение" />
                        <div className={s['text-img']} id={s['padding-list']}>
                            <h1>Наши услуги по железнодорожным перевозкам</h1>
                            <div className={s['margin-top']}>
                                <div className={s['special-p']}>
                                    <p>Мы перевозим грузы практически любого размера, конфигурации и типа – расскажите нам о своих требованиях, и мы будем работать с вами, чтобы удовлетворить ваши потребности.</p>
                                </div>
                                <div id={s['margin-list']}>
                                    <li>Экономия затрат по сравнению с авиаперевозками</li>
                                    <li>Более быстрое транзитное время, чем морские перевозки</li>
                                    <li>Экономичное решение для перевозки сыпучих и проектных грузов</li>
                                    <li>GPS-отслеживание для повышения безопасности</li>
                                    <li>Частые и регулярные отправления для оперативной гибкости</li>
                                    <li>Поставка контейнеров, принадлежащих перевозчику, как для FCL, так и для сборных грузов</li>
                                    <li>Вариант мультимодального обслуживания</li>
                                    <li>Вариант обслуживания "от двери до двери"</li>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={s['about-special']}>
                        <div className={s['text-img']} id={s['padding-p']}>
                            <h1>Типы железнодорожных перевозок</h1>
                            <div className={s['margin-top']}>
                                <p>Помимо генеральных грузов, мы перевозим широкий спектр специализированных грузов, включая:</p>
                                <div id={s['margin-list']}>
                                    <li>Скоропортящиеся товары с регулируемой температурой</li>
                                    <li>Сыпучие товары</li>
                                    <li>Транспортные средства и запчасти</li>
                                    <li>Машины и оборудование</li>
                                </div>
                            </div>
                            <div className={s['text-margin']}>
                                <h1>Размеры железнодорожных грузов</h1>
                                <div className={s['margin-top']}>
                                    <p>Мы можем перевозить грузы различных размеров, включая:</p>
                                    <div id={s['margin-list']}>
                                        <li>FCL (полная загрузка контейнера)</li>
                                        <li>Сборные грузы (нагрузка меньше, чем в контейнере)</li>
                                        <li>Неконтейнерные грузы</li>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img className={s['about-img']} src="/zheleznodorozhnye-perevozki/zheleznodorozhnye-about-2.jpeg" />
                    </div>
                    <div className={s['about']}>
                        <img className={s['about-img']} src='/zheleznodorozhnye-perevozki/zheleznodorozhnye-about-3.jpeg' alt="Изображение" />
                        <div className={s['text-img']} id={s['padding-list']}>
                            <h1>Почему выбирают нас?</h1>
                            <div className={s['margin-top']}>
                                <span className={s['special-p']}>
                                    <p>У нас есть множество услуг, чтобы предоставить нашим клиентам наилучшее решение. Перевозя грузы с нами, вы можете рассчитывать:</p>
                                </span>
                                <div id={s['margin-list']}>
                                    <li>Перекрестная стыковка для полной и частичной погрузки</li>
                                    <li>Складирование</li>
                                    <li>Распределение</li>
                                    <li>Услуги по подбору и упаковке</li>
                                    <li>Мультимодальные транспортные услуги, включая автомобильные, воздушные и морские</li>
                                </div>
                                <div className={s['special-p']} id={s['margin-special-p']}>
                                    <p>Мы перевозим грузы практически любого размера, конфигурации и типа – расскажите нам о своих требованиях, и мы будем работать с вами, чтобы удовлетворить ваши потребности.</p>
                                </div>
                            </div>
                            <a>Получить консультацию</a>
                        </div>
                    </div>
                </div>
                <MoBlockLine text="Другие услуги" />
                <CoBlockServices />
            </div>
        </div>
    )
}