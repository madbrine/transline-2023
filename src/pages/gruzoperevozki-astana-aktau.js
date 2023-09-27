import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoHeaderV2 from "@/compnents/header-v2";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";


function GruzoperevozkiAstanaAktau() {
    return (
        <>
            <Head>
                <title>Грузоперевозки между Астаной и Актау с Transline</title>
                <meta name="description" content="Transline предлагает профессиональные грузоперевозки по маршруту Астана - Актау. Надежная и быстрая доставка грузов наших клиентов - наш приоритет." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeaderV2 />
                <div className='tpl-margin-h'>
                    <MoBlockHeaderH1 text='Грузоперевозки Астана-Актау' />
                    <MoNavLinker
                        text2="Грузоперевозки Астана-Актау"
                        link2="/gruzoperevozki-astana-aktau"
                    />
                </div>
                <TplPage
                    title='О грузоперевозке по маршруту Астана-Актау'
                    text1='Компания Transline предоставляет услуги по грузоперевозке по маршруту Астана-Актау. Данный маршрут является одним из самых важных в Казахстане, поскольку соединяет столицу с одним из крупнейших портов на Каспийском море.'
                    text2='Мы осуществляем грузоперевозки любого объема и сложности на данном маршруте, используя для этого современные транспортные средства и опытных водителей. Мы предлагаем различные виды транспорта для грузоперевозок, включая фуры и контейнеровозы.'
                    text3='Мы понимаем, насколько важно для наших клиентов, чтобы их грузы были доставлены вовремя и в сохранности. Поэтому мы предлагаем максимально комфортные условия для перевозки грузов, обеспечивая надежность и безопасность наших услуг.'
                    text4='Сотрудничество с компанией Transline – это не только качественная и надежная грузоперевозка, но и индивидуальный подход к каждому клиенту, учет его потребностей и желаний, а также гибкость в условиях сотрудничества. Мы всегда готовы предложить оптимальные решения и наилучшие цены на грузоперевозки по маршруту Астана-Актау.'
                    text5='Не сомневайтесь в выборе нашей компании для перевозки ваших грузов на этом направлении. Мы гарантируем качество и надежность наших услуг, а также максимально комфортные условия для перевозки ваших грузов. Сотрудничайте с нами и убедитесь в этом сами!'
                />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default GruzoperevozkiAstanaAktau;