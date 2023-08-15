import { Inter } from "next/font/google";
import MoBlockLine from "@/molecules/block-line";
import s from './styles.module.css';

const inter = Inter({
    subsets: ['latin'],
    weights: '400'
})

export default function CoBlockServices() {
    return (
        <div className={inter.className}>
            <MoBlockLine text="Другие услуги" />
            <div className={s['block-services']}>
                <div className={s['service']} id={s['margin-left']}>
                    <img src="/services/avto-service.png" />
                    <div className={s['text']}>
                        <div>
                            <h2>Автомобильные перевозки</h2>
                            <p>Наша глобальная сеть обеспечивает доставку грузов наших клиентов по всему миру</p>
                        </div>
                        <a>Узнать больше</a>
                    </div>
                </div>
                <div className={s['service']}>
                    <img src="/services/multimodal-service.jpeg" />
                    <div className={s['text']}>
                        <div>
                            <h2>Мультимодальные перевозки</h2>
                            <p>Позвольте нам помочь вам донести ваши продукты и идеи до всего мира</p>
                        </div>
                        <a>Узнать больше</a>
                    </div>
                </div>
                <div className={s['service']}>
                    <img src="/services/avia-service.png" />
                    <div className={s['text']}>
                        <div>
                            <h2>Авиа перевозки</h2>
                            <p>Мы обладаем знаниями, необходимыми для обслуживания широкого спектра отраслей</p>
                        </div>
                        <a>Узнать больше</a>
                    </div>
                </div>
                <div className={s['service']}>
                    <img src="/services/train-service.jpeg" />
                    <div className={s['text']}>
                        <div>
                            <h2>Железнодорожные перевозки</h2>
                            <p>Pariatur eiusmod proident eu reprehenderit pariatur sit mollit aliquip pariatur laborum tempor reprehenderit.</p>
                        </div>
                        <a>Узнать больше</a>
                    </div>
                </div>
                <div className={s['service']}>
                    <img src="/services/negabarit-service.png" />
                    <div className={s['text']}>
                        <div>
                            <h2>Негабаритные перевозки</h2>
                            <p>Pariatur eiusmod proident eu reprehenderit pariatur sit mollit aliquip pariatur laborum tempor reprehenderit.</p>
                        </div>
                        <a>Узнать больше</a>
                    </div>
                </div>
                <div className={s['service']}>
                    <img src="/services/arenda-service.jpeg" />
                    <div className={s['text']}>
                        <div>
                            <h2>Аренда спец. техники</h2>
                            <p>Pariatur eiusmod proident eu reprehenderit pariatur sit mollit aliquip pariatur laborum tempor reprehenderit.</p>
                        </div>
                        <a>Узнать больше</a>
                    </div>
                </div>
                <div className={s['service']}>
                    <img src="/services/tamoj-service.jpeg" />
                    <div className={s['text']}>
                        <div>
                            <h2>Таможенное оформление</h2>
                            <p>Pariatur eiusmod proident eu reprehenderit pariatur sit mollit aliquip pariatur laborum tempor reprehenderit.</p>
                        </div>
                        <a>Узнать больше</a>
                    </div>
                </div>
                <div className={s['service']} id={s['margin-right']}>
                    <img src="/services/sklad-service.jpeg" />
                    <div className={s['text']}>
                        <div>
                            <h2>Складские услуги</h2>
                            <p>Pariatur eiusmod proident eu reprehenderit pariatur sit mollit aliquip pariatur laborum tempor reprehenderit.</p>
                        </div>
                        <a>Узнать больше</a>
                    </div>
                </div>
            </div>
        </div>
    )
}