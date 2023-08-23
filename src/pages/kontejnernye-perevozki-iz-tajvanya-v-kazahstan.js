import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";


function KontejnernyePerevozkiIzTajvanyaVKazahstan() {
    return (
        <>
            <Head>
                <title>Контейнерные перевозки из Тайваня в Казахстан</title>
                <meta name="description" content="Контейнерные перевозки из Тайваня в Казахстан" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeader />
                <div className='tpl-margin-h'>
                    <MoBlockHeaderH1 text='Контейнерные перевозки из Тайваня в Казахстан' />
                    <MoNavLinker
                        text2="Контейнерные перевозки из Тайваня в Казахстан"
                        link2="/kontejnernye-perevozki-iz-tajvanya-v-kazahstan"
                    />
                </div>
                <TplPage
                    title='Особенности контейнерных перевозок'
                    text1='Перевозка грузов в контейнерах осуществаляется, как правило, по железной дороге или морским грузовым транспортом. Очень часто их используют при мультимодальных перевозках и обладают следующими преимуществами: стоимость при перевозке на большие расстояния ниже чем на грузовом автомобиле; контейнер более надежно защищает от внешних погодных факторов; при необходимости комбинирования нескольких видов транспортов, погрузка/разгрузка занимает не столько много времени, как, если бы потребовалось осуществлять перекладку груза из одного транспорта в другой.'
                />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default KontejnernyePerevozkiIzTajvanyaVKazahstan;