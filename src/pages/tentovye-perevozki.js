import CoFooter from "@/compnents/footer";
import CoHeaderV2 from "@/compnents/header-v2";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";

function TentovyePerevozki() {
  return (
    <>
      <Head>
        <title>Тентовые перевозки по Казахстану</title>
        <meta
          name="description"
          content="Тентованный кузов автомобиля подойдет для перевозки большинства грузов – как строительных материалов, которые необходимо защитить от ветра или дождя, так и различного промышленного или торгового оборудования."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CoHeaderV2 />
        <div className="tpl-margin-h">
          <MoBlockHeaderH1 text="Тентовые перевозки" />
          <MoNavLinker text2="Тентовые перевозки" link2="/tentovye-perevozki" />
        </div>
        <TplPage
          title="Особенности тентовых перевозок"
          text1="Тентованная техника позволяет защитить перевозимые грузы от ветра и атмосферных осадков, чего вполне достаточно для большинства упакованных грузов общего назначения – корпусной мебели, запалеченных товаров, бруса, древесины, отделочных материалов. Конструкция тентованного автомобиля такова, что позволяет осуществлять загрузку и разгрузку с любой стороны – сзади или сбоку. В зависимости от конструкции автомобиля тентованный кузов вмещает от 8 до 120 кубометров груза, что позволяет гибко подбирать автотранспорт под конкретные заказы."
          text2="Чтобы заказать тентованный грузовик вам необходимо позвонить по одному из наших телефонов или оставить заявку на сайте."
        />
        <CoSubmitApplication />
        <CoFooter />
      </main>
    </>
  );
}
export default TentovyePerevozki;
