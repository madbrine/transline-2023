import Image from 'next/image';
import s from './styles.module.css';
import MoNavLinker from '@/molecules/nav-linker';
import { Inter } from 'next/font/google';
import MoBlockHeaderH1 from '@/molecules/block-header-h1';

const inter = Inter({
    subsets: ['latin'],
    weight: '400'
})
function CoAvtopark() {
    return (
        <div className={inter.className}>
            <div className={s['margin']}>
                <MoBlockHeaderH1
                    text="Автопарк"
                />
                <MoNavLinker
                    text2="Автопарк"
                    link2="/avtopark"
                />
                <div className={s['container']}>
                    <div className={s['header-photo']}>
                        <div style={{ position: 'relative' }}>
                            <div className={s['intro']}>
                                <div className={s['intro-text']}>
                                    <p>
                                        Собственный автопарк включает 350 тягачей марок
                                        Volvo, MAN, Iveco, Mercedes, Freightliner, Isuzu.
                                    </p>
                                </div>
                                <a>Получить консультацию</a>
                            </div>
                        </div>
                    </div>
                    <div className={s['desc']}>
                        <a>
                            Транспортная группа TRANSLINE занимается перевозками автомобилей и спецтехники по Казахстан и в импортном направлении из стран Азии: Японии, Кореи и Китая. Мы обладаем большим практическим опытом в ведении перевозок и оформлении сопутствующей документации: оформлении деклараций, выдаче ПТС и других разрешительных документов.
                        </a>
                    </div>
                    <div className={s['desc']}>
                        <a>
                            География перевозок автомобилей и другой колесной техники по России простирается от Дальнего Востока: Чукотка, Камчатка, Магадан, Сахалин, Курильские острова до границ с Европейским союзом.Осуществить перевозку автомобиля по России может как юридическое, так и физическое лицо.
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CoAvtopark;