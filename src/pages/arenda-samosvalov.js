import CoFooter from "@/compnents/footer";
import CoHeaderV2 from "@/compnents/header-v2";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";

function ArendaSamosvalov() {
  return (
    <>
      <Head>
        <title>Аренда самосвалов</title>
        <meta name="description" content="Аренда самосвалов" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CoHeaderV2 />
        <div className="tpl-margin-h">
          <MoBlockHeaderH1 text="Аренда самосвалов" />
          <MoNavLinker text2="Аренда самосвалов" link2="/arenda-samosvalov" />
        </div>
        <TplPage
          title="Самосвалы"
          text1="Данный вид техники необходим предприятиям, деятельность которых, так или иначе, связана со строительством и автоперевозками. Несомненными преимуществами компании Transline являются надежность и профессионализм водителей. С нашей помощью вы освободитесь от всех расходов, связанных с покупкой и содержанием техники."
          text2="Аренда самосвала позволяет осуществить следующие работы: транспортировка сыпучих материалов (щебень, песок, керамзит) для организации коммунальных, сельскохозяйственных, земельных работ; вывоз грунта; работы в карьере."
          text3="Аренда самосвала возможна с разгрузкой как сбоку, так и сзади."
        />
        <CoSubmitApplication />
        <CoFooter />
      </main>
    </>
  );
}
export default ArendaSamosvalov;
