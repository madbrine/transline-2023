import CoFooter from "@/compnents/footer";
import CoHeaderV2 from "@/compnents/header-v2";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";

function SkladskieUslugi() {
  return (
    <>
      <Head>
        <title>Складские услуги</title>
        <meta
          name="description"
          content="Компания Транслайн всегда рада помочь решить логистические процедуры с применением складских услуг."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CoHeaderV2 />
        <div className="tpl-margin-h">
          <MoBlockHeaderH1 text="Складские услуги" />
          <MoNavLinker text2="Складские услуги" link2="/skladskie-uslugi" />
        </div>
        <TplPage
          title="Особенности складских услуг"
          text1="Ответственное хранение. Услуга ответственного хранения грузов представляет из себя целый комплекс услуг по хранению, различных видов складской обработки и современного электронного учета движения товаров (Клиент – хранение и складская обработка – Клиент)."
          text2="На сегодняшний день является одной из самых востребованных услуг для торговых и промышленных компаний, желающих отказаться от собственной складской инфраструктуры и привлечь для этих целей логистическую компанию c собственной складской инфраструктурой, широкими транспортными возможностями, современным информационным обменом с клиентом и документооборотом. Качественное предоставление этих услуг в комплексе, является важной составной частью 3PL (Third Party Logistics), или логистики третьей стороны (международный стандарт обозначающий концепцию покупки логистических услуг). Данный шаг позволяет нашим клиентам минимизировать свои расходы по транспортной и складской логистике без ущерба для ее качества. При этом им уже не требуется содержать и обслуживать свои складские площади, и отсутствует необходимость иметь в штате сотрудников для обеспечения их работы."
          text3="За счет организации четко отлаженной цепочки процессов на складских комплексах компании TRANSLINE, прямого взаимодействия с нашим транспортным подразделением, а также высокой скорости обработки грузопотоков, мы можем предложить по выгодным ценам действительно качественные услуги по обработке грузов."
          text4="Возможности наших складских комплексов также позволяют предложить нашим клиентам такую услугу как КРОСС-ДОКИНГ (быстрая перегрузка паллет из большегрузного транспорта в большое количество машин малой грузоподъемности, для развозки мелкими партиями конечным заказчикам), а также комплектация, маркировка, упаковка и переупаковка товаров."
          text5="Мы можем предложить отапливаемые современные складские площади с широкими и удобными подъездными путями для любых типов грузового автотранспорта."
          text6="Все площади оснащены современным вентиляционным оборудованием, отоплением, противопылевыми полами, хранение паллет напольное и стеллажное, видеонаблюдение по периметру зданий и круглосуточная охрана."
          text7="Где будет храниться ваш груз. Склады категории А и В: просторная территория склада и вокруг него; удобные подъездные пути; возможность хранения грузов разной номенклатуры; выгодное расположенное с точки зрения распределения грузопотока; современное складское оборудование; наличие Таможенного поста, таможенного склада, а также СВХ на одной территории."
          text8="Почему это выгодно? Потому что это снизит себестоимость вашего товара – вы сэкономите на транспортно-логистических и складских услугах, приобретая в их комплексе. Перевозка, хранение, распределение, упаковка и прочие складские операции обойдутся вам в конечном итоге дешевле. Потому что это поможет сэкономить время. Вам не придется самим заниматься вопросами сортировки и упаковки груза, контролировать процессы погрузки и выгрузки, формировать планы и графики транспортировок и заказывать транспорт – услуга ответственного хранения подразумевает данный комплекс услуг."
          text9="Услуга номенклатурного ответственного хранения груза. Компания TRANSLINE предоставляет комплексную услугу ответственного хранения. Специалисты нашей компании обеспечат всю цепочку поставки товарно-материальных ценностей от адреса до адреса. Основу услуги составляют погрузо-разгрузочные операции, учет и комплектация по номенклатуре, адресное хранение и другие складские операции."
          text10="Остались вопросы? Наши специалисты с удовольствием ответят вам, просто позвоните по телефонам нашим менеджерам или оставьте онлайн заявку на сайте."
        />
        <CoSubmitApplication />
        <CoFooter />
      </main>
    </>
  );
}
export default SkladskieUslugi;
