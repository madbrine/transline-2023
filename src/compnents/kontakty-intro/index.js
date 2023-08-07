import { Inter } from 'next/font/google';
import s from './styles.module.css';

const inter = Inter({
    subsets: ['latin'],
    weight: '400'
})

function KontaktyIntro() {
    return (
        <div className={s['container']}>
            <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
            }}
            className={inter.className}
            >
                <div className={s['body']}>
                    <div style={{display: 'flex'}}>
                        <div className={s['column']}>
                            <a>Контакты:</a>
                            <div style={{marginTop: 32}}>+7 (727)-367-11-04</div>
                            <div>info@transline.kz</div>
                        </div>
                        <div className={s['column']}>
                            <a>Соц. сети</a>
                            <div style={{marginTop: 32}}>
                                Facebook
                            </div>
                            <div>Twitter</div>
                        </div>
                    </div>
                </div>
                <div className={s['line']}/>
                <div className={s['map']}/>
            </div>
        </div>
    )
}
export default KontaktyIntro;