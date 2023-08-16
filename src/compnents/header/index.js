import MoHeaderLink from '@/molecules/header-link';
import MoLogo from '@/compnents/logo';
import s from './styles.module.css';
import menuSvg from '../../assets/menu.svg';
import { Inter } from 'next/font/google';
import CoApplicationModal from '../application-modal';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const inter = Inter({
    subsets: ["latin"],
    weights: ['400']
})
function CoHeader() {

    const [showMobileMenu, setShowMobileMenu] = useState(false)

    const handleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
        console.log(`state menu is ${showMobileMenu}`);
    }

    return (
        <div className={inter.className}>
            <AnimatePresence>
                {showMobileMenu &&
                    <motion.div
                        initial={{ y: '-100vh' }}
                        animate={{ y: 0 }}
                        exit={{ y: '-100vh' }}
                        transition={{ ease: 'easeOut', duration: 0.15 }}
                        className={s['mobile-menu-position']}
                    >
                        <div className={s['mobile-menu-container']}>
                            <div className={s['mobile-nav-list']}>
                                <div>
                                    <MoHeaderLink text={'О компании'} href='/o-kompanii' />
                                </div>
                                <div>
                                    <MoHeaderLink text={'Услуги'} href='/vidy-perevozok' />
                                </div>
                                <div>
                                    <MoHeaderLink text={'Сертификаты'} href='/sertifikaty' />
                                </div>
                                <div>
                                    <MoHeaderLink text={'Авто парк'} href='/avtopark' />
                                </div>
                                <div>
                                    <MoHeaderLink text={'Контакты'} href='/kontakty' />
                                </div>
                            </div>
                            <div className={s['mobile-info-contacts']}>
                                <div>
                                    <div className={s['mobile-info-header']}>
                                        Соц.сети
                                    </div>
                                    <a href="https://twitter.com/TranslineKz/">Twitter</a>
                                    <a href="https://facebook.com/transline.kz/">Facebook</a>
                                    <a href="https://instagram.com/transline.kz/">Instagram</a>
                                </div>
                                <div>
                                    <div className={s['mobile-info-header']}>
                                        Контакты
                                    </div>
                                    <a href="mailto:info@transline.kz">
                                        info@transline.kz
                                    </a>
                                    <a href="tel:+77073671104">
                                        +7 (707)-367-11-04
                                    </a>
                                    <a href="tel:+77273671104">
                                        +7 (727)-367-11-04
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>

            <div className={s['container']}>
                <div className={s['logo']}>
                    <MoLogo />
                </div>
                <div className={s['navigation-bar']}>
                    <div>
                        <MoHeaderLink text={'О компании'} href='/o-kompanii' />
                    </div>
                    <div>
                        <MoHeaderLink text={'Услуги'} href='/vidy-perevozok' />
                    </div>
                    <div>
                        <MoHeaderLink text={'Сертификаты'} href='/sertifikaty' />
                    </div>
                    <div>
                        <MoHeaderLink text={'Авто парк'} href='/avtopark' />
                    </div>
                    <div>
                        <MoHeaderLink text={'Контакты'} href='/kontakty' />
                    </div>
                </div>

                <div className={s['contacts-info']}>
                    <div style={{ marginBottom: 8 }}>
                        <MoHeaderLink text={'info@transline.kz'} underLine />
                    </div>
                    <div>
                        <MoHeaderLink text={'+7 (707) 367-11-04'} />
                    </div>
                </div>
                <button className={s['contact-us-button']}>
                    <a href='/oformit-zayavku' className={s['contact-us-text']}>Связаться</a>
                </button>
                <button className={s['mobile-menu']}
                    onClick={handleMobileMenu}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M2 8H22V10H2V8Z" fill="#161616" />
                        <path d="M2 14H22V16H2V14Z" fill="#161616" />
                    </svg>
                </button>
                {/* <CoApplicationModal /> */}
                <div></div>
            </div>
        </div>
    )
}
export default CoHeader;