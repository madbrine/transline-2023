import { Inter } from "next/font/google";
import s from './styles.module.css';
import MoBlockHeader from "@/molecules/block-header";
import MoNavLinker from "@/molecules/nav-linker";
import MoBlockLine from "@/molecules/block-line";
import CoBlockServices from "../add-block-services";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";

const inter = Inter({
    subsets: ['latin'],
    weights: '400'
})

export default function MultimodalnyeIntro() {
    return (
        <div className={inter.className}>
            <div className={s['margin-block']}>
                <MoBlockHeaderH1 text='Мультимодальные перевозки' />
                <MoNavLinker
                    text3="Железнодорожные перевозки"
                    link3="/zheleznodorozhnye-perevozki"
                />
                <div className={s['container']}>
                    <div className={s['intro']}>
                        <p>Мы можем комбинировать виды транспорта по всей нашей сети для перевозки грузов воздушным, автомобильным, железнодорожным и морским транспортом, предоставляя нашим клиентам гибкие и экономически эффективные решения для грузовых перевозок.</p>
                        <a>Получить консультацию</a>
                    </div>
                </div>
                <MoBlockLine text="Об услуге" />
                <div className={s['container-body']}>
                    <div className={s['about']}>
                        <img className={s['about-img']} src='/multimodalnye-perevozki/multimodalnye-about-1.webp' alt="Изображение" />
                        <div className={s['text-img']} id={s['padding-list']}>
                            <div className={s['h1']}>Наши услуги по мультимодальным перевозкам</div>
                            <div className={s['margin-top']}>
                                <p className={s['long-p']}>Самолеты, поезда, грузовики и корабли. Иногда для удовлетворения ваших потребностей требуется их комбинация.</p>
                                <p className={s['long-p']}>Наличие различных видов транспорта позволяет нам адаптировать логистическое решение в соответствии с вашим бюджетом и графиком.</p>
                                <p className={s['long-p']}>Например, наше решение по перевозке морским транспортом может быть на 80% быстрее, чем морские перевозки, при незначительной стоимости авиаперевозок.</p>
                                <p className={s['long-p']}>У нас работают профессиональные команды, обеспечивающие бесперебойную передачу грузов между видами транспорта.</p>
                            </div>
                        </div>
                    </div>
                    <div className={s['about-special']}>
                        <div className={s['text-img']} id={s['padding-p']}>
                            <div className={s['h1']}>Типы и размеры грузов</div>
                            <div className={s['margin-top']}>
                                <p className={s['short-p']}>Объединение нескольких видов транспорта означает, что, как правило, могут быть отправлены грузы практически любого размера, конфигурации и типа. При использовании воздушного транспорта в ваших решениях для модальных перевозок будут существовать некоторые ограничения.</p>
                                <p className={s['short-p']}>Мы можем разработать мультимодальное решение в соответствии с вашими потребностями.</p>
                            </div>
                        </div>
                        <img className={s['about-img']} src="/multimodalnye-perevozki/multimodalnye-about-2.webp" />
                    </div>
                    <div className={s['about']}>
                        <img className={s['about-img']} src='/multimodalnye-perevozki/multimodalnye-about-3.webp' alt="Изображение" />
                        <div className={s['text-img']} id={s['padding-list']}>
                            <div className={s['h1']}>Почему выбирают нас?</div>
                            <div className={s['margin-top']}>
                                <p className={s['long-p']}>У нас есть множество услуг, чтобы предложить нашим клиентам наилучшее решение. Помимо мультимодального транспортного маршрута, адаптированного к вашим потребностям, вы можете рассчитывать:</p>
                                <div id={s['margin-list']}>
                                    <li>Перекрестная стыковка для полной и частичной погрузки</li>
                                    <li>Складирование</li>
                                    <li>Распределение</li>
                                    <li>Услуги по подбору и упаковке</li>
                                    <li>Мультимодальные транспортные услуги, включая автомобильные, воздушные и морские</li>
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