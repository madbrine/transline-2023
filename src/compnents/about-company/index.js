import MoBlockLine from "@/molecules/block-line";
import { Inter } from "next/font/google";
import s from './styles.module.css';

const inter = Inter({
    subsets: [
        'latin'
    ],
    weight: '400',
})
const interM = Inter({
    subsets: [
        'latin'
    ],
    weight: '500',
})
function CoAboutCompany() {
    return (
        <div>
            <MoBlockLine text={'О компании'} />
            <div className={s['container']}>
                <h1 className={inter.className}>TRANSLINE — ведущая транспортно-логистическая компания</h1>
                <div className={s['video-container']}>

                </div>
                <div style={{ display: 'flex' }}>
                    <div style={{ flex: 1 }} />
                    <div className={interM.className}
                        style={{
                            flex: 1,
                            marginLeft: '16px',
                            marginBottom: '100px',
                        }}>
                        <a className={s['link-read-more']}>
                            Читать больше
                        </a>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className={inter.className}
                        style={{
                            fontSize: '23px',
                            width: '660px'
                        }} >
                        Преимущества
                    </div>
                    <div className={inter.className}
                        style={{
                            marginLeft: '16px',
                            width: '654px',
                        }}>
                        <div style={{
                            color: '#161616',
                        }}>
                            Мы организуем надежные и безопасные транспортные решения для отечественных компаний и за рубежом. Наша команда профессионалов может предоставить индивидуальные решения для удовлетворения ваших уникальных потребностей и гарантировать своевременную доставку вашего груза по востребованным маршрутам.
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '88px',
                            marginBottom: '70px'
                        }}>
                            <div style={{ width: '280px' }}>
                                <div className={s['reason-value']}>100 млн</div>
                                <div className={s['reason-line']} />
                                <div className={s['reason-desc']}>Страхование груза </div>
                                <div className={s['reason-desc']}>на 100 млн тенге </div>
                            </div>
                            <div style={{ width: '280px' }}>
                                <div className={s['reason-value']}>100 млн</div>
                                <div className={s['reason-line']} />
                                <div className={s['reason-desc']}>Страхование груза </div>
                                <div className={s['reason-desc']}>на 100 млн тенге </div>
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between', 
                            marginBottom: '140px'
                        }}>
                            <div style={{ width: '280px' }}>
                                <div className={s['reason-value']}>100 млн</div>
                                <div className={s['reason-line']} />
                                <div className={s['reason-desc']}>Страхование груза </div>
                                <div className={s['reason-desc']}>на 100 млн тенге </div>
                            </div>
                            <div style={{ width: '280px' }}>
                                <div className={s['reason-value']}>100 млн</div>
                                <div className={s['reason-line']} />
                                <div className={s['reason-desc']}>Страхование груза </div>
                                <div className={s['reason-desc']}>на 100 млн тенге </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CoAboutCompany;