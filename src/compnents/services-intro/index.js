import MoBlockHeader from "@/molecules/block-header";
import MoNavLinker from "@/molecules/nav-linker";
import { Inter } from "next/font/google";
import s from './styles.module.css'

const inter = Inter({
    subsets: ['latin'],
    weights: '400'
})

function ServicesIntro() {
    return (
        <div className={inter.className}>
            <div className={s['margin-block']}>
                <MoBlockHeader text="Услуги" />
                <MoNavLinker
                    text2="Услуги"
                    link2="/services"
                />
                <div className={s['container']}>
                    <div className={s['services-intro']}>
                        <p>Транспортная группа TRANSLINE предлагает широкий спектр логистических решений с использованием возможностей собственного автомобильного транспорта в Крупнейших портах Азии и СНГ и разветвленной сети представительств по всему миру.</p>
                        <a>Получить консультацию</a>
                    </div>
                    <div className={s['line']} />
                    <div className={s['service']}>
                        <div className={s['desc']}>
                            <div>
                                <h1>Автомобильные перевозки</h1>
                                <p>Максимальное качество транспортно-экспедиционных услуг при минимальных затратах.</p>
                            </div>
                            <a>Подробнее</a>
                        </div>
                        <div>
                            <div className={s['img']} />
                        </div>
                    </div>
                    <div className={s['line']} />
                    <div className={s['service']}>
                        <div className={s['desc']}>
                            <div>
                                <h1>Мультимодальные перевозки</h1>
                                <p>Максимальное качество транспортно-экспедиционных услуг при минимальных затратах.</p>
                            </div>
                            <a>Подробнее</a>
                        </div>
                        <div>
                            <div className={s['img']} />
                        </div>
                    </div>
                    <div className={s['line']} />
                    <div className={s['service']}>
                        <div className={s['desc']}>
                            <div>
                                <h1>Негабаритные перевозки</h1>
                                <p>Максимальное качество транспортно-экспедиционных услуг при минимальных затратах.</p>
                            </div>
                            <a>Подробнее</a>
                        </div>
                        <div>
                            <div className={s['img']} />
                        </div>
                    </div>
                    <div className={s['line']} />
                    <div className={s['service']}>
                        <div className={s['desc']}>
                            <div>
                                <h1>Авиа перезвозки</h1>
                                <p>Максимальное качество транспортно-экспедиционных услуг при минимальных затратах.</p>
                            </div>
                            <a>Подробнее</a>
                        </div>
                        <div>
                            <div className={s['img']} />
                        </div>
                    </div>
                    <div className={s['line']} />
                    <div className={s['service']}>
                        <div className={s['desc']}>
                            <div>
                                <h1>Аренда спец. техники</h1>
                                <p>Максимальное качество транспортно-экспедиционных услуг при минимальных затратах.</p>
                            </div>
                            <a>Подробнее</a>
                        </div>
                        <div>
                            <div className={s['img']} />
                        </div>
                    </div>
                    <div className={s['line']} />
                    <div className={s['service']}>
                        <div className={s['desc']}>
                            <div>
                                <h1>Железнодорожные перевозки</h1>
                                <p>Максимальное качество транспортно-экспедиционных услуг при минимальных затратах.</p>
                            </div>
                            <a>Подробнее</a>
                        </div>
                        <div>
                            <div className={s['img']} />
                        </div>
                    </div>
                    <div className={s['line']} />
                    <div className={s['service']}>
                        <div className={s['desc']}>
                            <div>
                                <h1>Складские услуги</h1>
                                <p>Максимальное качество транспортно-экспедиционных услуг при минимальных затратах.</p>
                            </div>
                            <a>Подробнее</a>
                        </div>
                        <div>
                            <div className={s['img']} />
                        </div>
                    </div>
                    <div className={s['line']} />
                    <div className={s['service']}>
                        <div className={s['desc']}>
                            <div>
                                <h1>Складские услуги</h1>
                                <p>Максимальное качество транспортно-экспедиционных услуг при минимальных затратах.</p>
                            </div>
                            <a>Подробнее</a>
                        </div>
                        <div>
                            <div className={s['img']} />
                        </div>
                    </div>
                    <div className={s['line']} />
                    <div className={s['service']}>
                        <div className={s['desc']}>
                            <div>
                                <h1>Таможенное оформление</h1>
                                <p>Максимальное качество транспортно-экспедиционных услуг при минимальных затратах.</p>
                            </div>
                            <a>Подробнее</a>
                        </div>
                        <div>
                            <div className={s['img']} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesIntro;