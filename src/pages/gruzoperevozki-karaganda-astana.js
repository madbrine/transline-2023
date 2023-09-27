import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoHeaderV2 from "@/compnents/header-v2";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";


function GruzoperevozkiKaragandaAstana() {
    return (
        <>
            <Head>
                <title>Грузоперевозки между Карагандой и Астаной с Transline</title>
                <meta name="description" content="Transline предлагает профессиональные грузоперевозки по маршруту Караганда-Астана. Надежная и быстрая доставка грузов наших клиентов - наш приоритет." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeaderV2 />
                <div className='tpl-margin-h'>
                    <MoBlockHeaderH1 text='Грузоперевозки Караганда-Астана' />
                    <MoNavLinker
                        text2="Грузоперевозки Караганда-Астана"
                        link2="/gruzoperevozki-karaganda-astana"
                    />
                </div>
                <TplPage
                    title='О грузоперевозке по маршруту Караганда-Астана'
                    text1='Компания Transline предлагает надежные и эффективные грузоперевозки по маршруту Караганда-Астана. Этот маршрут проходит через центральную часть Казахстана и связывает два крупнейших города страны.'
                    text2='Мы понимаем, что перевозка грузов по такому маршруту является ключевым звеном в логистической цепочке многих компаний. Поэтому мы предлагаем высококачественные услуги по доставке грузов в срок и с соблюдением всех необходимых требований.'
                    text3='Наши профессиональные водители имеют большой опыт работы и готовы к любым условиям дороги. Мы используем только современные грузовые автомобили, оборудованные всем необходимым для безопасной и надежной перевозки грузов.'
                    text4='Благодаря нашей профессиональной команде и современному парку грузовых автомобилей, мы можем гарантировать высокое качество наших услуг и своевременную доставку грузов в любую точку Казахстана.'
                />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default GruzoperevozkiKaragandaAstana;