import MoBlockHeader from "@/molecules/block-header";
import MoBlockLine from "@/molecules/block-line";
import MoButton from "@/molecules/button";
import MoHeaderLink from "@/molecules/header-link";
import MoNavLinker from "@/molecules/nav-linker";
import { Inter } from "next/font/google";
import CoSubmitApplication from "../submit-application";
import s from './styles.module.css';

const inter = Inter({
    subsets: ['latin'],
    weights: '400'
})
function SertifikatyIntro() {
    return (
        <div className={inter.className}>

            <div style={{ marginTop: '140px' }}>
                <MoBlockHeader text="Сертификаты" />
                <MoNavLinker
                    text2="Сертификаты"
                    link2="/sertifikaty"
                />
                <div className={s['container']}>
                    <div className={s['main-header']}>
                        <div className={s['main-header-desc']}>
                            Логистическая компания «Transline» имеет следующие аттестаты и сертификаты
                        </div>
                        <div className={s['main-header-text']}>
                            Аттестаты логистической компании «Transline»
                            светотехнической лаборатории
                        </div>
                    </div>
                    <div className={s['desc']}>
                        <h2>Описание</h2>
                        <p>
                            Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять важные задания по разработке модели развития.
                        </p>
                        <p>
                            С другой стороны дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание системы обучения кадров, соответствует насущным потребностям.
                        </p>
                        <button className={s['download-button']} style={{ marginBottom: '21px' }}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="41" viewBox="0 0 32 41" fill="none">
                                    <path d="M28 40H4C2.067 40 0.5 38.433 0.5 36.5V4.5C0.5 2.567 2.067 1 4 1H23.3017L31.5 8.71604V36.5C31.5 38.433 29.933 40 28 40Z" fill="#E3E3E3" stroke="#E3E3E3" />
                                </svg>
                                <a className={s['pdf']}>PDF</a>
                            </div>
                            <div className={s['download-button-text']}>
                                <div>Сертификат соответствия №1.pdf</div>
                                <a>24,2 Mb</a>
                            </div>
                        </button>
                        <button className={s['download-button']} style={{ marginBottom: '21px' }}>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="41" viewBox="0 0 32 41" fill="none">
                                    <path d="M28 40H4C2.067 40 0.5 38.433 0.5 36.5V4.5C0.5 2.567 2.067 1 4 1H23.3017L31.5 8.71604V36.5C31.5 38.433 29.933 40 28 40Z" fill="#E3E3E3" stroke="#E3E3E3" />
                                </svg>
                                <a className={s['pdf']}>PDF</a>
                            </div>
                            <div className={s['download-button-text']}
                                style={{ marginBottom: '48px' }}>
                                <div>Сертификат соответствия №1.pdf</div>
                                <a>24,2 Mb</a>
                            </div>
                        </button>
                        <div style={{ marginTop: '64px', display: 'flex' }}>
                            <MoButton text={'Рассчитать'} blue onClick={console.log('clicked')} />
                            <div style={{marginLeft: '21px'}}>
                                <MoButton text={'Услуги'} href="/" />
                            </div>
                        </div>
                    </div>
                </div>
                <CoSubmitApplication />
            </div>
        </div>
    )
}
export default SertifikatyIntro;