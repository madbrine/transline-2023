import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";


function GruzoperevozkiAstanaKokshetau() {
    return (
        <>
            <Head>
                <title>Грузоперевозки между Астаной и Кокшетау c Transline</title>
                <meta name="description" content="Transline предлагает профессиональные грузоперевозки по маршруту Астаной - Кокшетау. Надежная и быстрая доставка грузов наших клиентов - наш приоритет." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeader />
                <div className='tpl-margin-h'>
                    <MoBlockHeaderH1 text='Грузоперевозки Астана-Кокшетау' />
                    <MoNavLinker
                        text2="Грузоперевозки Астана-Кокшетау"
                        link2="/gruzoperevozki-astana-kokshetau"
                    />
                </div>
                <TplPage
                    title='О грузоперевозке по маршруту Астана-Кокшетау'
                    text1='Компания Transline предлагает своим клиентам надежные и высококачественные услуги по грузоперевозке по маршруту Астана-Кокшетау.'
                    text2='Мы предлагаем грузоперевозки любой сложности и объема на этом маршруте, используя для этого современный парк транспортных средств и опытных водителей. Мы предоставляем различные виды транспорта для грузоперевозок, включая фуры, контейнеровозы и платформы.'
                    text3='Мы понимаем, насколько важно для наших клиентов, чтобы их грузы были доставлены вовремя и в сохранности. Поэтому мы предлагаем максимально комфортные условия для перевозки грузов, обеспечивая надежность и безопасность наших услуг.'
                    text4='Наша компания имеет богатый опыт в области грузоперевозок и всегда готова предложить оптимальные решения и наилучшие цены на перевозку грузов по маршруту Астана-Кокшетау. Мы гарантируем профессиональный подход к каждому клиенту, учет его потребностей и желаний, а также гибкость в условиях сотрудничества.'
                    text5='Сотрудничество с компанией Transline – это не только высококачественная грузоперевозка, но и индивидуальный подход к каждому клиенту, надежность и безопасность наших услуг, а также оперативность и профессионализм в работе. Мы готовы предоставить нашим клиентам лучшие условия для перевозки грузов по маршруту Астана-Кокшетау.'
                />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default GruzoperevozkiAstanaKokshetau;