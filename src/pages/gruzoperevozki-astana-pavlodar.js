import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoHeaderV2 from "@/compnents/header-v2";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";


function GruzoperevozkiAstanaPavlodar() {
    return (
        <>
            <Head>
                <title>Грузоперевозки между Астаной и Павлодаром с Transline</title>
                <meta name="description" content="Transline предлагает профессиональные грузоперевозки по маршруту Астана - Павлодар. Надежная и быстрая доставка грузов наших клиентов - наш приоритет." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeaderV2 />
                <div className='tpl-margin-h'>
                    <MoBlockHeaderH1 text='Грузоперевозки Астана-Павлодар' />
                    <MoNavLinker
                        text2="Грузоперевозки Астана-Павлодар"
                        link2="/gruzoperevozki-astana-pavlodar"
                    />
                </div>
                <TplPage
                    title='О грузоперевозке по маршруту Астана - Павлодар'
                    text1='Транспортная компания Transline предлагает полный спектр услуг по грузоперевозкам по маршруту Астана-Павлодар. Мы работаем с различными видами грузов и предлагаем оптимальные решения для каждого клиента в зависимости от их потребностей.'
                    text2='Наша компания имеет большой опыт работы в сфере грузоперевозок и обладает современным автопарком, оснащенным всем необходимым оборудованием для перевозки различных видов грузов, включая сыпучие, жидкие и опасные грузы. Наша команда профессионалов готова предоставить экспертную консультацию и помощь в выборе наиболее подходящего транспортного решения для вашего груза.'
                    text3='Безопасность груза и клиента – наша главная ценность. Мы строго соблюдаем все требования и нормы перевозки грузов, включая требования по страхованию и безопасности груза. Наша компания также осуществляет контроль качества и безопасности каждой перевозки, чтобы гарантировать, что ваш груз будет доставлен вовремя и в безопасности.'
                />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default GruzoperevozkiAstanaPavlodar;