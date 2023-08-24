import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";


function GruzoperevozkiAstanaAtyrau() {
    return (
        <>
            <Head>
                <title>Грузоперевозки между Астаной и Атырау с Transline</title>
                <meta name="description" content="Transline предлагает профессиональные грузоперевозки по маршруту Астана - Атырау. Надежная и быстрая доставка грузов наших клиентов - наш приоритет." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeader />
                <div className='tpl-margin-h'>
                    <MoBlockHeaderH1 text='Грузоперевозки Астана-Атырау' />
                    <MoNavLinker
                        text2="Грузоперевозки Астана-Атырау"
                        link2="/gruzoperevozki-astana-atyrau"
                    />
                </div>
                <TplPage
                    title='О грузоперевозке по маршруту Астана-Атырау'
                    text1='Компания Transline имеет многолетний опыт работы в сфере грузоперевозок и предоставляет клиентам качественные услуги, ориентированные на их индивидуальные потребности. Перевозки по маршруту Астана-Атырау осуществляются в соответствии с высокими стандартами безопасности и качества, что обеспечивает сохранность грузов на протяжении всего пути следования.'
                    text2='Мы обеспечивает полный комплекс услуг по грузоперевозкам, включая организацию складских услуг, страхование грузов, таможенное оформление и многое другое. Это позволяет клиентам компании снизить свои затраты на логистику и повысить эффективность своего бизнеса.'
                    text3='Наша компания готова предоставить своим клиентам высококачественные услуги по грузоперевозкам по маршруту Астана-Атырау, а также по всей территории Казахстана и за ее пределами. Все услуги компании оказываются на высоком профессиональном уровне, что позволяет ей занимать лидирующие позиции в отрасли грузоперевозок.'
                />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default GruzoperevozkiAstanaAtyrau;