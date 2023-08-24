import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";


function GruzoperevozkiKaragandaKostanaj() {
    return (
        <>
            <Head>
                <title>Грузоперевозки между Карагандой и Костанаем с Transline</title>
                <meta name="description" content="Transline предлагает профессиональные грузоперевозки по маршруту Караганда-Костанай. Надежная и быстрая доставка грузов наших клиентов - наш приоритет." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeader />
                <div className='tpl-margin-h'>
                    <MoBlockHeaderH1 text='Грузоперевозки Караганда-Костанай' />
                    <MoNavLinker
                        text2="Грузоперевозки Караганда-Костанай"
                        link2="/gruzoperevozki-karaganda-kostanaj"
                    />
                </div>
                <TplPage
                    title='О грузоперевозке по маршруту Караганда-Костанай'
                    text1='Компания Transline предоставляет услуги по грузоперевозке по многим направлениям в Казахстане, в том числе и по маршруту Караганда-Костанай'
                    text2='Наша компания предоставляет высококачественные услуги по грузоперевозкам, используя только надежные транспортные средства и квалифицированных водителей. Мы осуществляем грузоперевозки любого объема и любой сложности, включая перевозку опасных грузов.'
                    text3='При выборе нашей компании для грузоперевозки по маршруту Караганда-Костанай, вы можете быть уверены в качестве наших услуг. Мы следим за каждым этапом перевозки и гарантируем своевременную доставку груза в указанное место назначения.'
                    text4='Наша цель - обеспечить нашим клиентам высокое качество услуг и удобство в работе с нами. Мы стремимся удовлетворить потребности каждого клиента и сделать грузоперевозку максимально простой и безопасной.'
                />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default GruzoperevozkiKaragandaKostanaj;