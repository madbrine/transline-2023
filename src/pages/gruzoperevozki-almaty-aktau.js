import CoFooter from "@/compnents/footer";
import CoHeaderV2 from "@/compnents/header-v2";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";

function GruzoperevozkiAlmatyAktau() {
  return (
    <>
      <Head>
        <title>Грузоперевозки между Алматой и Актау с Transline</title>
        <meta
          name="description"
          content="Transline предлагает профессиональные грузоперевозки по маршруту Алмата - Актау. Надежная и быстрая доставка грузов наших клиентов - наш приоритет."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CoHeaderV2 />
        <div className="tpl-margin-h">
          <MoBlockHeaderH1 text="Грузоперевозки Алматы-Актау" />
          <MoNavLinker
            text2="Грузоперевозки Алматы-Актау"
            link2="/gruzoperevozki-almaty-aktau"
          />
        </div>
        <TplPage
          title="О грузоперевозке по маршруту Алматы - Актау"
          text1="Компания Transline предлагает высококачественные услуги грузоперевозки по маршруту Алматы-Актау. Мы понимаем, что эффективная логистика является ключевым элементом успешного бизнеса, поэтому наша команда готова предоставить вам комплексные решения для перевозки грузов любого веса и объема."
          text2="Мы гарантируем своевременную доставку грузов в любую точку маршрута, а также предоставляем все необходимые услуги по организации перевозок, включая таможенное оформление и страхование грузов."
          text3="Наш автопарк состоит из современных грузовых автомобилей различной грузоподъемности, что позволяет нам предложить оптимальный вариант перевозки в зависимости от ваших потребностей. Все наши машины проходят регулярную техническую проверку и обслуживание, что гарантирует безопасность и надежность перевозки."
          text4="Наша команда профессионалов всегда готова ответить на все ваши вопросы и помочь в выборе наиболее подходящего варианта перевозки."
          text5="Если вы ищете надежного партнера для перевозки грузов по маршруту Алматы-Актау, обратитесь к нам в компанию Transline. Мы готовы предложить вам высококачественные услуги по разумной цене. Свяжитесь с нами уже сегодня и убедитесь сами!"
        />
        <CoSubmitApplication />
        <CoFooter />
      </main>
    </>
  );
}
export default GruzoperevozkiAlmatyAktau;
