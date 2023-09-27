import MoButton from "@/molecules/button";
import MoNavLinker from "@/molecules/nav-linker";
import VanishDiv from "@/molecules/vanish-div";
import { Inter } from "next/font/google";
import CoSubmitApplication from "../submit-application";
import s from './styles.module.css';
import MoBlockHeaderH1 from "@/molecules/block-header-h1";

const inter = Inter({
    subsets: ['latin'],
    weights: '400'
})
function SertifikatyIntro() {
    return (
        <div className={inter.className}>
            <div className={s['margin-block']}>
                <MoBlockHeaderH1 text="Сертификаты" />
                <VanishDiv>
                    <MoNavLinker
                        text2="Сертификаты"
                        link2="/sertifikaty"
                    />
                </VanishDiv>
                <div className={s['container']}>
                    <VanishDiv>
                        <div className={s['main-header']}>
                            <div className={s['main-header-desc']}>
                                Логистическая компания «Transline» имеет следующие аттестаты и сертификаты
                            </div>
                            <div className={s['main-header-text']}>
                                Аттестаты логистической компании «Transline»
                                светотехнической лаборатории
                            </div>
                        </div>
                    </VanishDiv>
                    <VanishDiv>
                        <div className={s['line']}></div>
                    </VanishDiv>
                    <div className={s['desc']}>
                        <VanishDiv>
                            <h2>Описание</h2>
                        </VanishDiv>
                        <VanishDiv>
                            <p>
                                Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять важные задания по разработке модели развития.
                            </p>
                        </VanishDiv>
                        <VanishDiv>
                            <p>
                                С другой стороны дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание системы обучения кадров, соответствует насущным потребностям.
                            </p>
                        </VanishDiv>
                        <VanishDiv>
                            <button className={s['download-button']} id={s['margin-top']}>
                                <div>
                                    <a href="pdf/certificate_of_conformity_ISO_9001_14001_45001.pdf" download>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="41" viewBox="0 0 32 41" fill="none">
                                            <path d="M28 40H4C2.067 40 0.5 38.433 0.5 36.5V4.5C0.5 2.567 2.067 1 4 1H23.3017L31.5 8.71604V36.5C31.5 38.433 29.933 40 28 40Z" fill="#E3E3E3" stroke="#E3E3E3" />
                                        </svg>
                                        <span className={s['pdf']}>PDF</span>
                                    </a>
                                </div>
                                <div className={s['download-button-text']}>
                                    <a href="pdf/certificate_of_conformity_ISO_9001_14001_45001.pdf" download>
                                        <div>Сертификат соответствия ISO 9001, 14001, 45001.pdf</div>
                                        <span>1,8 Mb</span>
                                    </a>
                                </div>
                            </button>
                        </VanishDiv>
                        <VanishDiv>
                            <button className={s['download-button']} id={s['margin-bottom']}>
                                <div>
                                    <a href="pdf/certificate_of_conformity_ISO_27001.pdf" download>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="41" viewBox="0 0 32 41" fill="none">
                                            <path d="M28 40H4C2.067 40 0.5 38.433 0.5 36.5V4.5C0.5 2.567 2.067 1 4 1H23.3017L31.5 8.71604V36.5C31.5 38.433 29.933 40 28 40Z" fill="#E3E3E3" stroke="#E3E3E3" />
                                        </svg>
                                        <span className={s['pdf']}>PDF</span>
                                    </a>
                                </div>
                                <div className={s['download-button-text']}>
                                    <a href="pdf/certificate_of_conformity_ISO_27001.pdf" download>
                                        <div>Сертификат соответствия ISO 27001.pdf</div>
                                        <span>1,7 Mb</span>
                                    </a>
                                </div>
                            </button>
                        </VanishDiv>
                        <VanishDiv>
                            <div className={s['buttons']}>
                                <MoButton text={'Рассчитать'} blue onClick={console.log('clicked')} />
                                <div className={s['margin-button']}>
                                    <MoButton text={'Услуги'} href="/" />
                                </div>
                            </div>
                        </VanishDiv>
                    </div>
                </div>
                <CoSubmitApplication />
            </div>
        </div >
    )
}
export default SertifikatyIntro;