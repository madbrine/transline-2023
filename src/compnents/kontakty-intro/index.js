import { Inter } from 'next/font/google';
import s from './styles.module.css';
import MoNavLinker from "@/molecules/nav-linker";
import MoBlockHeader from "@/molecules/block-header";

const inter = Inter({
    subsets: ['latin'],
    weight: '400'
})

function KontaktyIntro() {
    return (
        <div className={s['margin-block']}>
            <MoBlockHeader text="Контакты" />
            <MoNavLinker text2="Контакты" />
            <div className={s['container']}>
                <div id={s['block-pos']} className={inter.className}>
                    <div className={s['body']}>
                        <div style={{ display: 'flex' }}>
                            <div className={s['column']}>
                                <a>Контакты:</a>
                                <div id={s['margin-top']}>+7 (727)-367-11-04</div>
                                <div>info@transline.kz</div>
                            </div>
                            <div className={s['column']}>
                                <a>Соц. сети</a>
                                <div id={s['margin-top']}>
                                    Facebook
                                </div>
                                <div>Twitter</div>
                            </div>
                        </div>
                    </div>
                    <div className={s['line']} />
                    <div className={s['map']} />
                </div>
            </div>
        </div>
    )
}
export default KontaktyIntro;