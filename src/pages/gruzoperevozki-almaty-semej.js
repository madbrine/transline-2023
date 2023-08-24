import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";


function GruzoperevozkiAlmatySemej() {
    return (
        <>
            <Head>
                <title>Грузоперевозки между Алматой и Семей с Transline</title>
                <meta name="description" content="Transline предлагает профессиональные грузоперевозки по маршруту Алмата - Семей. Надежная и быстрая доставка грузов наших клиентов - наш приоритет." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeader />
                <div className='tpl-margin-h'>
                    <MoBlockHeaderH1 text='Грузоперевозки Алматы-Семей' />
                    <MoNavLinker
                        text2="Грузоперевозки Алматы-Семей"
                        link2="/gruzoperevozki-almaty-semej"
                    />
                </div>
                <TplPage
                    title='О грузоперевозке по маршруту Алматы - Семей'
                    text1='Компания Transline - ваш надежный партнер в грузоперевозках по маршруту Алматы - Семей. Наша компания предоставляет качественные услуги по перевозке грузов любого объема и вида, включая негабаритные и опасные грузы. Транспортный парк Transline оснащен современными автомобилями, оборудованными всем необходимым для безопасной и быстрой доставки груза.'
                    text2='Наши профессиональные водители обладают большим опытом работы и знакомы с маршрутом Алматы-Семей, что позволяет гарантировать безопасность и сохранность вашего груза на протяжении всего пути следования. В компании Transline также предоставляются ежедневные отчеты о статусе груза и его местонахождении в режиме реального времени, что позволяет контролировать процесс перевозки и убедиться в его эффективности.'
                    text3='Если вам нужна надежная компания для грузоперевозок по маршруту Алматы - Семей, обращайтесь в Transline. В нашей компании гарантируется высокий уровень качества услуг и предоставляется надежность, безопасность и комфорт.'
                />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default GruzoperevozkiAlmatySemej;