import { Inter } from 'next/font/google';
import s from './styles.module.css'

const inter = Inter({
    subsets: ['latin-ext'],
    weight: '400',
})
function CoIntro() {
    return (
        <div className={s['container']}>
            <h1 className={inter.className}>Крупнейшая логистическая</h1>
            <h1 className={inter.className}>компания Центральной Азии</h1>
            <div className={s['form-container']}>
                <div className={s['form-switches']}>
                    <a className={inter.className}>Рассчитать</a>
                    <a className={inter.className}>Консультация</a>
                </div>
                <div className={s['form-inputs-container']}
                style={{marginBottom: -50,}}>
                    <div className={s['form-input']}>
                        <input className={s['input-top-border']} type="text" name="name"/>
                        <input type="text" name="name" />
                        <input type="text" name="name" />
                        <input type="text" name="name" />
                        <input className={s['input-bottom-border']} type="text" name="name"/>
                        <a>
                            <button className={inter.className}>Рассчитать</button>
                        </a>
                    </div>
                    <div className={s['insurance-container']}>
                        <div className={s['insurance-box']}>
                            <button></button>
                            <div className={inter.className}> Требуется страхование</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CoIntro;