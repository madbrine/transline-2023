import MoBlockHeader from "@/molecules/block-header";
import { Inter } from "next/font/google";
import s from './styles.module.css';
import MoNavLinker from "@/molecules/nav-linker";
import MoBlockLine from "@/molecules/block-line";
import CoBlockServices from "../add-block-services";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";

const inter = Inter({
    subsets: ['latin'],
    weights: '400'
})

export default function AviaperevozkiIntro() {
    return (
        <div className={inter.className}>
            <div className={s['margin-block']}>
                <MoBlockHeaderH1 text='Авиа перевозки' />
                <MoNavLinker
                    text3="Авиа перевозки"
                    link3="/aviaperevozki"
                />
                <div className={s['container']}>
                    <div className={s['intro']}>
                        <p>Когда у вас плотный график, перевозка грузов воздушным транспортом - ваш естественный выбор. Наши прочные связи с крупнейшими авиакомпаниями означают, что мы быстры, гибки и способны справиться даже с самыми сжатыми сроками.</p>
                        <a>Получить консультацию</a>
                    </div>
                </div>
                <MoBlockLine text="Об услуге" />
                <div className={s['container-body']}>
                    <div className={s['about']}>
                        <img className={s['about-img']} src='/aviaperevozki/aviaperevozki-about-1.webp' alt="Изображение" />
                        <div className={s['text-img']} id={s['padding-list']}>
                            <div className={s['h1']}>Наши услуги по авиаперевозкам</div>
                            <div id={s['margin-list']}>
                                <li>Доставка от двери до двери</li>
                                <li>Полный и частичный воздушный чартер</li>
                                <li>Ускоренные услуги для доставки в сжатые сроки</li>
                            </div>
                        </div>
                    </div>
                    <div className={s['about']} id={s['height-about']}>
                        <div className={s['text-img']} id={s['padding-p']}>
                            <div className={s['h1']}>Размеры авиаперевозок</div>
                            <div>
                                <p>Хотя у нас есть планы и опыт по обработке грузов различных форм и размеров, по-прежнему действуют ограничения по весу и габаритам.</p>
                                <p>Свяжитесь с нами, чтобы обсудить ваши требования, и мы будем работать с вами, чтобы удовлетворить ваши потребности.</p>
                                <p>Протяни руку, и давайте начнем разговор. Поговори с одним из наших экспертов по решениям.</p>
                            </div>
                        </div>
                        <img className={s['about-img']} src="/aviaperevozki/aviaperevozki-about-2.webp" />
                    </div>
                    <div className={s['about-last']}>
                        <div className={s['h1']}>Воздушный чартер с оплатой</div>
                        <img src="/aviaperevozki/aviaperevozki-about-3.webp" />
                    </div>
                </div>
                <MoBlockLine text="Другие услуги" />
                <CoBlockServices />
            </div>

        </div>
    )
}