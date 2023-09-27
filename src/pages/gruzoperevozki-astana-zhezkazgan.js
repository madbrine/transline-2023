import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoHeaderV2 from "@/compnents/header-v2";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";


function GruzoperevozkiAstanaZhezkazgan() {
    return (
        <>
            <Head>
                <title>Грузоперевозки между Астаной и Жезказган с Transline</title>
                <meta name="description" content="Transline предлагает профессиональные грузоперевозки по маршруту Астана - Жезказган. Надежная и быстрая доставка грузов наших клиентов - наш приоритет." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeaderV2 />
                <div className='tpl-margin-h'>
                    <MoBlockHeaderH1 text='Грузоперевозки Астана-Жезказган' />
                    <MoNavLinker
                        text2="Грузоперевозки Астана-Жезказган"
                        link2="/gruzoperevozki-astana-zhezkazgan"
                    />
                </div>
                <TplPage
                    title='О грузоперевозке по маршруту Астана - Жезказган'
                    text1='Компания Transline предоставляет профессиональные услуги по грузоперевозке на маршруте Астана-Жезказган. Наша фирма имеет значительный опыт работы в сфере логистики и обладает всем необходимым для осуществления безопасных и эффективных перевозок.'
                    text2='Мы гарантируем нашим клиентам быстрое и качественное оказание услуг. Наш транспортный бизнес обладает современным автопарком, который состоит из надежных грузовых автомобилей различной грузоподъемности. Все наши машины регулярно проходят технические осмотры и находятся в идеальном состоянии.'
                    text3='Кроме того, наши профессиональные водители имеют значительный опыт работы и знают все тонкости перевозок на данном маршруте. Они готовы оперативно реагировать на любые изменения в пути следования и обеспечивать безопасность груза на протяжении всего пути.'
                    text4='Мы предлагаем нашим клиентам гибкие тарифы, а также индивидуальный подход к каждому заказчику. Наша компания готова предложить оптимальный вариант перевозки груза, учитывая все потребности и требования клиента.'
                    text5='Если вам необходима надежная транспортная компания для перевозки грузов по маршруту Астана-Жезказган, обращайтесь в компанию Transline. Мы гарантируем качественное обслуживание, оперативность и безопасность груза на протяжении всего пути следования.'
                />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default GruzoperevozkiAstanaZhezkazgan;