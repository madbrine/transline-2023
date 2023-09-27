import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoHeaderV2 from "@/compnents/header-v2";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";


function GruzoperevozkiAlmatyZhezkazgan() {
    return (
        <>
            <Head>
                <title>Грузоперевозки между Алматой и Жезказганом с Transline</title>
                <meta name="description" content="Transline предлагает профессиональные грузоперевозки по маршруту Алмата - Жезказган. Надежная и быстрая доставка грузов наших клиентов - наш приоритет." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeaderV2 />
                <div className='tpl-margin-h'>
                    <MoBlockHeaderH1 text='Грузоперевозки Алматы-Жезказган' />
                    <MoNavLinker
                        text2="Грузоперевозки Алматы-Жезказган"
                        link2="/gruzoperevozki-almaty-zhezkazgan"
                    />
                </div>
                <TplPage
                    title='О грузоперевозке по маршруту Алматы - Жезказган'
                    text1='Компания Transline предлагает надежные и профессиональные услуги грузоперевозки по маршруту Алматы-Жезказган. Наша компания обладает обширным опытом в данной сфере и готова предложить индивидуальный подход к каждому клиенту.'
                    text2='Мы предоставляем полный спектр услуг, включая транспортировку грузов любых объемов и видов, от маленьких до крупногабаритных. Мы гарантируем своевременное выполнение заказов и высокий уровень безопасности перевозки грузов.'
                    text3='Компания Transline работает на рынке грузоперевозок уже много лет и является одним из лидеров в данной сфере. Наш опытный и квалифицированный персонал обеспечивает качественное выполнение работ, а наш автопарк состоит из современных и надежных транспортных средств, что позволяет нам гарантировать надежность и безопасность перевозок.'
                    text4='Если вам необходимо отправить груз по маршруту Алматы-Жезказган, обратитесь в компанию Transline. Мы предоставим вам высококачественные услуги по конкурентоспособным ценам и сделаем все возможное, чтобы ваш груз был доставлен вовремя и в целости и сохранности.'
                />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default GruzoperevozkiAlmatyZhezkazgan;