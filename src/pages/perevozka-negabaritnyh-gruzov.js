import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import NegabaritnyeIntro from "@/compnents/perevozki-negabaritnye";
import CoSubmitApplication from "@/compnents/submit-application";
import Head from "next/head";


function NegabaritnyeGruzoperevozki() {
    return (
        <>
            <Head>
                <title>Перевозка негабаритного груза по Казахстану и СНГ</title>
                <meta name="description" content="Специализированная логистическая компания предлагает профессиональные решения для перевозки негабаритных грузов в Казахстане и СНГ. Наш опыт и экспертиза позволяют эффективно организовать перевозку грузов любых размеров и характеристик, обеспечивая их безопасность и надежность доставки." />
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