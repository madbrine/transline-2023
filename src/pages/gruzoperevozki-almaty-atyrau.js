import CoFooter from "@/compnents/footer";
import CoHeaderV2 from "@/compnents/header-v2";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";

function GruzoperevozkiAlmatyAtyrau() {
  return (
    <>
      <Head>
        <title>Грузоперевозки между Алматой и Атырау с Transline</title>
        <meta
          name="description"
          content="Transline предлагает профессиональные грузоперевозки по маршруту Алмата - Атырау. Надежная и быстрая доставка грузов наших клиентов - наш приоритет."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CoHeaderV2 />
        <div className="tpl-margin-h">
          <MoBlockHeaderH1 text="Грузоперевозки Алматы-Атырау" />
          <MoNavLinker
            text2="Грузоперевозки Алматы-Атырау"
            link2="/gruzoperevozki-almaty-atyrau"
          />
        </div>
        <TplPage
          title="О грузоперевозке по маршруту Алматы - Атырау"
          text1="Компания Transline предоставляет услуги грузоперевозки по маршруту Алматы-Атырау с гарантией надежности и безопасности."
          text2="Мы осуществляем перевозку грузов различных категорий, включая крупногабаритные и тяжеловесные грузы, опасные и хрупкие грузы. Наша компания обладает современным парком транспортных средств, что позволяет нам осуществлять перевозки любых объемов и в любое время."
          text3="Наш комплекс услуг включает в себя погрузочно-разгрузочные работы, оформление необходимой документации и страхование грузов. Мы гарантируем индивидуальный подход к каждому клиенту и предлагаем оптимальные условия для каждой перевозки."
          text4="Наша компания строго соблюдает все нормы и требования по безопасности перевозки грузов, что гарантирует сохранность груза и предотвращает возможные неприятные ситуации на дороге."
          text5="Transline ценит каждого  клиента и готовы предложить высококачественные услуги по грузоперевозке по маршруту Алматы-Атырау. Обращайтесь к нам и мы сделаем все возможное, чтобы перевозка груза была максимально комфортной и безопасной для вас и вашего груза."
        />
        <CoSubmitApplication />
        <CoFooter />
      </main>
    </>
  );
}
export default GruzoperevozkiAlmatyAtyrau;
