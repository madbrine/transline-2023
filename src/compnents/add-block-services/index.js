import { Inter } from "next/font/google";
import MoBlockLine from "@/molecules/block-line";
import s from './styles.module.css';
import Image from "next/image";
import photo1 from '../../assets/auto-cargo.webp';
import photo2 from '../../assets/multimodal-cargo.webp';
import photo3 from '../../assets/services/avia-cargo.webp';
import photo4 from '../../assets/services/train-cargo.webp';
import photo5 from '../../assets/services/negabarit-cargo.webp';
import photo6 from '../../assets/services/spec-tekhnika.webp';
import Link from "next/link";

const inter = Inter({
    subsets: ['latin'],
    weights: '400'
})

export default function CoBlockServices() {
    return (
        <div className={inter.className}>
            <div className={s['block-services']}>
                <Link className={s['service']} id={s['margin-left']} href="/avtomobilnye-gruzoperevozki">
                    <div className={s['service-image']}>
                        <Image src={photo1}
                            objectFit="cover"
                            layout="fill"
                            style={{ borderRadius: '20px' }}
                        />
                    </div>
                    <div className={s['text']}>
                        <div>
                            <h2>Автомобильные перевозки</h2>
                            <p>Наша глобальная сеть обеспечивает доставку грузов наших клиентов по всему миру</p>
                        </div>
                        <a>Узнать больше</a>
                    </div>
                </Link>
                <Link className={s['service']}  href="/multimodalnye-gruzoperevozki">
                        <div className={s['service-image']}>
                            <Image src={photo2}
                                objectFit="cover"
                                layout="fill"
                                style={{ borderRadius: '20px' }}
                            />
                        </div>
                        <div className={s['text']}>
                            <div>
                                <h2>Мультимодальные перевозки</h2>
                                <p>Позвольте нам помочь вам донести ваши продукты и идеи до всего мира</p>
                            </div>
                            <a>Узнать больше</a>
                        </div>
                </Link>
                <Link className={s['service']} href="/aviaperevozki">
                    <div className={s['service-image']}>
                        <Image src={photo3}
                            objectFit="cover"
                            layout="fill"
                            style={{ borderRadius: '20px' }}
                        />
                    </div>
                    <div className={s['text']}>
                        <div>
                            <h2>Авиа перевозки</h2>
                            <p>Мы обладаем знаниями, необходимыми для обслуживания широкого спектра отраслей</p>
                        </div>
                        <a>Узнать больше</a>
                    </div>
                </Link>
                <Link className={s['service']} href="/zheleznodorozhnye-perevozki">
                    <div className={s['service-image']}>
                        <Image src={photo4}
                            objectFit="cover"
                            layout="fill"
                            style={{ borderRadius: '20px' }}
                        />
                    </div>
                    <div className={s['text']}>
                        <div>
                            <h2 style={{textDecoration: 'none'}}>Железнодорожные перевозки</h2>
                            <p>Воспользуйтесь нашей железнодорожной сетью, чтобы соединить вашу цепочку поставок с основными экономическими регионами по всему миру.</p>
                        </div>
                        <a>Узнать больше</a>
                    </div>
                </Link>
                <Link className={s['service']} href="perevozka-negabaritnyh-gruzov">
                    <div className={s['service-image']}>
                        <Image src={photo5}
                            objectFit="cover"
                            layout="fill"
                            style={{ borderRadius: '20px' }}
                        />
                    </div>
                    <div className={s['text']}>
                        <div>
                            <h2>Негабаритные перевозки</h2>
                            <p>Мы осуществляем перевозки негабаритных грузов морским, железнодорожным и автомобильным транспортом. </p>
                        </div>
                        <a>Узнать больше</a>
                    </div>
                </Link>
                <Link className={s['service']} id={s['margin-right']} href="/arenda-specztehniki">
                    <div className={s['service-image']}>
                        <Image src={photo6}
                            objectFit="cover"
                            layout="fill"
                            style={{ borderRadius: '20px' }}
                        />
                    </div>
                    <div className={s['text']}>
                        <div>
                            <h2>Аренда спец. техники</h2>
                            <p>У нас вы найдете самосвалы различных марок, моделей и грузоподъемности. </p>
                        </div>
                        <a>Узнать больше</a>
                    </div>
                </Link>
                {/* <div className={s['service']}>
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
                </div> */}
            </div>
        </div>
    )
}