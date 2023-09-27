import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoHeaderV2 from "@/compnents/header-v2";
import MultimodalnyeIntro from "@/compnents/perevozki-multimodalnye";
import CoSubmitApplication from "@/compnents/submit-application";
import Head from "next/head";


function MultimodalnyeGruzoperevozki() {
    return (
        <>
            <Head>
                <title>Мультимодальные перевозки. Китай, Индия, Юговосточная Азия</title>
                <meta name="description" content="Мы осуществляем междунородные мультимодальные перевозки по Восточной Азии, Индии, Пакистану, Ирану и Афганистану. Так же у нас доступны перевозки с Юговосточной Азии, Индонезии, Малайзии, Филлипинов, Австралии и Новой Зеландии " />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeaderV2 />
                <MultimodalnyeIntro />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default MultimodalnyeGruzoperevozki;