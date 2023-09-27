import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoHeaderV2 from "@/compnents/header-v2";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";


function GruzoperevozkiKaragandaTaraz() {
    return (
        <>
            <Head>
                <title>Грузоперевозки между Карагандой и Таразом с Transline</title>
                <meta name="description" content="Transline предлагает профессиональные грузоперевозки по маршруту Караганда-Тараз. Надежная и быстрая доставка грузов наших клиентов - наш приоритет." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeaderV2 />
                <div className='tpl-margin-h'>
                    <MoBlockHeaderH1 text='Грузоперевозки Караганда-Тараз' />
                    <MoNavLinker
                        text2="Грузоперевозки Караганда-Тараз"
                        link2="/gruzoperevozki-karaganda-taraz"
                    />
                </div>
                <TplPage
                    title='О грузоперевозке по маршруту Караганда-Тараз'
                    text1='Компания Transline рада предложить своим клиентам качественные услуги по грузоперевозке на маршруте Караганда-Тараз. Мы предоставляем грузоперевозки любого объема и уровня сложности на этом маршруте, используя современный транспортный парк и опытных водителей.'
                    text2='Наша компания придает большое значение своей репутации, поэтому мы стремимся предоставлять максимально комфортные условия для перевозки грузов и обеспечивать надежность и безопасность наших услуг.'
                    text3='Компания Transline всегда старается обеспечить своих клиентов оптимальными решениями и наилучшими ценами на грузоперевозки. Мы готовы предоставить индивидуальный подход к каждому клиенту и гибкие условия сотрудничества, учитывая потребности и желания каждого. Сотрудничество с нами – это не только качественная и надежная грузоперевозка, но и уверенность в том, что ваши грузы будут доставлены вовремя и в сохранности.'
                />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default GruzoperevozkiKaragandaTaraz;