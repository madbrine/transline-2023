import MoBlockHeader from '@/molecules/block-header';
import MoBlockLine from '@/molecules/block-line';
import MoNavLinker from '@/molecules/nav-linker';
import VanishDiv from '@/molecules/vanish-div';
import { motion } from 'framer-motion';
import { Inter } from 'next/font/google';
import s from './styles.module.css';

const inter = Inter({
    subsets: ['latin'],
    weight: '400',
})

function CoAboutCompanyScreen() {
    return (
        <div className={inter.className} style={{ marginTop: '180px' }}>
            <MoBlockHeader text={"О компании"} />
            <MoNavLinker text2={"О компании"} />
            <div className={s['container']}>
                <h1 className={s['header']}>
                    Крупнейшая логистическая компания Центральной Азии
                </h1>
                <div className={s['header-photo']} />
                <div className={s['box-first']}>
                    <div className={s['left']}>
                        <VanishDiv>
                            <div className={s['reasons-left-header']} >
                                Преимущества
                            </div>
                        </VanishDiv>
                    </div>
                    <div className={s['right']}>
                        <VanishDiv>
                            <div className={s['reasons-desc']}>
                                Мы организуем надежные и безопасные транспортные решения для отечественных компаний и за рубежом. Наша команда профессионалов может предоставить индивидуальные решения для удовлетворения ваших уникальных потребностей и гарантировать своевременную доставку вашего груза по востребованным маршрутам.
                            </div>
                        </VanishDiv >
                        <VanishDiv>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginTop: '88px',
                                marginBottom: '70px'
                            }}>
                                <div>
                                    <div className={s['reason-value-big']}>100 млн</div>
                                    <div className={s['reason-line']} />
                                    <div className={s['reason-desc']}>Страхование груза на 100 млн тенге</div>
                                    <div className={s['reason-desc']}> </div>
                                </div>
                            </div>
                        </VanishDiv>
                        <VanishDiv>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginBottom: '140px'
                            }}>
                                <div style={{ width: '290px', marginRight: '90px' }}>
                                    <div className={s['reason-value']}>300+</div>
                                    <div className={s['reason-line']} />
                                    <a className={s['reason-desc']}>Единиц собственного транспорта</a>
                                </div>
                                <div style={{ width: '316px' }}>
                                    <div className={s['reason-value']}>16 лет</div>
                                    <div className={s['reason-line']} />
                                    <a className={s['reason-desc']}>Бережно доставляем ваш груз</a>
                                </div>
                            </div>
                        </VanishDiv>
                    </div>
                </div>
            </div>
            <MoBlockLine text="О нас" />
            <div className={s['container']}>
                <div className={s['box']}>
                    <div className={s['left']}>

                    </div>
                    <div className={s['right']}>

                    </div>
                </div>
            </div>
            <MoBlockLine text="История компании" />
            <div className={s['container']}>
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