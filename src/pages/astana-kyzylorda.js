import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";


function AstanaKyzylorda() {
    return (
        <>
            <Head>
                <title>Грузоперевозки между Астаной и Кызылордой с Transline</title>
                <meta name="description" content="Transline предлагает профессиональные грузоперевозки по маршруту Астана - Кызылорда. Надежная и быстрая доставка грузов наших клиентов - наш приоритет." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeader />
                <div className='tpl-margin-h'>
                    <MoBlockHeaderH1 text='Грузоперевозки Астана-Кызылорда' />
                    <MoNavLinker
                        text2="Грузоперевозки Астана-Кызылорда"
                        link2="/astana-kyzylorda"
                    />
                </div>
                <TplPage
                    title='О грузоперевозке по маршруту Астана-Кызылорда'
                    text1='Транспортная компания Transline – ваш надежный партнер по грузоперевозкам по маршруту Астана-Кызылорда. Мы предлагаем профессиональные и надежные услуги по транспортировке грузов, обеспечивая безопасную и эффективную доставку вашего груза в указанные сроки.'
                    text2='Наш автопарк состоит из современных автомобилей, оборудованных специальным оборудованием для перевозки различных грузов, включая крупногабаритные и опасные грузы. Все наши водители прошли специальное обучение и имеют богатый опыт работы, что гарантирует профессиональный подход к выполнению грузоперевозок.'
                    text3='Безопасность вашего груза – наш приоритет. Мы строго соблюдаем все правила и нормы перевозки грузов, включая требования по безопасности и страхованию грузов. В случае возникновения каких-либо проблем или вопросов, наши специалисты готовы оказать оперативную поддержку и решить любые возникающие вопросы.'
                />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default AstanaKyzylorda;