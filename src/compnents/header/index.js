import MoHeaderLink from '@/molecules/header-link';
import MoLogo from '@/compnents/logo';
import s from './styles.module.css';
import menuSvg from '../../assets/menu.svg';
function CoHeader() {
    return (
        <div className={s['container']}>
            <div className={s['flex-2']}>
                <MoLogo />
            </div>
            <div className={s['flex-2']}>
                <div>
                    <MoHeaderLink text={'info@transline.kz'} href='/s' />
                </div>
                <div>
                    <MoHeaderLink text={'+7 (707) 367-11-04'} href='/s' />
                </div>
            </div>
            <div className={s['flex-2']}>
                <MoHeaderLink text={'Направления'} href='/s' />
            </div>
            <div className={s['flex-3']}>
                <div>
                    <MoHeaderLink text={'О компании'} href='/s' />
                </div>
                <div>
                    <MoHeaderLink text={'Услуги'} href='/s' />
                </div>
                <div>
                    <MoHeaderLink text={'Сертификаты'} href='/s' />
                </div>
                <div>
                    <MoHeaderLink text={'Контакты'} href='/s' />
                </div>
            </div>
            <div className={s['flex-1']}>
                <MoHeaderLink text={'Связвться'} href='/s' />
            </div>
            <div className={s['flex-1']}>
                <MoHeaderLink text={'Поиск'} href='/s' />
            </div>
            <div className={s['flex-1']} style={{
                textAlign: 'right',
            }}>
                <MoHeaderLink text={'Меню'} href='/s' svg={menuSvg}/>
            </div>
        </div>
    )
}
export default CoHeader;