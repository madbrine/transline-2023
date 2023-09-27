import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoHeaderV2 from "@/compnents/header-v2";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";


function TentovyePerevozki() {
    return (
        <>
            <Head>
                <title>Изотермические грузоперевозки по Казахстану</title>
                <meta name="description" content="Грузовики с изотермическим фургоном (с постоянной внутренней температурой) предназначены для перевозки пищевых продуктов, медицинских препаратов и химических реагентов на ближние и средние расстояния." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeaderV2 />
                <div className='tpl-margin-h'>
                    <MoBlockHeaderH1 text='Изотермические грузоперевозки' />
                    <MoNavLinker
                        text2="Изотермические грузоперевозки"
                        link2="/izotermicheskie-perevozki"
                    />
                </div>
                <TplPage
                    title='Особенности изотермических грузоперевозок'
                    text1='Компания TRANSLINE предлагает перевозки с применением изотермических фургонов по всей территории Казахстана и за его пределы. Благодаря особой конструкции, изотерма, подобно термосу, сохраняет внутри постоянную температуру и влажность, что позволяет ее использовать для транспортировки скоропортящихся грузов, а так же пищевых, медицинских и химических товаров, требующих особых условий перевозки. На небольших расстояниях такой вид транспортировки заменяет рефрижераторные перевозки.'
                    text2='В нашем парке имеются изотермы разного объема и грузоподъемностью от 600 килограмм до 20 тонн, что позволяет выбирать габариты автомобиля в соответствии с объемом поставки, не переплачивая лишних денег.'
                    text3='Получить консультационную поддержку по вопросу заказа и использования изотермических фургонов, а так же сделать заказ вы можете по одному из наших телефонов или заполнив онлайн-заявку на нашем сайте.'
                />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default TentovyePerevozki;