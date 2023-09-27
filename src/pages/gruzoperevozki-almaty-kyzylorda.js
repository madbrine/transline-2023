import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoHeaderV2 from "@/compnents/header-v2";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";


function GruzoperevozkiAlmatyKyzylorda() {
    return (
        <>
            <Head>
                <title>Грузоперевозки между Алматой и Кызылордой с Transline</title>
                <meta name="description" content="Transline предлагает профессиональные грузоперевозки по маршруту Алмата - Кызылорда. Надежная и быстрая доставка грузов наших клиентов - наш приоритет." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeaderV2 />
                <div className='tpl-margin-h'>
                    <MoBlockHeaderH1 text='Грузоперевозки Алматы-Кызылорда' />
                    <MoNavLinker
                        text2="Грузоперевозки Алматы-Кызылорда"
                        link2="/gruzoperevozki-almaty-kyzylorda"
                    />
                </div>
                <TplPage
                    title='О грузоперевозке по маршруту Алматы - Кызылорда'
                    text1='Компания Transline является опытным партнером в сфере грузоперевозок по маршруту Алматы-Кызылорда. Мы предлагаем надежные и эффективные услуги по перевозке грузов в любой точке Казахстана.'
                    text2='Наша компания обладает широким парком транспортных средств, оснащенных самыми современными технологиями. Наши профессиональные водители имеют большой опыт работы и хорошо знакомы с маршрутом Алматы-Кызылорда, что позволяет нам обеспечивать своевременную доставку груза в точку назначения.'
                    text3='Мы придерживаемся строгих стандартов безопасности и качества обслуживания.Transline гарантирует максимальную эффективность и надежность наших услуг грузоперевозки по маршруту Алматы-Кызылорда. '
                />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default GruzoperevozkiAlmatyKyzylorda;