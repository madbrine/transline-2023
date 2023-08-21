import { Inter } from "next/font/google"
import s from './styles.module.css'

const inter = Inter({
    subsets: ['latin'],
    weight: '400'
})

function MoNavLinker(props) {
    return (
        <div className={s['container']}>
            <div className={s['line']} />
            <div className={s['bar']}>
                <div className={inter.className}>
                    <a href='/' className={s['text']}>Главная</a>
                </div>
                <div className={s['icon']}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6.66656 4.00012L5.72656 4.94012L8.7799 8.00012L5.72656 11.0601L6.66656 12.0001L10.6666 8.00012L6.66656 4.00012Z" fill="#161616" />
                    </svg>
                </div>
                <div className={inter.className}>
                    <a href={props.link2} className={s['text']}>{props.text2}</a>
                </div>
                {props.text3 && (
                    <>
                        <div className={inter.className}>
                            <a href='/vidy-perevozok' className={s['text']}>Услуги</a>
                        </div>
                        <div className={s['icon']}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M6.66656 4.00012L5.72656 4.94012L8.7799 8.00012L5.72656 11.0601L6.66656 12.0001L10.6666 8.00012L6.66656 4.00012Z" fill="#161616" />
                            </svg>
                        </div>
                        <div className={inter.className}>
                            <a href={props.link3} className={s['text']}>{props.text3}</a>
                        </div>
                    </>
                )}
                {/* 
                <div style={styles.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6.66656 4.00012L5.72656 4.94012L8.7799 8.00012L5.72656 11.0601L6.66656 12.0001L10.6666 8.00012L6.66656 4.00012Z" fill="#161616" />
                    </svg>
                </div> 
                */}
            </div>
        </div>
    )
}
export default MoNavLinker;