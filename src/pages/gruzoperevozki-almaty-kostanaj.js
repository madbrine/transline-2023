import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoHeaderV2 from "@/compnents/header-v2";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";


function GruzoperevozkiAlmatyKostanaj() {
    return (
        <>
            <Head>
                <title>Грузоперевозки между Алматой и Костанаем с Transline</title>
                <meta name="description" content="Transline предлагает профессиональные грузоперевозки по маршруту Алмата - Костанай. Надежная и быстрая доставка грузов наших клиентов - наш приоритет." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeaderV2 />
                <div className='tpl-margin-h'>
                    <MoBlockHeaderH1 text='Грузоперевозки Алматы-Костанай' />
                    <MoNavLinker
                        text2="Грузоперевозки Алматы-Костанай"
                        link2="/gruzoperevozki-almaty-kostanaj"
                    />
                </div>
                <TplPage
                    title='О грузоперевозке по маршруту Алматы - Костанай'
                    text1='Компания Transline предоставляет услуги грузоперевозки по маршруту Алматы-Костанай. Наша компания специализируется на оказании высококачественных и надежных услуг грузоперевозки в Казахстане.'
                    text2='Мы предлагаем гибкую и индивидуальную систему тарифов, чтобы удовлетворить потребности каждого клиента. Наша компания оснащена самыми современными транспортными средствами, что гарантирует сохранность и своевременность доставки груза.'
                    text3='Наши опытные водители имеют большой опыт работы и проходят обучение по безопасности и правилам дорожного движения. Они следят за грузом на всем протяжении маршрута и предоставляют ежедневные отчеты о состоянии груза и времени доставки.'
                    text4='Наша компания стремится обеспечить максимальный комфорт и удобство для наших клиентов. Мы предоставляем услуги по упаковке, погрузке и выгрузке груза, а также организуем доставку "от двери до двери".'
                    text5='Если вам нужна надежная компания для грузоперевозки по маршруту Алматы-Костанай, обратитесь в Transline. Мы обеспечим своевременную и безопасную доставку вашего груза в любую точку Казахстана.'
                />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default GruzoperevozkiAlmatyKostanaj;