import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import NegabaritnyeIntro from "@/compnents/perevozki-negabaritnye";
import CoSubmitApplication from "@/compnents/submit-application";
import Head from "next/head";


function NegabaritnyeGruzoperevozki() {
    return (
        <>
            <Head>
                <title>Transline</title>
                <meta name="description" content="Перевозка негабаритного груза" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeader />
                <NegabaritnyeIntro />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default NegabaritnyeGruzoperevozki;