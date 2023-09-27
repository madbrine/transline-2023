import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoHeaderV2 from "@/compnents/header-v2";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";


function ArendaAvtokranaVKazahstane() {
    return (
        <>
            <Head>
                <title>Аренда автокрана в Казахстане</title>
                <meta name="description" content="Если Вам необходим автокран в аренду, то Вы можете взять его в аренду в нашей компании или у наших партнеров. Они применяются при строительных работах или погрузке/разгрузке крупногабаритных или тяжеловесных грузов." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeaderV2 />
                <div className='tpl-margin-h'>
                    <MoBlockHeaderH1 text='Аренда автокрана' />
                    <MoNavLinker
                        text2="Аренда автокрана"
                        link2="/arenda-avtokrana-v-kazahstane"
                    />
                </div>
                <TplPage
                    title='Автокраны'
                    text1='Автокраны представляют собой грузовые автоплатформы с оборудованным на них башенно-стреловым оборудованием. Они широко применяются при строительных работах, монтаже различного оборудования, а так же для погрузки и разгрузки. В отличие от манипуляторов обладают меньшей маневренностью, но большей грузоподъемностью, потому используются в основном при работе с крупногабаритными грузами.'
                    text2='Если Вам необходим автокран в аренду, то Вы можете взять его в аренду в нашей компании или у наших партнеров. Они применяются при строительных работах или погрузке/разгрузке крупногабаритных или тяжеловесных грузов.'     
                />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default ArendaAvtokranaVKazahstane;