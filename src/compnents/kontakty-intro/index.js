import { Inter } from 'next/font/google';
import s from './styles.module.css';
import MoNavLinker from "@/molecules/nav-linker";
import MoBlockHeader from "@/molecules/block-header";
import VanishDiv from '@/molecules/vanish-div';

const inter = Inter({
    subsets: ['latin'],
    weight: '400'
})

function KontaktyIntro() {
    return (
        <div className={s['margin-block']}>
            <VanishDiv>
                <MoBlockHeader text="Контакты" />
            </VanishDiv>
            <VanishDiv>
                <MoNavLinker text2="Контакты" />
            </VanishDiv>
            <div className={s['container']}>
                <div id={s['block-pos']} className={inter.className}>
                    <div className={s['body']}>
                        <VanishDiv>
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
                        </VanishDiv>
                    </div>
                    <VanishDiv>
                        <div className={s['line']} />
                    </VanishDiv>
                    <VanishDiv>
                    <div style={{position:'relative', overflow: "hidden"}}>
                        <a href="https://yandex.ru/maps/org/translayn/141997198133/?utm_medium=mapframe&utm_source=maps" style={{color:'#eee', fontSize: '12px'}}>
                            Транслайн
                        </a>
                        <a href="https://yandex.ru/maps/162/almaty/category/freight_forwarding/184108201/?utm_medium=mapframe&utm_source=maps" style={{color:'#eee', fontSize: '12px'}}>
                            Экспедирование грузов в Алматы
                        </a>
                        <a href="https://yandex.ru/maps/162/almaty/category/haulage/184108175/?utm_medium=mapframe&utm_source=maps" style={{color:'#eee', fontSize:'12px', }}>
                            Автомобильные грузоперевозки в Алматы
                        </a>
                        <iframe src="https://yandex.ru/map-widget/v1/?ll=76.909523%2C43.236415&mode=search&oid=141997198133&ol=biz&z=16.97" className={s['map']} frameborder="1" allowfullscreen="true" style={{position: 'relative'}}>

                        </iframe>
                    </div>
                    </VanishDiv>
                </div>
            </div>
        </div>
    )
}
export default KontaktyIntro;