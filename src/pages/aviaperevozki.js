import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoSubmitApplication from "@/compnents/submit-application";
import Head from "next/head";
import AviaperevozkiIntro from "@/compnents/perevozki-avia";

function Aviaperevozki() {
    return (
        <>
            <Head>
                <title>Transline</title>
                <meta name="description" content="Международные Авиа Перевозки до Казахстана и по всемум миру" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeader />
                <AviaperevozkiIntro />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default Aviaperevozki;