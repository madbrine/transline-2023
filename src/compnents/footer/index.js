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
            <div className={s['line']} />
            <div className={s['box']}>
                <div>
                    <MoLogo />
                    <div className={s['logo-desc']}>
                        <a className={inter.className}>Направляя свою заявку и иные персональные данные по указанным на сайте электронным адресам и телефонам, я даю своё согласие на обработку </a>
                    </div>
                </div>
                <div className={inter.className} style={{ display: 'flex', opacity: 0.8 }}>
                    <div className={s['navigate-column-1']}>
                        <div className={s['nav-head']}>Информация:</div>
                        <div>
                            <a className={s['nav-link']}>
                                Услуги
                            </a>
                        </div>
                        <div>
                            <a className={s['nav-link']}>
                                Услуги
                            </a>
                        </div>
                        <div>
                            <a className={s['nav-link']}>
                                Услуги
                            </a>
                        </div>
                        <div>
                            <a className={s['nav-link']}>
                                Услуги
                            </a>
                        </div>
                        <div>
                            <a className={s['nav-link']}>
                                Услуги
                            </a>
                        </div>
                        <div>
                            <a className={s['nav-link']}>
                                Услуги
                            </a>
                        </div>
                    </div>
                    <div className={s['navigate-column-2']}>
                        <div className={s['nav-head']}>Информация:</div>
                        <div>
                            <a className={s['nav-link']}>
                                Услуги
                            </a>
                        </div>
                        <div>
                            <a className={s['nav-link']}>
                                Услуги
                            </a>
                        </div>
                        <div>
                            <a className={s['nav-link']}>
                                Услуги
                            </a>
                        </div>
                        <div>
                            <a className={s['nav-link']}>
                                Услуги
                            </a>
                        </div>
                        <div>
                            <a className={s['nav-link']}>
                                Услуги
                            </a>
                        </div>
                        <div>
                            <a className={s['nav-link']}>
                                Услуги
                            </a>
                        </div>
                    </div>
                    <div className={s['navigate-column-3']}>
                        <div className={s['nav-head']}>Информация:</div>
                        <div>
                            <a className={s['nav-link']}>
                                Услуги
                            </a>
                        </div>
                        <div>
                            <a className={s['nav-link']}>
                                Услуги
                            </a>
                        </div>
                        <div>
                            <a className={s['nav-link']}>
                                Услуги
                            </a>
                        </div>
                        <div>
                            <a className={s['nav-link']}>
                                Услуги
                            </a>
                        </div>
                        <div>
                            <a className={s['nav-link']}>
                                Услуги
                            </a>
                        </div>
                        <div>
                            <a className={s['nav-link']}>
                                Услуги
                            </a>
                        </div>

                    </div>
                    <button className={s['contact-us-button']}>
                        <a style={{ color: '#fff' }}>Связаться</a>
                    </button>
                </div>
            </div>
            <div className={inter.className} style={{
                display: 'flex',
                justifyContent: 'space-between',
            }}>
                <div className={s['under-footer']}>
                    <a style={{ marginRight: '64px' }}>Пользовательское соглашение</a>
                    <a>Политика конфиденциальности</a>
                </div>
                <a style={{
                    lineHeight: '135%',
                    color: '#999',
                    fontSize: '17px',
                }}>
                    ООО “Transline” 2012 — 2023 ©
                </a>
            </div>
        </div>
    )
}
export default CoFooter;