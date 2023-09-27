import ArendaTehnikiIntro from "@/compnents/arenda-tehniki";
import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoHeaderV2 from "@/compnents/header-v2";
import CoSubmitApplication from "@/compnents/submit-application";
import Head from "next/head";


function ArendaSpecztehniki() {
    return (
        <>
            <Head>
                <title>Аренда спецтехники в Казахстане</title>
                <meta name="description" content="Спецтехника используется для перевозки военной, строительной, дорожной, коммунальной, горнодобывающей и сельскохозяйственной техники, негабаритных, сверхтяжелых и нестандартных грузов. Наша компания одна из первых в Казахстане, кто начал предоставлять такую услугу для клиентов." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeaderV2 />
                <ArendaTehnikiIntro />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default ArendaSpecztehniki;