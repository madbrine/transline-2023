import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";


function GruzoperevozkiAstanaUralsk() {
    return (
        <>
            <Head>
                <title>Грузоперевозки между Астаной и Уральском с Transline</title>
                <meta name="description" content="Transline предлагает профессиональные грузоперевозки по маршруту Астана - Уральск. Надежная и быстрая доставка грузов наших клиентов - наш приоритет." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeader />
                <div className='tpl-margin-h'>
                    <MoBlockHeaderH1 text='Грузоперевозки Астана-Уральск' />
                    <MoNavLinker
                        text2="Грузоперевозки Астана-Уральск"
                        link2="/gruzoperevozki-astana-uralsk"
                    />
                </div>
                <TplPage
                    title='О грузоперевозке по маршруту Астана - Уральск'
                    text1='Грузоперевозки - это неотъемлемая часть любого бизнеса, связанного с производством, розничной торговлей и дистрибуцией. Компания Transline, одна из ведущих транспортных компаний в Казахстане, предлагает своим клиентам качественные и надежные услуги по перевозке грузов по международным и междугородним маршрутам.'
                    text2='Маршрут Астана-Уральск - один из самых важных маршрутов для транспортировки грузов в западном регионе Казахстана. Он связывает столицу страны с главным городом Западного Казахстана, расположенным на границе с Россией.'
                    text3='Один из главных принципов работы компании Transline - это индивидуальный подход к каждому клиенту. Компания предлагает своим клиентам широкий спектр услуг по грузоперевозкам, начиная от выбора оптимального маршрута и транспорта до организации погрузочных и выгрузочных работ.'
                    text4='Одним из самых важных аспектов грузоперевозок является безопасность груза. Компания Transline имеет все необходимые сертификаты и лицензии на проведение грузоперевозок и строго следит за соблюдением всех требований по безопасности и сохранности груза во время перевозки. Компания также предоставляет страхование грузов, что позволяет ее клиентам чувствовать себя уверенно и спокойно.'
                />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default GruzoperevozkiAstanaUralsk;