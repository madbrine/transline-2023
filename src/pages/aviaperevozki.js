import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoSubmitApplication from "@/compnents/submit-application";
import Head from "next/head";
import AviaperevozkiIntro from "@/compnents/perevozki-avia";

function Aviaperevozki() {
    return (
        <>
            <Head>
                <title>Международные Авиа Перевозки до Казахстана и по всему миру</title>
                <meta name="description" content="Эффективные международные авиаперевозки до Казахстана и во все уголки мира от опытной логистической компании. Мы предлагаем надежное и оперативное решение для быстрой доставки грузов в любую точку планеты." />
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