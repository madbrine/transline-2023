import ArendaTehnikiIntro from "@/compnents/arenda-tehniki";
import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoSubmitApplication from "@/compnents/submit-application";
import Head from "next/head";


function ArendaSpecztehniki() {
    return (
        <>
            <Head>
                <title>Аренда спецтехники по всему Казахстану. Самосвалы, краны.</title>
                <meta name="description" content="Ваш надежный партнер по аренде спецтехники в Казахстане. Предоставляем самосвалы и краны для разнообразных задач. Гарантируем надежность, гибкость и качество услуг по всей территории страны." />
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