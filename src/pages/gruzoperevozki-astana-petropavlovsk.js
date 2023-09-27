import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoHeaderV2 from "@/compnents/header-v2";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";


function GruzoperevozkiAstanaPetropavlovsk() {
    return (
        <>
            <Head>
                <title>Грузоперевозки между Астаной и Петропавловском с Transline</title>
                <meta name="description" content="Transline предлагает профессиональные грузоперевозки по маршруту Астана - Петропавловск. Надежная и быстрая доставка грузов наших клиентов - наш приоритет." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeaderV2 />
                <div className='tpl-margin-h'>
                    <MoBlockHeaderH1 text='Грузоперевозки Астана-Петропавловск' />
                    <MoNavLinker
                        text2="Грузоперевозки Астана-Петропавловск"
                        link2="/gruzoperevozki-astana-petropavlovsk"
                    />
                </div>
                <TplPage
                    title='О грузоперевозке по маршруту Астана - Петропавловск'
                    text1='Компания Transline готова предоставить своим клиентам высококачественные услуги по перевозке грузов различного вида по маршруту Астана-Петропавловск. Мы имеем все необходимые сертификаты и лицензии на проведение грузоперевозок, что подтверждает нашу надежность и готовность работать в соответствии с международными и национальными стандартами качества.'
                    text2='Мы обладаем современным автопарком, оснащенным специальными системами для перевозки грузов с повышенными требованиями к сохранности. Transline гарантирует безопасность и своевременную доставку грузов в соответствии с договором. Кроме того, у нас широкая сеть партнеров и подрядчиков, что позволяет нам предложить своим клиентам доставку грузов по всему Казахстану и за его пределами.'
                    text3='Мы также предоставляем дополнительные услуги по страхованию грузов и упаковке, чтобы минимизировать риски и обеспечить максимальную сохранность вашего груза во время перевозки.'
                />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default GruzoperevozkiAstanaPetropavlovsk;