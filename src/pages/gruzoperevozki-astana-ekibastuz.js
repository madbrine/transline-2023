import CoFooter from "@/compnents/footer";
import CoHeaderV2 from "@/compnents/header-v2";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";

function GruzoperevozkiAstanaEkibastuz() {
  return (
    <>
      <Head>
        <title>Грузоперевозки между Астаной и Экибастузом с Transline</title>
        <meta
          name="description"
          content="Transline предлагает профессиональные грузоперевозки по маршруту Астана - Экибастуз. Надежная и быстрая доставка грузов наших клиентов - наш приоритет."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CoHeaderV2 />
        <div className="tpl-margin-h">
          <MoBlockHeaderH1 text="Грузоперевозки Астана-Экибастуз" />
          <MoNavLinker
            text2="Грузоперевозки Астана-Экибастуз"
            link2="/gruzoperevozki-astana-ekibastuz"
          />
        </div>
        <TplPage
          title="О грузоперевозке по маршруту Астана - Экибастуз"
          text1="Компания Transline предлагает комплексные услуги по грузоперевозкам на маршруте Астана-Экибастуз. Независимо от того, какой тип груза у вас есть, мы готовы предложить наиболее эффективное и безопасное решение для его перевозки."
          text2="Мы работаем с клиентами из различных отраслей, включая строительство, производство и розничную торговлю, и знаем, как важно для них быстро и надежно доставлять свои товары. Поэтому используем только надежные транспортные средства и опытных водителей, чтобы гарантировать своевременную доставку грузов."
          text3="Наша компания имеет все необходимые лицензии и сертификаты на проведение грузоперевозок, что гарантирует качество нашей работы. Мы также готовы предложить нашим клиентам индивидуальные решения для перевозки грузов, включая выбор наиболее подходящего вида транспорта и услуг, таких как погрузка и выгрузка."
          text4="Если вы ищете надежного партнера для грузоперевозок на маршруте Астана-Экибастуз, обратитесь к компании Transline. Мы гарантируем высокое качество наших услуг и предоставляем своим клиентам лучшие решения для их потребностей в грузоперевозках."
        />
        <CoSubmitApplication />
        <CoFooter />
      </main>
    </>
  );
}
export default GruzoperevozkiAstanaEkibastuz;
