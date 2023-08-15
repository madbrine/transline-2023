import { Inter } from "next/font/google";
import s from './styles.module.css';
import MoBlockHeader from "@/molecules/block-header";
import MoNavLinker from "@/molecules/nav-linker";
import MoBlockLine from "@/molecules/block-line";
import CoBlockServices from "../add-block-services";

const inter = Inter({
    subsets: ['latin'],
    weights: '400'
})

export default function ArendaTehnikiIntro() {
    return (
        <div className={inter.className}>
            <div className={s['margin-block']}>
                <MoBlockHeader text='Аренда спец. техники' />
                <MoNavLinker
                    text2="Аренда спец. техники"
                    link2="/arenda-specztehniki"
                />
                <div className={s['container']}>
                    <div className={s['intro']}>
                        <div className={s['intro-text']}>
                            <p>Наша команда опытных специалистов всегда готова помочь вам с выбором подходящей самосвальной техники и ответить на все ваши вопросы. Мы стремимся к долгосрочным партнерским отношениям и делаем все возможное, чтобы удовлетворить ваши потребности.</p>
                            <p>У нас вы найдете самосвалы различных марок, моделей и грузоподъемности. Независимо от масштабов вашего проекта, у нас есть подходящая техника для выполнения задач любой сложности.</p>
                        </div>
                        <a>Получить консультацию</a>
                    </div>
                </div>
                <MoBlockLine text="Об услуге" />
                <div className={s['container-body']}>
                    <div className={s['about-1']}>
                        <img className={s['about-img']} src='/arenda-tehniki/arenda-about-1.jpeg' alt="Изображение" />
                        <div className={s['text-img']} id={s['padding-list']}>
                            <h1>Типы услуг</h1>
                            <div className={s['margin-top']}>
                                <div id={s['margin-list']}>
                                    <li>Предоставление в аренду других видов спец техники</li>
                                    <li>Перевозка вашего сырья, с пункта А в пункт Б, под ключ</li>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={s['about-2']}>
                        <div className={s['text-img']} id={s['padding-p']}>
                            <h1>Отраслевые решения</h1>
                            <div className={s['margin-top']}>
                                <p className={s['long-p']}>Да, мы можем. Перевозка буровой установки из Канады в Европу или доставка циркового оборудования в Казань - развитая инфаструктура, опыт и штат высококлассных специалистов позволяют нам с успехом реализовывать поставленные задачи</p>
                                <div id={s['margin-list']}>
                                    <li>Машиностроение</li>
                                    <li>Строительство</li>
                                    <li>Сельское хозяйство</li>
                                    <li>Автомобильная промышленность</li>
                                    <li>Топливная промышленность и энергетика</li>
                                    <li>Химическая и нефтехимическая промышленность</li>
                                    <li>Нефтегазовая отрасль</li>
                                    <li>Металлургическая промышленность</li>
                                    <li>Товары народного потребления</li>
                                </div>
                            </div>
                        </div>
                        <img className={s['about-img']} src="/arenda-tehniki/arenda-about-2.jpeg" />
                    </div>
                    <div className={s['about-3']}>
                        <img className={s['about-img']} src='/arenda-tehniki/arenda-about-3.jpeg' alt="Изображение" />
                        <div className={s['text-img']} id={s['padding-list']}>
                            <h1>Почему выбирают нас?</h1>
                            <div className={s['margin-top']}>
                                <div id={s['margin-list']}>
                                    <li>Наша техника расположена по всему Казахстану, что позволяет нам решать ваши задачи в максимально короткие сроки</li>
                                    <li>Мы доставляем технику в любую точку Казахстана. При перевозках на самосвале выполняем перевозку вашего сырья с пункта загрузки на пункт выгрузки</li>
                                    <li>Средний возраст техники, в том числе самосвалов, составляет менее семи лет</li>
                                    <li>Мы предостовляем разнообразную спецтехнику, от кранов до самосвалов, для решение любой вашей задачи</li>
                                </div>
                            </div>
                            <a>Получить консультацию</a>
                        </div>
                    </div>
                </div>
                <MoBlockLine text="Другие услуги" />
                <CoBlockServices />
            </div>
        </div>
    )
}