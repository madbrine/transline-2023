import Image from 'next/image';
import s from './styles.module.css';
import headerPhoto from '../../assets/auto-cargo-header.webp'
import MoBlockHeader from '@/molecules/block-header';
import MoBlockLine from '@/molecules/block-line';
import MoNavLinker from '@/molecules/nav-linker';
import { Inter } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    weight: '400'
})
function CoAvtopark() {
    return (
        <div className={inter.className}>
            <div className={s['margin']}>
                <MoBlockHeader
                    text="Автопарк"

                />
                <MoNavLinker
                    text2="Автопарк"
                    link2="/avtopark"
                />
                <div className={s['container']}>
                    <div className={s['header-photo']}>
                        <Image
                            src={headerPhoto}
                            layout="fill"
                            objectFit='cover'
                            style={{ borderRadius: 21 }}
                        />
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