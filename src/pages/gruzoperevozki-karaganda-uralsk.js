import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";


function GruzoperevozkiKaragandaUralsk() {
    return (
        <>
            <Head>
                <title>Грузоперевозки между Карагандой и Уральском с Transline</title>
                <meta name="description" content="Transline предлагает профессиональные грузоперевозки по маршруту Караганда-Уральск. Надежная и быстрая доставка грузов наших клиентов - наш приоритет." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeader />
                <div className='tpl-margin-h'>
                    <MoBlockHeaderH1 text='Грузоперевозки Караганда-Уральск' />
                    <MoNavLinker
                        text2="Грузоперевозки Караганда-Уральск"
                        link2="/gruzoperevozki-karaganda-uralsk"
                    />
                </div>
                <TplPage
                    title='О грузоперевозке по маршруту Караганда-Уральск'
                    text1='Компания Transline предоставляет услуги по грузоперевозке по маршруту Караганда-Уральск. Этот маршрут является одним из наиболее важных для наших клиентов, поскольку он связывает восточную и западную части Казахстана.'
                    text2='Мы осуществляем грузоперевозки любой сложности и объема на этом маршруте, используя для этого современный парк транспортных средств и квалифицированных водителей. Мы предлагаем различные виды транспорта для грузоперевозок, включая фуры, рефрижераторы и автомобили.'
                    text3='Мы понимаем, насколько важно для наших клиентов, чтобы их грузы были доставлены вовремя и в сохранности. Поэтому мы предлагаем максимально комфортные условия для перевозки грузов, обеспечивая надежность и безопасность наших услуг.'
                    text4='Сотрудничество с компанией Transline– это не только качественная и надежная грузоперевозка, но и индивидуальный подход к каждому клиенту, учет его потребностей и желаний, а также гибкость в условиях сотрудничества. Мы всегда готовы предложить оптимальные решения и наилучшие цены на грузоперевозки по маршруту Караганда-Уральск.'
                />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default GruzoperevozkiKaragandaUralsk;