import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoSubmitApplication from "@/compnents/submit-application";
import Head from "next/head";
import KontaktyIntro from "@/compnents/kontakty-intro";

function Kontakty() {
    return (
        <>
            <Head>
                <title>Контакты Transline</title>
                <meta name="description" content="Контакты логистической компании компании" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeader />
                <KontaktyIntro />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default Kontakty;