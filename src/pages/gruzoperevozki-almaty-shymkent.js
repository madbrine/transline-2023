import CoFooter from "@/compnents/footer";
import CoHeaderV2 from "@/compnents/header-v2";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";

function GruzoperevozkiAlmatyShymkent() {
  return (
    <>
      <Head>
        <title>Грузоперевозки между Алматой и Шымкентом c Transline</title>
        <meta
          name="description"
          content="Transline предлагает профессиональные грузоперевозки по маршруту Алмата - Шымкент. Надежная и быстрая доставка грузов наших клиентов - наш приоритет."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CoHeaderV2 />
        <div className="tpl-margin-h">
          <MoBlockHeaderH1 text="Грузоперевозки Алматы-Шымкент" />
          <MoNavLinker
            text2="Грузоперевозки Алматы-Шымкент"
            link2="/gruzoperevozki-almaty-shymkent"
          />
        </div>
        <TplPage
          title="О грузоперевозке по маршруту Алматы-Шымкент"
          text1="Если вы ищете надежную транспортную компанию для грузоперевозок по маршруту из Алматы в Шымкент, то Transline готов представить вам уникальное предложение!"
          text2="Что делает нашу компанию лучшей выбором для перевозки ваших грузов? Во-первых, мы базируемся в центре торговых путей Центральной Азии, что обеспечивает нам удобный доступ к крупнейшим экономическим центрам региона, таким как Алматы и Шымкент."
          text3="Во-вторых, у нас многолетний опыт работы в грузоперевозках, благодаря чему можем гарантировать нашим клиентам надежность и точность доставки, даже на самые отдаленные и труднодоступные маршруты."
          text4="В-третьих, мы предлагаем нашим клиентам не только высококачественные услуги по грузоперевозкам, но также гибкую систему ценообразования, которая позволяет выбирать наиболее выгодные условия доставки в зависимости от типа груза и его объема."
          text5="Также мы предоставляем полный комплекс услуг, связанных с грузоперевозками, включая страхование грузов, таможенное оформление и складские услуги."
          text6="Сделайте выбор в пользу Transline, и наши профессиональные специалисты обеспечат вам высокое качество и оперативность доставки грузов, а наш опыт и знания региона помогут минимизировать риски и обеспечить успешную реализацию бизнес-проектов."
        />
        <CoSubmitApplication />
        <CoFooter />
      </main>
    </>
  );
}
export default GruzoperevozkiAlmatyShymkent;
