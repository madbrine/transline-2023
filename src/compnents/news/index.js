import MoBlockHeader from '@/molecules/block-header';
import MoBlockLine from '@/molecules/block-line';
import VanishDiv from '@/molecules/vanish-div';
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
            <VanishDiv>
                <MoBlockLine text="Новости" />
            </VanishDiv>
            <div>
                <div className={s['container']}>
                    <VanishDiv>
                        <h1 className={inter.className}>
                            Новости
                        </h1>
                    </VanishDiv>
                    <div className={s['news-container']}>
                        <VanishDiv big>
                            <div className={s['news-line']}>
                                <div id={s['margin-card']}></div>
                                <div></div>
                            </div>
                        </VanishDiv>
                        <VanishDiv big>
                            <div className={s['news-line']}>
                                <div id={s['margin-card']}></div>
                                <div></div>
                            </div>
                        </VanishDiv>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CoNews;