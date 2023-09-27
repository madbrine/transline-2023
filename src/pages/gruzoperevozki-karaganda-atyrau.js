import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoHeaderV2 from "@/compnents/header-v2";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";


function GruzoperevozkiKaragandaAtyrau() {
    return (
        <>
            <Head>
                <title>Грузоперевозки между Карагандой и Атырау с Transline</title>
                <meta name="description" content="Transline предлагает профессиональные грузоперевозки по маршруту Караганда-Атырау. Надежная и быстрая доставка грузов наших клиентов - наш приоритет." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeaderV2 />
                <div className='tpl-margin-h'>
                    <MoBlockHeaderH1 text='Грузоперевозки Караганда-Атырау' />
                    <MoNavLinker
                        text2="Грузоперевозки Караганда-Атырау"
                        link2="/gruzoperevozki-karaganda-atyrau"
                    />
                </div>
                <TplPage
                    title='О грузоперевозке по маршруту Караганда-Атырау'
                    text1='Компания Transline рада предложить свои услуги по грузоперевозке по маршруту Караганда-Атырау. Маршрут соединяет центральный и западный регионы Казахстана, проходя через ряд крупных городов, таких как Нур-Султан, Костанай и Уральск.'
                    text2='Мы предоставляем широкий спектр услуг по грузоперевозкам, включая перевозку любых типов грузов и обеспечение полной безопасности грузов во время транспортировки. Наша компания имеет собственный парк транспортных средств, в том числе грузовые автомобили, фургоны и контейнеры различных размеров.'
                    text3='Маршрут Караганда-Атырау является одним из наиболее востребованных маршрутов в нашей компании благодаря своей значимости для экономики региона и страны в целом. Мы понимаем важность каждой поставки для наших клиентов, поэтому гарантируем надежность, быстроту и качество наших услуг.'
                    text4='Наши профессиональные водители с многолетним опытом работы готовы осуществлять доставку грузов. Мы всегда готовы предложить индивидуальный подход к каждому клиенту и разработать оптимальный маршрут для перевозки грузов с учетом их характеристик и особенностей.'
                />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default GruzoperevozkiKaragandaAtyrau;