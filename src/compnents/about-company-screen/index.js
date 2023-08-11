import MoBlockHeader from '@/molecules/block-header';
import MoBlockLine from '@/molecules/block-line';
import MoNavLinker from '@/molecules/nav-linker';
import { Inter } from 'next/font/google';
import s from'./styles.module.css';

const inter = Inter({
    subsets: ['latin'],
    weight: '400',
})

function CoAboutCompanyScreen() {
    return(
        <div className={inter.className} style={{marginTop: '180px'}}>
            <MoBlockHeader text={"О компании"}/>
            <MoNavLinker text2={"О компании"}/>
            <div className={s['container']}>
                <h1 className={s['header']}>
                    Крупнейшая логистическая компания Центральной Азии
                </h1>
                <div className={s['header-photo']}/>
                <div className={s['box']}>
                    <div className={s['left']}>

                    </div>
                    <div className={s['right']}>

                    </div>
                </div>
                <div className={s['box']}>
                    <div className={s['left']}>

                    </div>
                    <div className={s['right']}>

                    </div>
                </div>
                <div className={s['box']}>
                    <div className={s['left']}>

                    </div>
                    <div className={s['right']}>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default CoAboutCompanyScreen;