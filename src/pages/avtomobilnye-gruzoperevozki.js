import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoSubmitApplication from "@/compnents/submit-application";
import Head from "next/head";
import AvtoperevozkiIntro from "@/compnents/perevozki-avto";
import CoHeaderV2 from "@/compnents/header-v2";

function AvtomobilnyeGruzoperevozki() {
    return (
        <>
            <Head>
                <title>Автомобильные грузоперевозки по Казахстану и СНГ</title>
                <meta name="description" content="Автомобильные грузоперевозки по Казахстану и СНГ. У нас самый большой автопарк в Центральной Азии. Мы так же осуществляем авто перевозки с Пакистана Ирана и Афганистана" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeaderV2 />
                <AvtoperevozkiIntro />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default AvtomobilnyeGruzoperevozki;