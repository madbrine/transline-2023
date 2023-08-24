import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";


function GruzoperevozkiAstanaTaldykorgan() {
    return (
        <>
            <Head>
                <title>Грузоперевозки между Астаной и Талдыкорганом с Transline</title>
                <meta name="description" content="Transline предлагает профессиональные грузоперевозки по маршруту Астана - Талдыкорган. Надежная и быстрая доставка грузов наших клиентов - наш приоритет." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeader />
                <div className='tpl-margin-h'>
                    <MoBlockHeaderH1 text='Грузоперевозки Астана-Талдыкорган' />
                    <MoNavLinker
                        text2="Грузоперевозки Астана-Талдыкорган"
                        link2="/gruzoperevozki-astana-taldykorgan"
                    />
                </div>
                <TplPage
                    title='О грузоперевозке по маршруту Астана - Талдыкорган'
                    text1='Грузоперевозки – это важная составляющая любого бизнеса, особенно когда речь идет о транспортировке грузов на большие расстояния. И в этом деле надежный партнер – это залог успеха.'
                    text2='Компания Transline уже давно занимается грузоперевозками и предлагает комплексные услуги для организации перевозок на маршруте Астана-Талдыкорган. Мы понимаем, что каждый груз уникален и требует индивидуального подхода. Поэтому наша компания готова предложить клиентам различные варианты транспорта и перевозок, чтобы выбрать наиболее оптимальное решение.'
                    text3='Мы предлагаем нашим клиентам автомобильный транспорт для перевозки грузов на маршруте Астана-Талдыкорган. В зависимости от веса и типа груза, выбираем наиболее подходящий вид транспорта и предлагаем нашим клиентам максимально выгодные условия для перевозки.'
                />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default GruzoperevozkiAstanaTaldykorgan;