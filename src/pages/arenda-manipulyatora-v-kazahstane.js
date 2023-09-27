import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoHeaderV2 from "@/compnents/header-v2";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";


function ArendaManipulyatoraVKazahstane() {
    return (
        <>
            <Head>
                <title>Аренда манипулятора в Казахстане</title>
                <meta name="description" content="Манипуляторы представляют собой спецтехнику с установленным на ней грузоподъемным устройством, которое собственно и является манипулятором. Они предназначены в первую очередь для погрузочно-разгрузочных работ, но могут так же использоваться в дорожно-строительных работах, сельском хозяйстве и коммунальными службами. Манипуляторы незаменимы при оказании комплексных услуг – погрузка-разгрузка + доставка." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeaderV2 />
                <div className='tpl-margin-h'>
                    <MoBlockHeaderH1 text='Аренда манипулятора' />
                    <MoNavLinker
                        text2="Аренда манипулятора"
                        link2="/arenda-manipulyatora-v-kazahstane"
                    />
                </div>
                <TplPage
                    title='Манипуляторы'
                    text1='Манипуляторы представляют собой спецтехнику с установленным на ней грузоподъемным устройством, которое собственно и является манипулятором. Они предназначены в первую очередь для погрузочно-разгрузочных работ, но могут так же использоваться в дорожно-строительных работах, сельском хозяйстве и коммунальными службами. Манипуляторы незаменимы при оказании комплексных услуг – погрузка-разгрузка + доставка.'
                />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default ArendaManipulyatoraVKazahstane;