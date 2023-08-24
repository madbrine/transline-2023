import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";


function GruzoperevozkiKaragandaAktau() {
    return (
        <>
            <Head>
                <title>Грузоперевозки между Карагандой и Актау с Transline</title>
                <meta name="description" content="Transline предлагает профессиональные грузоперевозки по маршруту Караганда-Актау. Надежная и быстрая доставка грузов наших клиентов - наш приоритет." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeader />
                <div className='tpl-margin-h'>
                    <MoBlockHeaderH1 text='Грузоперевозки Караганда-Актау' />
                    <MoNavLinker
                        text2="Грузоперевозки Караганда-Актау"
                        link2="/gruzoperevozki-karaganda-aktau"
                    />
                </div>
                <TplPage
                    title='О грузоперевозке по маршруту Караганда-Актау'
                    text1='Компания Transline специализируется на грузоперевозках на маршруте Караганда-Актау. Мы предлагаем качественные услуги по перевозке грузов различной сложности и объема, включая небольшие и крупногабаритные грузы, а также грузы, требующие специального транспорта.'
                    text2='Наша команда профессионалов всегда готова предложить вам оптимальное решение для перевозки вашего груза, учитывая особенности вашего бизнеса и индивидуальные требования. Мы гарантируем безопасность и сохранность груза на протяжении всего пути следования, а также своевременную доставку в назначенный срок.'
                    text3='Мы полностью контролируем процесс перевозки, от планирования маршрута до доставки груза в пункт назначения. Наша компания обладает широкой сетью транспортных партнеров и современным парком транспортных средств, что позволяет нам предложить клиентам гибкую ценовую политику и оптимальные условия для перевозки грузов на маршруте Караганда-Актау.'
                />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default GruzoperevozkiKaragandaAktau;