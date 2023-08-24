import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";


function GruzoperevozkiAstanaTaraz() {
    return (
        <>
            <Head>
                <title>Грузоперевозки между Астаной и Таразом с Transline</title>
                <meta name="description" content="Transline предлагает профессиональные грузоперевозки по маршруту Астана - Тараз. Надежная и быстрая доставка грузов наших клиентов - наш приоритет." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeader />
                <div className='tpl-margin-h'>
                    <MoBlockHeaderH1 text='Грузоперевозки Астана-Тараз' />
                    <MoNavLinker
                        text2="Грузоперевозки Астана-Тараз"
                        link2="/gruzoperevozki-astana-taraz"
                    />
                </div>
                <TplPage
                    title='О грузоперевозке по маршруту Астана - Тараз'
                    text1='Тараз - один из крупнейших городов в Казахстане и важный центр транспортной инфраструктуры. Если вы ищете надежного партнера для перевозки грузов на маршруте Астана-Тараз, компания Transline - идеальный выбор.'
                    text2='Мы предлагаем широкий спектр услуг, связанных с грузоперевозками, включая организацию транспорта, погрузку и выгрузку, а также страхование грузов. Мы имеем большой опыт работы с различными видами грузов, в том числе с опасными и тяжеловесными грузами, и готовы предложить нашим клиентам наиболее эффективные решения для их перевозки.'
                    text3='Один из наших ключевых преимуществ - это наша сеть транспортных партнеров, которые помогают нам обеспечить своевременную и надежную доставку грузов на маршруте Астана-Тараз. Мы работаем с автомобильным и железнодорожным транспортом, а также предлагаем услуги контейнерной перевозки.'
                    text4='Наша компания имеет все необходимые сертификаты и лицензии на проведение грузоперевозок, что гарантирует качество нашей работы. Мы также обеспечиваем безопасность и сохранность грузов во время перевозки, контролируя температуру и влажность при необходимости.'
                />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default GruzoperevozkiAstanaTaraz;