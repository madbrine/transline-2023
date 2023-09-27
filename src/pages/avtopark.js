import CoAvtopark from "@/compnents/avtopark";
import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoHeaderV2 from "@/compnents/header-v2";
import CoSubmitApplication from "@/compnents/submit-application";
import Head from "next/head";

function Avtopark() {
    return (
        <>
            <Head>
                <title>Перевозки по Казахстану и СНГ. Самый большой автопарк в Центральной Азии</title>
                <meta name="description" content="В нашем автопарке только современные авто. Вы всегда можете заказать фуру тент, бортовую, рефрижератор, трал для перевозки негабаритных грузов, или вагоны в случае перевозки по жд." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeaderV2 />
                <CoAvtopark />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default Avtopark;