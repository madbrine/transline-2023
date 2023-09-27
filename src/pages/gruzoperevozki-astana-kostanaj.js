import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoHeaderV2 from "@/compnents/header-v2";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";


function GruzoperevozkiAstanaKostanaj() {
    return (
        <>
            <Head>
                <title>Грузоперевозки между Астаной и Костанаем с Transline</title>
                <meta name="description" content="Transline предлагает профессиональные грузоперевозки по маршруту Астана - Костанай. Надежная и быстрая доставка грузов наших клиентов - наш приоритет." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeaderV2 />
                <div className='tpl-margin-h'>
                    <MoBlockHeaderH1 text='Грузоперевозки Астана-Костанай' />
                    <MoNavLinker
                        text2="Грузоперевозки Астана-Костанай"
                        link2="/gruzoperevozki-astana-kostanaj"
                    />
                </div>
                <TplPage
                    title='О грузоперевозке по маршруту Астана-Костанай'
                    text1='Транспортная компания Transline предоставляет услуги грузоперевозок по маршруту Астана – Костанай. Мы готовы предложить оптимальные условия для перевозки вашего груза, независимо от его объема и веса.'
                    text2='Кроме того, наша компания предоставляет гибкую систему ценообразования, которая учитывает все требования и потребности наших клиентов. Мы предлагаем конкурентные цены на перевозку грузов, а также гарантируем высокое качество наших услуг.'
                    text3='Если вам нужна надежная и профессиональная компания для перевозки грузов по маршруту Астана – Костанай, обратитесь в Транспортную компанию Transline. Мы готовы оказать вам высококачественные услуги и сделать все возможное для того, чтобы ваш груз был доставлен вовремя и безопасно!'
                />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default GruzoperevozkiAstanaKostanaj;