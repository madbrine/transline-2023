import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import ServicesIntro from '@/compnents/services-intro';
import Head from "next/head";

function VidyPerevozok() {
    return (
        <>
            <Head>
                <title>Услуги Transline</title>
                <meta name="description" content="Услуги и виды перевозок" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeader />
                <ServicesIntro />
                <CoFooter />
            </main>
        </>
    )
}
export default VidyPerevozok;