import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoHeaderV2 from "@/compnents/header-v2";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";


function GruzoperevozkiAstanaOksemen() {
    return (
        <>
            <Head>
                <title>Грузоперевозки между Астаной и Оксеменом с Transline</title>
                <meta name="description" content="Transline предлагает профессиональные грузоперевозки по маршруту Астана - Оскемен (Усть-Каменогорск). Надежная и быстрая доставка грузов наших клиентов - наш приоритет." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeaderV2 />
                <div className='tpl-margin-h'>
                    <MoBlockHeaderH1 text='Грузоперевозки Астана - Оскемен (Усть-Каменогорск)' />
                    <MoNavLinker
                        text2="Грузоперевозки Астана - Оскемен (Усть-Каменогорск)"
                        link2="/gruzoperevozki-astana-oksemen"
                    />
                </div>
                <TplPage
                    title='О грузоперевозке по маршруту Астана-Оскемен (Усть-Каменогорск)'
                    text1='Компания Transline  предлагает профессиональные услуги грузоперевозки по маршруту Астана-Оскемен. Этот маршрут является одним из наиболее важных для наших клиентов, поскольку он связывает два важных города Казахстана, расположенных на востоке страны.'
                    text2='Мы предоставляем услуги грузоперевозки различной сложности и объема, используя для этого только современную технику и опытных водителей. Наш парк транспортных средств включает в себя различные виды транспорта для грузоперевозок, такие как фуры, контейнеровозы и платформы.'
                    text3='Мы понимаем, насколько важно для наших клиентов, чтобы их грузы были доставлены вовремя и в сохранности. Поэтому мы предлагаем максимально комфортные условия для перевозки грузов, обеспечивая надежность и безопасность наших услуг.'
                    text4='Сотрудничество с нами - это гарантия высококачественной грузоперевозки и индивидуального подхода к каждому клиенту, учета его потребностей и желаний. Мы всегда готовы предложить оптимальные решения и наилучшие цены на грузоперевозки по маршруту Астана-Оскемен.'
                    text5='Выбрав нашу компанию, вы можете быть уверены в качественной и надежной грузоперевозке, а также получить профессиональную консультацию наших экспертов. Сделайте выбор в пользу компании Transline и получите оптимальный сервис по грузоперевозке!'
                />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default GruzoperevozkiAstanaOksemen;