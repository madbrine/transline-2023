import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoOurServices from "@/compnents/our-services";
import CoSubmitApplication from "@/compnents/submit-application";
import MoHeaderLink from "@/molecules/header-link";
import Head from "next/head";
import KontaktyIntro from "@/compnents/kontakty-intro";

function Kontakty() {
    return (
        <>
            <Head>
                <title>Transline</title>
                <meta name="description" content="Контакты компании" />
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