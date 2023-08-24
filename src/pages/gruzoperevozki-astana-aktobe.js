import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";


function GruzoperevozkiAstanaAktobe() {
    return (
        <>
            <Head>
                <title>Грузоперевозки Астана-Актобе | TRANSLINE</title>
                <meta name="description" content="Transline осуществляет грузоперевозки по городам  Казахстана. Мы предоставляем широкий выбор транспорта для перевозки грузов любого размера и вида." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeader />
                <div className='tpl-margin-h'>
                    <MoBlockHeaderH1 text='Грузоперевозки Астана-Актобе' />
                    <MoNavLinker
                        text2="Грузоперевозки Астана-Актобе"
                        link2="/gruzoperevozki-astana-aktobe"
                    />
                </div>
                <TplPage
                    title='О грузоперевозке по маршруту Астана-Актобе'
                    text1='Transline предоставляет услуги по доставке грузов на направлении Астана – Актобе. Мы гарантируем быструю и надежную доставку ваших грузов в любой точке маршрута, используя для этого широкий выбор транспортных средств различных размеров и типов.'
                    text2='Мы понимаем, что каждый груз имеет свои особенности и требования, поэтому наш автопарк включает в себя различные виды транспорта, такие как фургоны, рефрижераторы, контейнеровозы и другие, которые позволяют перевозить грузы различного типа и размера.'
                    text3='Наша компания гордится своим опытом и профессионализмом в организации перевозок грузов. Мы предоставляем услуги на высоком уровне, что гарантирует безопасную и своевременную доставку грузов в любую точку. Мы заботимся о каждом грузе, который нам доверяют, и предоставляем грузоперевозки на самом высоком уровне.'
                    text4='Если вы ищете надежную компанию для доставки ваших грузов по направлению Астана – Актобе, обратитесь к нам. Наши специалисты готовы помочь вам в выборе оптимального варианта перевозки грузов, а наши опытные водители и логисты обеспечат своевременную доставку вашего груза в идеальном состоянии. Свяжитесь с нами и убедитесь в качестве наших услуг!'
                />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default GruzoperevozkiAstanaAktobe;