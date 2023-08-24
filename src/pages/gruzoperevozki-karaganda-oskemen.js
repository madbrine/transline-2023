import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";


function GruzoperevozkiKaragandaOskemen() {
    return (
        <>
            <Head>
                <title>Грузоперевозки между Карагандой и Оскеменом с Transline</title>
                <meta name="description" content="Transline предлагает профессиональные грузоперевозки по маршруту Караганда-Оскемен. Надежная и быстрая доставка грузов наших клиентов - наш приоритет." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeader />
                <div className='tpl-margin-h'>
                    <MoBlockHeaderH1 text='Грузоперевозки Караганда-Оскемен (Усть-Каменогорск)' />
                    <MoNavLinker
                        text2="Грузоперевозки Караганда-Оскемен (Усть-Каменогорск)"
                        link2="/gruzoperevozki-karaganda-oskemen"
                    />
                </div>
                <TplPage
                    title='О грузоперевозке по маршруту Караганда-Оскемен (Усть-Каменогорск)'
                    text1='Компания Transline является лидером на рынке грузоперевозок в Казахстане и рада предложить своим клиентам услуги по перевозке грузов по маршруту Караганда-Оскемен (Усть-Каменогорск).'
                    text2='Этот маршрут является одним из наиболее востребованных среди наших клиентов, поскольку он связывает центральную часть Казахстана с Западным Казахстаном, где находится крупный промышленный регион.'
                    text3='Мы предлагаем нашим клиентам широкий выбор транспортных средств для грузоперевозок.Наш парк транспортных средств является современным и обеспечивает высокую надежность и безопасность нашим клиентам.'
                    text4='Мы понимаем, насколько важно для наших клиентов, чтобы их грузы были доставлены вовремя и в сохранности. Поэтому мы предоставляем максимально комфортные условия для перевозки грузов и обеспечиваем полный контроль над процессом перевозки.'
                    text5='Сотрудничество с нами – это не только гарантия качественной и надежной грузоперевозки, но и возможность получить индивидуальный подход к каждому клиенту и оптимальные условия сотрудничества. Мы готовы предложить нашим клиентам лучшие цены на грузоперевозки по маршруту Караганда-Оскемен (Усть-Каменогорск), а также обеспечить высокий уровень качества наших услуг.'
                />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default GruzoperevozkiKaragandaOskemen;