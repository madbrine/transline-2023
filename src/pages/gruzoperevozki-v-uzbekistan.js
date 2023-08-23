import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";


function GruzoperevozkiVUzbekistan() {
    return (
        <>
            <Head>
                <title>Цены на грузоперевозки из Казахстана в Узбекистан</title>
                <meta name="description" content="Компания Transline готова предложить перевозку груза в Узбекистан по оптимальному маршруту по приемлимым ценам." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeader />
                <div className='tpl-margin-h'>
                    <MoBlockHeaderH1 text='Грузоперевозки в Узбекистан' />
                    <MoNavLinker
                        text2="Грузоперевозки в Узбекистан"
                        link2="/gruzoperevozki-v-uzbekistan"
                    />
                </div>
                <TplPage
                    title='Особенности грузоперевозок в Узбекистан'
                    text1='Компания TRANSLINE осуществляет доставку грузов в Узбекистан из Казахстана. Мы обеспечим безупречный сервис, полный комплекс транспортных услуг и таможенное оформление, предоставляем целый ряд индивидуальных решений, способных удовлетворить буквально все требования клиента. Огромный опыт позволяет нам в точности соблюдать установленные сроки, обеспечивать целостность и сохранность грузов, а также предлагать множество полезных дополнительных услуг, значительно облегчающих вам процесс транспортировки самых различных товаров. Наши специалисты имеют многолетний опыт работы, они организуют и проконтролируют все стадии процесса грузоперевозки. Профессионально организуем неординарные мультимодальные схемы транспортировки.'
                    text2='Наиболее востребованные маршруты грузоперевозок в Узбекистан: Ташкент, Наманган, Самарканд, Андижан, Фергана, Бухара, Коканд, Нукус, Навои, Термез, Ургенч, Худжанд.'
                    text3='В зависимости от вида используемого транспорта, доставка в Узбекистан из Казахстана осуществляется в течение 3-7 суток.'
                    text4='Стоимость перевозки в Узбекистан рассчитывается в индивидуальном порядке, в зависимости от номенклатуры грузов, их объема, выбранного транспорта и протяженности маршрута. Влияние на стоимость транспортировки грузов в Узбекистан оказывает также необходимость в предоставлении различных дополнительных услуг.'
                    text5='Услуги по таможенному оформлению грузов в Узбекистан. Одной из задач доставки, с которой сталкиваются предприниматели при транспортировке товаров в Узбекистан, является растаможка. Она требует оформления большого количества бумаг в соответствии с действующим законодательством, что часто приводит к замедлению перевозки грузов. Компания TRANSLINE готова эффективно решить эту задачу.'
                />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default GruzoperevozkiVUzbekistan;