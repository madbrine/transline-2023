import { Inter } from "next/font/google";
import s from './styles.module.css';
import MoBlockHeader from "@/molecules/block-header";
import MoNavLinker from "@/molecules/nav-linker";
import MoBlockLine from "@/molecules/block-line";
import CoBlockServices from "../add-block-services";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";

const inter = Inter({
    subsets: ['latin'],
    weights: '400'
})

export default function NegabaritnyeIntro() {
    return (
        <div className={inter.className}>
            <div className={s['margin-block']}>
                <MoBlockHeaderH1 text='Негабаритные перевозки' />
                <MoNavLinker
                    text3="Негабаритные перевозки"
                    link3="/perevozka-negabaritnyh-gruzov"
                />
                <div className={s['container']}>
                    <div className={s['intro']}>
                        <p>TRANSLINE осуществляет перевозки негабаритных грузов морским, железнодорожным и автомобильным транспортом. Полный комплекс услуг включает погрузку в стране отправления, сюрвей, перевозку, прием в порту, выгрузку и инфраструктурные работы на маршруте с использованием собственных активов.</p>
                        <a>Получить консультацию</a>
                    </div>
                </div>
                <MoBlockLine text="Об услуге" />
                <div className={s['container-body']}>
                    <div className={s['about']}>
                        <img className={s['about-img']} src='/negabarit-perevozki/negabarit-about-1.webp' alt="Изображение" />
                        <div className={s['text-img']} id={s['padding-list']}>
                            <div className={s['h1']}>Типы перевозимых грузов</div>
                            <div className={s['margin-top']}>
                                <div id={s['margin-list']}>
                                    <li>Объекты строительства</li>
                                    <li>Спецтехника</li>
                                    <li>Производственное оборудование</li>
                                    <li>Установки для нефтедобывающего сектора</li>
                                    <li>Колесная и гусеничная техника</li>
                                    <li>Металлоконструкции</li>
                                    <li>Промышленное оборудование</li>
                                    <li>Каркасные постройки</li>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={s['about']} id={s['column-reverse']}>
                        <div className={s['text-img']} id={s['padding-p']}>
                            <div className={s['h1']}>Перевозка негабаритных грузов осуществляется</div>
                            <div className={s['margin-top']}>
                                <div id={s['margin-list']}>
                                    <li>Водным транспортом</li>
                                    <li>Грузовыми автомобилями – автопоездами, тягачами</li>
                                    <li>Железнодорожным транспортом – на открытых платформах, в специальных контейнерах</li>
                                </div>
                            </div>
                        </div>
                        <img className={s['about-img']} src="/multimodalnye-perevozki/multimodalnye-about-2.webp" />
                    </div>
                    <div className={s['about']}>
                        <img className={s['about-img']} src='/negabarit-perevozki/negabarit-about-2.webp' alt="Изображение" />
                        <div className={s['text-img']} id={s['padding-list']}>
                            <div className={s['h1']}>Этапы доставки негабаритных грузов</div>
                            <div className={s['margin-top']}>
                                <div id={s['margin-list']}>
                                    <li>Подборка ТС для перевозки</li>
                                    <li>Разработка маршрута с учетом всех возможных препятствий на пути следования груза</li>
                                    <li>Подготовка документов</li>
                                    <li>Согласование маршрута с контролирующими органами. Отсутствие такового повлечет штрафные санкции</li>
                                    <li>Погрузка и перевозка</li>
                                    <li>Разгрузка</li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <MoBlockLine text="Другие услуги" />
                <CoBlockServices />
            </div>
        </div>
    )
}