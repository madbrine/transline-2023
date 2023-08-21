import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoSubmitApplication from "@/compnents/submit-application";
import ZheleznodorozhnyeIntro from "@/compnents/perevozki-zheleznodorozhnye";
import Head from "next/head";


export default function ZheleznodorozhnyePerevozki() {
    return (
        <>
            <Head>
                <title>Железнодорожные перевозки Казахстан Китай</title>
                <meta name="description" content="Trabsline - ведущая логистическая компания в Центральной Азии. Мы перевозим груз с Китая в Казахстан по наиболее конкурентно спомобным ценам" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeader />
                <ZheleznodorozhnyeIntro />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}