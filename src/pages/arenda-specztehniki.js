import ArendaTehnikiIntro from "@/compnents/arenda-tehniki";
import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoSubmitApplication from "@/compnents/submit-application";
import Head from "next/head";


function ArendaSpecztehniki() {
    return (
        <>
            <Head>
                <title>Transline</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeader />
                <ArendaTehnikiIntro />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default ArendaSpecztehniki;