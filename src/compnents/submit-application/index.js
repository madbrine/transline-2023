import MoBlockLine from "@/molecules/block-line";
import { Inter } from "next/font/google";
import s from './styles.module.css'

const interM = Inter({
    subsets: ["latin"],
    weight: '500'
})
const inter = Inter({
    subsets: ["latin"],
    weight: '400'
})

function CoSubmitApplication() {
    return (
        <div>
            <MoBlockLine text="Оставить заявку" />
            <div>
                <div
                    style={{
                        display: 'flex',
                        marginLeft: '60px',
                        marginRight: '60px',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                    }}>
                    <div style={{
                        width: '800px',
                        display: 'flex',
                    }}>
                        <h1
                            className={inter.className}
                            style={{
                                fontSize: '92px',
                                margin: '0 0 0 0',
                                lineHeight: '94%',
                                display: 'inline-block',
                            }}
                        >
                            Получить консультацию
                        </h1>
                    </div>
                    <div className={s['form-input-container']}>
                        <input className={s['form-input']} />
                        <input className={s['form-input']} />
                        <input className={s['form-input']}
                            style={{ marginBottom: '19px' }}
                        />
                    </div>
                </div>
                <div className={s['line-gray']} />
                <div className={s['contacts-and-form-finish']}>
                    <div className={s['contacts-container']}>
                        <div className={inter.className} style={{
                            width: '138px',
                            marginRight: '44px'
                        }}>
                            <div className={s['contacts-header']}>Соц. сети:</div>
                            <div>
                                <a>Facebook</a>
                            </div>
                            <div>
                                <a>Twitter</a>
                            </div>
                        </div>
                        <div className={inter.className}>
                            <div className={s['contacts-header']}>Соц. сети:</div>
                            <div>
                                <a>Facebook</a>
                            </div>
                            <div>
                                <a>Twitter</a>
                            </div>
                        </div>
                    </div>
                    <div className={s['form-input-finish-container']}>
                        <input className={s['form-input']} />
                        <div className={s['form-input-button-container']}>
                            <button>Отправить</button>
                            <div className={s['form-input-button-desc']}>
                                <a className={inter.className} style={{color: '#666'}}>Нажимая "Отправить" вы </a>
                                <a className={inter.className}>соглашаетесь с обработкой персональных данных</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CoSubmitApplication;