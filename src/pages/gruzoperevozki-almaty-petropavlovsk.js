import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";


function GruzoperevozkiAlmatyPetropavlovsk() {
    return (
        <>
            <Head>
                <title>Грузоперевозки между Алматой и Петропавловском с Transline</title>
                <meta name="description" content="Transline предлагает профессиональные грузоперевозки по маршруту Алмата - Петропавловск. Надежная и быстрая доставка грузов наших клиентов - наш приоритет." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeader />
                <div className='tpl-margin-h'>
                    <MoBlockHeaderH1 text='Грузоперевозки Алматы-Петропавловск' />
                    <MoNavLinker
                        text2="Грузоперевозки Алматы-Петропавловск"
                        link2="/gruzoperevozki-almaty-petropavlovsk"
                    />
                </div>
                <TplPage
                    title='О грузоперевозке по маршруту Алматы - Петропавловск'
                    text1='Компания Transline является профессионалом в сфере грузоперевозок по всей территории Казахстана, и мы предлагаем надежные и эффективные услуги по перевозке грузов по маршруту Алматы-Петропавловск.'
                    text2='Мы осуществляем грузоперевозки на собственном транспорте, что позволяет нам обеспечить своевременную и надежную доставку груза в любую точку назначения. Наша команда профессионалов всегда готова предоставить высококачественные услуги нашим клиентам и гарантировать сохранность груза на каждом этапе перевозки.'
                    text3='Наша компания готова предоставить перевозку грузов любого вида, включая негабаритные, с использованием современного оборудования и технологий. Мы также предлагаем гибкую систему тарифов и персональный подход к каждому заказчику.'
                    text4='Наши профессиональные водители имеют большой опыт работы и знакомы с маршрутом, что гарантирует безопасную доставку груза в целости и сохранности.'
                    text5='Если вам нужна надежная компания для грузоперевозки по маршруту Алматы-Петропавловск, обращайтесь в Transline. Мы гарантируем высокий уровень качества наших услуг и предоставляем своим клиентам надежность, безопасность и комфорт.'
                />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default GruzoperevozkiAlmatyPetropavlovsk;