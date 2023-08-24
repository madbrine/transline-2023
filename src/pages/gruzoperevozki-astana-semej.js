import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";


function GruzoperevozkiAstanaSemej() {
    return (
        <>
            <Head>
                <title>Грузоперевозки между Астаной и Семей с Transline</title>
                <meta name="description" content="Transline предлагает профессиональные грузоперевозки по маршруту Астана - Семей. Надежная и быстрая доставка грузов наших клиентов - наш приоритет." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeader />
                <div className='tpl-margin-h'>
                    <MoBlockHeaderH1 text='Грузоперевозки Астана-Семей' />
                    <MoNavLinker
                        text2="Грузоперевозки Астана-Семей"
                        link2="/gruzoperevozki-astana-semej"
                    />
                </div>
                <TplPage
                    title='О грузоперевозке по маршруту Астана - Семей'
                    text1='Компания Transline осуществляет грузоперевозки по маршруту Астана-Семей. Мы предоставляем комплексные услуги по перевозке грузов, включая организацию транспорта, погрузку и выгрузку, а также страхование грузов.'
                    text2='Мы имеем большой опыт работы с различными видами грузов и может предложить нашим клиентам наиболее эффективные решения для их перевозки. Работаем с каждым клиентом индивидуально и готовы предложить различные виды транспорта, включая автомобильный и железнодорожный транспорт.'
                    text3='Кроме того, мы гарантируем безопасность и сохранность грузов во время перевозки. Наша компания имеет все необходимые сертификаты и лицензии на проведение грузоперевозок, что гарантирует качество нашей работы.'
                    text4='Мы готовы предоставить нашим клиентам высокий уровень сервиса и обслуживания, а также своевременную и безопасную доставку их грузов на маршруте Астана-Семей. '
                />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default GruzoperevozkiAstanaSemej;