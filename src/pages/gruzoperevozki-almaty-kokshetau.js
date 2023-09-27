import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoHeaderV2 from "@/compnents/header-v2";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";


function GruzoperevozkiAlmatyKokshetau() {
    return (
        <>
            <Head>
                <title>Грузоперевозки между Алматой и Кокшетау с Transline</title>
                <meta name="description" content="Transline предлагает профессиональные грузоперевозки по маршруту Алмата - Кокшетау. Надежная и быстрая доставка грузов наших клиентов - наш приоритет." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeaderV2 />
                <div className='tpl-margin-h'>
                    <MoBlockHeaderH1 text='Грузоперевозки Алматы-Кокшетау' />
                    <MoNavLinker
                        text2="Грузоперевозки Алматы-Кокшетау"
                        link2="/gruzoperevozki-almaty-kokshetau"
                    />
                </div>
                <TplPage
                    title='О грузоперевозке по маршруту Алматы - Кокшетау'
                    text1='Компания Transline предлагает надежные и эффективные услуги грузоперевозки по маршруту Алматы-Кокшетау. Мы обладаем значительным опытом в этой сфере и готовы предоставить клиентам высококачественный сервис по перевозке грузов.'
                    text2='Наша компания осуществляет перевозки различных видов грузов, включая сырье, продукты питания, медицинские препараты, строительные материалы, машины и другие грузы. Мы обеспечиваем полный спектр услуг, включая погрузку, разгрузку и транспортировку грузов до места назначения.'
                    text3='Мы предлагаем различные варианты транспортировки грузов, в том числе автомобильный и железнодорожный транспорт. В зависимости от потребностей наших клиентов, мы подбираем оптимальный вариант доставки груза.'
                    text4='Наша компания гарантирует безопасность и сохранность груза во время перевозки. Мы предоставляем страхование груза, чтобы клиенты могли быть уверены в безопасности своих товаров.'
                    text5='Если клиентам необходима грузоперевозка по маршруту Алматы-Кокшетау, обращайтесь в компанию Transline. Мы готовы предоставить высококачественный сервис по разумной цене.'
                />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default GruzoperevozkiAlmatyKokshetau;