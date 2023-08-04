import MoBlockHeader from '@/molecules/block-header';
import MoBlockLine from '@/molecules/block-line';
import { Inter } from 'next/font/google';
import s from './styles.module.css'

const interM = Inter({
    subsets: ["latin"],
    weight: '500'
})
const inter = Inter({
    subsets: ["latin"],
    weight: '400'
})

function CoNews() {
    return (
        <div>
            <MoBlockLine text="Новости" />
            <div>
                <div
                    style={{
                        display: 'flex',
                        marginLeft: '60px',
                        marginRight: '60px',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                    }}>
                    <h1
                        className={inter.className}
                        style={{
                            fontSize: '112px',
                            margin: '0 0 0 0'
                        }}
                    >
                        Новости
                    </h1>
                    <div className={s['news-container']}>
                        <div className={s['news-line']}>
                            <div style={{marginRight: '30px'}}></div>
                            <div></div>
                        </div>
                        <div className={s['news-line']}>
                            <div style={{marginRight: '30px'}}></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CoNews;