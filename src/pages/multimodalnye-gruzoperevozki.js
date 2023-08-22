import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import MultimodalnyeIntro from "@/compnents/perevozki-multimodalnye";
import CoSubmitApplication from "@/compnents/submit-application";
import Head from "next/head";


function MultimodalnyeGruzoperevozki() {
    return (
        <>
            <Head>
                <title>Transline</title>
                <meta name="description" content="Мультимодальные перевозки Китай Индия Япония Корея Юговосточная Азия" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeader />
                <MultimodalnyeIntro />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default MultimodalnyeGruzoperevozki;