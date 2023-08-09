import { Inter } from 'next/font/google';
import MoLogo from '../logo';
import s from './styles.module.css';

const inter = Inter({
    subsets: ['latin'],
    weight: '400'
})
function CoFooter() {
    return (
        <div className={s['container']}>
            <div className={s['box']}>
                <div>
                    <MoLogo />
                    <div className={s['logo-desc']}>
                        <a className={inter.className}>Направляя свою заявку и иные персональные данные по указанным на сайте электронным адресам и телефонам, я даю своё согласие на обработку </a>
                    </div>
                </div>
                <div className={inter.className} id={s['navigate']}>
                    <div className={s['nav-pos']}>
                        <div className={s['navigate-column-1']}>
                            <div className={s['nav-head']}>Информация:</div>
                            <div>
                                <a className={s['nav-link']}>
                                    Услуги
                                </a>
                            </div>
                            <div>
                                <a className={s['nav-link']}>
                                    О компании
                                </a>
                            </div>
                            <div>
                                <a className={s['nav-link']}>
                                    Сертификаты
                                </a>
                            </div>
                            <div>
                                <a className={s['nav-link']}>
                                    Автопарк
                                </a>
                            </div>
                            <div>
                                <a className={s['nav-link']}>
                                    Новости
                                </a>
                            </div>
                            <div>
                                <a className={s['nav-link']}>
                                    Контакты
                                </a>
                            </div>
                        </div>
                        <div className={s['navigate-column-2']}>
                            <div className={s['nav-head']}>Соц. сети:</div>
                            <div>
                                <a className={s['nav-link']}>
                                    Facebook
                                </a>
                            </div>
                            <div>
                                <a className={s['nav-link']}>
                                    Twitter
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={s['nav-pos']} id={s['nav-margin']}>
                        <div className={s['navigate-column-3']}>
                            <div className={s['nav-head']}>Контакты:</div>
                            <div>
                                <a className={s['nav-link']}>
                                    +7 (727)-367-11-04
                                </a>
                            </div>
                            <div>
                                <a className={s['nav-link']}>
                                    info@transline.kz
                                </a>
                            </div>
                        </div>
                        <button className={s['contact-us-button']}>
                            <a style={{ color: '#fff' }}>Связаться</a>
                        </button>
                    </div>
                </div>
            </div>
            <div className={s['line']} />
            <div className={inter.className} id={s['under-footer-pos']}>
                <div className={s['under-footer']}>
                    <a id={s['margin-footer']}>Пользовательское соглашение</a>
                    <a>Политика конфиденциальности</a>
                </div>
                <a id={s['font-style']}>
                    ООО “Transline” 2012 — 2023 ©
                </a>
            </div>
        </div>
    )
}
export default CoFooter;