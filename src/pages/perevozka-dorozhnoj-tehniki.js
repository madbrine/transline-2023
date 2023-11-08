import CoFooter from "@/compnents/footer";
import CoHeaderV2 from "@/compnents/header-v2";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";

function PerevozkaDorozhnojTehniki() {
  return (
    <>
      <Head>
        <title>Перевозка дорожной техники в Казахстане.</title>
        <meta name="description" content="Перевозка дорожной техники" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CoHeaderV2 />
        <div className="tpl-margin-h">
          <MoBlockHeaderH1 text="Перевозка дорожной техники" />
          <MoNavLinker
            text2="Перевозка дорожной техники"
            link2="/perevozka-dorozhnoj-tehniki"
          />
        </div>
        <TplPage
          title="Особенности перевозки дорожной техники"
          text1="Наиболее эффективным и надежным способом транспортировки дорожной техники к месту работ – является ее перевозка с применением низкорамных грузовых платформ. Автотрейлеры, автопоезда и тралы компании TRANSLINE осуществят грузоперевозки дорожной крупногабаритной техники по всей территории Казахстана – максимально быстро и безопасно."
          text2="Мы берем на себя все сопутствующие работы по погрузке и разгрузке, оформлению сопроводительных документов и таможенных деклараций (при необходимости перевозок за границу), разработке транспортного маршрута, страхованию груза. Мы гарантируем сохранность груза и его доставку к месту назначения точно в срок."
          text3="Для перевозки дорожной техники используются специальные низкорамные полуприцепы большой грузоподъемности (до 120 тонн) и различных габаритов (в зависимости от вида и особенностей транспортируемой техники)."
          text4="Если транспортировка дорожной техники осуществляется в черте города, то немаловажное значение имеет высота платформы, так как маршрут возможно пройдет через тоннели, под мостами, в местах с ограниченным свободным пространством. Поэтому, а так же с целью облегчения процесса погрузки и разгрузки техники применяются грузовые платформы и полуприцепы с погрузочной высотой не более 600 мм, а в отдельных случаях 300 мм."
          text5="Для буксировки негабаритных грузов большой массы применяются мощные многоосные тягачи и низкорамные тралы грузоподъемностью от 30 до 120 тонн. В каждом отдельном случае грузоподъемность выбирается индивидуально, исходя из типа транспортируемого оборудования, загруженности маршрута и особенностей дорожного покрытия."
          text6="Важным фактором при перевозке дорожной техники являются габариты грузовой платформы. В Казахстане габаритная ширина ограничена шириной 2,5 метра, а потому для транспортировки отдельных видов техники необходимо использование расширителей, что позволяет увеличить рабочий размер погрузочной платформы до 3,2 метров – этого размера достаточно для транспортировки тяжелой гусеничной техники."
          text7="Длина платформ низкорамников составляет от 8 до 27 метров, что позволяет использовать их для транспортировки практически любого длинномерного дорожного оборудования."
          text8="Угол выезда – важный параметр при транспортировке техники, особенно в городских условиях. Для перевозки асфальтоукладчиков и катков применяются тралы с углом до 9 градусов, а для гусеничной техники – до 18. Обеспечение малых углов въезда осуществляется при помощи складных гидравлических трапов, поэтому все полуприцепы TRANSLINE оборудованы гидравликой."
        />
        <CoSubmitApplication />
        <CoFooter />
      </main>
    </>
  );
}
export default PerevozkaDorozhnojTehniki;
