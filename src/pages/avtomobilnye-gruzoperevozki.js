import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoSubmitApplication from "@/compnents/submit-application";
import Head from "next/head";
import AvtoperevozkiIntro from "@/compnents/perevozki-avto";

function AvtomobilnyeGruzoperevozki() {
    return (
        <>
            <Head>
                <title>Автомобильные грузоперевозки по Казахстану и СНГ. Грузоперевозки Казахстан Россия</title>
                <meta name="description" content="Автомобильные грузоперевозки по Казахстану и СНГ. Грузоперевозки Казахстан Россия" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeader />
                <AvtoperevozkiIntro />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default AvtomobilnyeGruzoperevozki;