import MoHeaderLink from '@/molecules/header-link';
import MoLogo from '@/compnents/logo';
import s from './styles.module.css';
import menuSvg from '../../assets/menu.svg';
import { Inter } from 'next/font/google';
import CoApplicationModal from '../application-modal';

const inter = Inter({
    subsets: ["latin"],
    weights: ['400']
})
function CoHeader() {
    return (
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
                <div style={{marginBottom: 8}}>
                    <MoHeaderLink text={'info@transline.kz'} underLine/>
                </div>
                <div>
                    <MoHeaderLink text={'+7 (707) 367-11-04'} />
                </div>
            </div>
            <div id={s['hide-button']}>
                <button className={s['contact-us-button']}>
                    <a className={inter.className}>Связаться</a>
                </button>
                {/* <CoApplicationModal /> */}
            </div>
        </div>
    )
}
export default CoHeader;