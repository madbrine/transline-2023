import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoOurServices from "@/compnents/our-services";
import CoService from "@/compnents/service";
import CoSubmitApplication from "@/compnents/submit-application";
import MoHeaderLink from "@/molecules/header-link";
import Head from "next/head";
import headerPhoto from '../assets/multimodal-cargo-header.webp';
import photo1 from '../assets/multimodal-cargo-1.webp';
import photo2 from '../assets/multimodal-cargo-2.webp';
import photo3 from '../assets/multimodal-cargo-3.webp';
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