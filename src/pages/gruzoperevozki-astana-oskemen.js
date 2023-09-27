import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoHeaderV2 from "@/compnents/header-v2";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";


function GruzoperevozkiAstanaOskemen() {
    return (
        <>
            <Head>
                <title>Грузоперевозки Астана-Оскемен</title>
                <meta name="description" content="Transline осуществляет грузоперевозки по маршруту Астана–Оскемен. Мы предоставляем широкий выбор транспорта для перевозки грузов любого размера и вида." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeaderV2 />
                <div className='tpl-margin-h'>
                    <MoBlockHeaderH1 text='Грузоперевозки Астана-Оскемен' />
                    <MoNavLinker
                        text2="Грузоперевозки Астана-Оскемен"
                        link2="/gruzoperevozki-astana-oskemen"
                    />
                </div>
                <TplPage
                    title='О грузоперевозке по маршруту Астана - Оскемен'
                    text1='Грузоперевозки по маршруту Астана-Оскемен требуют высокой организации и профессионализма со стороны перевозчика. Компания Transline обладает всем необходимым опытом и ресурсами для эффективной организации таких перевозок.'
                    text2='Наша компания также обеспечивает безопасность и сохранность грузов на протяжении всего пути следования. Мы проводим контроль температуры и влажности при необходимости, а также предоставляем страхование грузов.'
                    text3='Transline является надежным и профессиональным партнером для организации грузоперевозок на маршруте Астана-Оскемен. Мы гарантируем высокое качество сервиса и своевременную доставку грузов, что делает нас идеальным выбором для наших клиентов.'
                    text4='Если вы ищете надежного партнера для грузоперевозок на маршруте Астана-Оскемен, обращайтесь в компанию Transline. Мы готовы предоставить вам наиболее эффективное и безопасное решение для перевозки ваших грузов.'
                />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default GruzoperevozkiAstanaOskemen;