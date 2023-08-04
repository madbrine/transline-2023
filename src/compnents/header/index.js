import MoHeaderLink from '@/molecules/header-link';
import MoLogo from '@/compnents/logo';
import s from './styles.module.css';
import menuSvg from '../../assets/menu.svg';
import { Inter } from 'next/font/google';

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
                    <MoHeaderLink text={'О компании'} href='/s' />
                </div>
                <div>
                    <MoHeaderLink text={'Услуги'} href='/s' />
                </div>
                <div>
                    <MoHeaderLink text={'Сервисы'} href='/s' />
                </div>
                <div>
                    <MoHeaderLink text={'Авто парк'} href='/s' />
                </div>
                <div>
                    <MoHeaderLink text={'Контакты'} href='/s' />
                </div>
            </div>
            <div className={s['contacts-info']}>
                <div style={{marginBottom: 8}}>
                    <MoHeaderLink text={'info@transline.kz'} href='/s' underLine/>
                </div>
                <div>
                    <MoHeaderLink text={'+7 (707) 367-11-04'} href='/s' />
                </div>
            </div>
            <div>
                <button className={s['contact-us-button']}>
                    <a className={inter.className}>Связаться</a>
                </button>
            </div>
        </div>
    )
}
export default CoHeader;