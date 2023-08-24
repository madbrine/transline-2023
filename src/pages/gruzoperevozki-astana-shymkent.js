import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";


function GruzoperevozkiAstanaShymkent() {
    return (
        <>
            <Head>
                <title>Грузоперевозки между Астаной и Шымкентом с Transline</title>
                <meta name="description" content="Transline предлагает профессиональные грузоперевозки по маршруту Астана - Шымкент. Надежная и быстрая доставка грузов наших клиентов - наш приоритет." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeader />
                <div className='tpl-margin-h'>
                    <MoBlockHeaderH1 text='Грузоперевозки Астана - Шымкент' />
                    <MoNavLinker
                        text2="Грузоперевозки Астана - Шымкент"
                        link2="/gruzoperevozki-astana-shymkent"
                    />
                </div>
                <TplPage
                    title='О грузоперевозке по маршруту Астана-Шымкент'
                    text1='Компания Transline  рада предложить своим клиентам высококачественные услуги по грузоперевозке по маршруту Астана-Шымкент. Этот маршрут является одним из наиболее востребованных среди наших клиентов, поскольку он связывает два крупных города Казахстана.'
                    text2='Мы готовы осуществить грузоперевозки любой сложности и объема на этом маршруте, используя для этого современный транспорт и опытных водителей. Мы предлагаем различные виды транспорта для грузоперевозок, включая фуры, контейнеровозы и платформы, что позволяет выбрать оптимальный вариант для перевозки любого груза.'
                    text3='Мы понимаем, насколько важно для наших клиентов, чтобы их грузы были доставлены вовремя и в сохранности. Поэтому мы предоставляем максимально комфортные условия для перевозки грузов, обеспечивая надежность и безопасность наших услуг.'
                    text4='Мы стремимся к индивидуальному подходу к каждому клиенту, учитывая все его требования и желания. Наша компания всегда готова предложить наилучшие цены и оптимальные решения для грузоперевозок по маршруту Астана-Шымкент.'
                    text5='Сотрудничество с компанией Transline – это надежный и качественный выбор для грузоперевозок на дальние расстояния. Мы гарантируем быструю и безопасную доставку грузов по всему маршруту Астана-Шымкент, сохранность и целостность грузов, а также высокий уровень сервиса.'
                />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default GruzoperevozkiAstanaShymkent;