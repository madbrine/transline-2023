import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";


function GruzoperevozkiVIran() {
    return (
        <>
            <Head>
                <title>Цены на грузоперевозки в Иран</title>
                <meta name="description" content="Компания Транслайн осуществляет перевозки грузов из Казахстана в Иран и из Ирана в Казахстан. Мы можем доставить груз как по жд так и авто." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeader />
                <div className='tpl-margin-h'>
                    <MoBlockHeaderH1 text='Грузоперевозки в Иран' />
                    <MoNavLinker
                        text2="Грузоперевозки в Иран"
                        link2="/gruzoperevozki-v-iran"
                    />
                </div>
                <TplPage
                    title='Особенности грузоперевозок в Иран'
                    text1='В последнее время заметным внешнеполитическим фактором, влияющим на транспортные сети Казахстана и в целом Центральной Азии, становится Исламская Республика Иран(ИРИ). В среднесрочной перспективе следует ожидать возростания региональной роли Ирана и увеличения грузопотоков. В частности Иран старается направить транзит товаров из Центральной Азии через свою территорию к портам Бендер-Аббас и Чахбехар и превратить их в транспортно-логистический хаб. В силу географического фактора Иран занимает важное стратегическое положение, являясь связующим звеном между странами Каспийского бассейна и Ближнего Востока, Кавказа, Южной и Центральной Азией.'
                    text2='Компания TRANSLINE видит перспективу развития грузопотоков по транспортным корридорам Север-Юг, Персидский залив-Черное море и по прямому железнодорожному маршруту Казахстан-Туркменистан-Иран-страны Персидского залива и активно формирует логистику в этом направлении.'
                    text3='TRANSLINE рассматривает Иран, как связующее звено между Центральной Азией и странами Ближнего Востока, Турцией, Европой и с учетом Иранского фактора строит стратегический план своего перспективного развития.'
                />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default GruzoperevozkiVIran;