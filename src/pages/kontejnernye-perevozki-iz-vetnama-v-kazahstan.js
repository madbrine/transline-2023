import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoHeaderV2 from "@/compnents/header-v2";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";


function KontejnernyePerevozkiIzVetnamaVKazahstan() {
    return (
        <>
            <Head>
                <title>Контейнерные перевозки из Вьетнама в Казахстан</title>
                <meta name="description" content="Контейнерные перевозки из Вьетнама в Казахстан" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeaderV2 />
                <div className='tpl-margin-h'>
                    <MoBlockHeaderH1 text='Контейнерные перевозки из Вьетнама в Казахстан' />
                    <MoNavLinker
                        text2="Контейнерные перевозки из Вьетнама в Казахстан"
                        link2="/kontejnernye-perevozki-iz-vetnama-v-kazahstan"
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
export default KontejnernyePerevozkiIzVetnamaVKazahstan;