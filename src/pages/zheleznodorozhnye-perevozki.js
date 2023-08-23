import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoSubmitApplication from "@/compnents/submit-application";
import ZheleznodorozhnyeIntro from "@/compnents/perevozki-zheleznodorozhnye";
import Head from "next/head";


export default function ZheleznodorozhnyePerevozki() {
    return (
        <>
            <Head>
                <title>Железнодорожные перевозки по Казахстану и международные грузоперевозки</title>
                <meta name="description" content="В нашей компании создан специальный отдел, который занимается исключительно железнодороджными перевозками. В комплекс услуг, кроме организации данной услуги, входит, также, страхование груза, погрузка/разгрузка, а, при необходимости, и кросс-докинг." />
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