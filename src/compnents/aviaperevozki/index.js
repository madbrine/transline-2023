import MoBlockHeader from "@/molecules/block-header";
import { Inter } from "next/font/google";
import s from './styles.module.css';
import MoNavLinker from "@/molecules/nav-linker";
import MoBlockLine from "@/molecules/block-line";

const inter = Inter({
    subsets: ['latin'],
    weights: '400'
})

export default function AviaperevozkiIntro() {
    return (
        <div className={inter.className}>
            <div className={s['margin-block']}>
                <MoBlockHeader text='Авиа перевозки' />
                <MoNavLinker
                    text2="Авиа перевозки"
                    link2="/aviaperevozki"
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
                        <img className={s['about-img']} src='/aviaperevozki/aviaperevozki-about-1.png' alt="Изображение" />
                        <div className={s['text-img']} id={s['padding-list']}>
                            <h1>Наши услуги по авиаперевозкам</h1>
                            <div id={s['margin-list']}>
                                <li>Доставка от двери до двери</li>
                                <li>Полный и частичный воздушный чартер</li>
                                <li>Ускоренные услуги для доставки в сжатые сроки</li>
                            </div>
                        </div>
                    </div>
                    <div className={s['about']} id={s['height-about']}>
                        <div className={s['text-img']}>
                            <h1>Размеры авиаперевозок</h1>
                            <div>
                                <p>Хотя у нас есть планы и опыт по обработке грузов различных форм и размеров, по-прежнему действуют ограничения по весу и габаритам.</p>
                                <p>Свяжитесь с нами, чтобы обсудить ваши требования, и мы будем работать с вами, чтобы удовлетворить ваши потребности.</p>
                                <p>Протяни руку, и давайте начнем разговор. Поговори с одним из наших экспертов по решениям.</p>
                            </div>
                        </div>
                        <img className={s['about-img']} src="/aviaperevozki/aviaperevozki-about-2.png"></img>
                    </div>
                </div>
            </div>

        </div>
    )
}