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
                <div className={s['container']}>
                    <h1 className={inter.className}>
                        Новости
                    </h1>
                    <div className={s['news-container']}>
                        <div className={s['news-line']}>
                            <div id={s['margin-card']}></div>
                            <div></div>
                        </div>
                        <div className={s['news-line']}>
                            <div id={s['margin-card']}></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CoNews;