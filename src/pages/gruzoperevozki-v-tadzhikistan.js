import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoHeaderV2 from "@/compnents/header-v2";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";


function GruzoperevozkiVTadzhikistan() {
    return (
        <>
            <Head>
                <title>Грузоперевозки в Таджикистан из Казахстана</title>
                <meta name="description" content="Поскольку, казахстанско-таджикские торгово-экономические отношения, развиваются стремительными темпами, наша компания уже подготовила несколько логистических наработок. Разработанные схемы грузоперевозки в Таджикистан из Казахстана, позволяют нашим клиентам снизить логистические затраты и свести финансовые риски к минимуму." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeaderV2 />
                <div className='tpl-margin-h'>
                    <MoBlockHeaderH1 text='Грузоперевозки в Таджикистан' />
                    <MoNavLinker
                        text2="Грузоперевозки в Таджикистан"
                        link2="/gruzoperevozki-v-tadzhikistan"
                    />
                </div>
                <TplPage
                    title='Подробная информация о грузоперевозках в Таджикистан'
                    text1='В настоящее время сравнительно успешно и динамично развиваются казахстанско-таджикские торгово-экономические отношения. Казахстанские инвестиционные компании и фонды получили официальную поддержку со стороны таджикского Правительства и готовы вкладывать средства в совместные транспортно-логистические проекты и инфраструктуру. В Центральной Азии компания TRANSLINE совместно с таджикскими транспортно-логистическими компаниями и Ассоциациями, реализует проект по созданию "Единого информационно-координационного центра".'
                    text2='Таджикистан и Казахстан находятся на перекрестке ключевых транспортных коридоров Евразии , сняв ограничения на приграничных пунктах пропуска, сократив время доставки грузов и издержки в пути следования, для автотранспортных перевозок, будут созданы благоприятные условия для развития региональной торговли и повышения транзитного потенциала стран Центральной Азии.'
                />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default GruzoperevozkiVTadzhikistan;