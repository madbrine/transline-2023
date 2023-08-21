import CoAvtopark from "@/compnents/avtopark";
import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoOurServices from "@/compnents/our-services";
import CoSubmitApplication from "@/compnents/submit-application";
import Head from "next/head";

function Avtopark() {
    return (
        <>
            <Head>
                <title>Transline</title>
                <meta name="description" content="Самый большой автопарк в Центральной Азии" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeader />
                <CoAvtopark />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default Avtopark;