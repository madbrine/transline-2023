import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";


function GruzoperevozkiKaragandaAktobe() {
    return (
        <>
            <Head>
                <title>Грузоперевозки между Карагандой и Актобе с Transline</title>
                <meta name="description" content="Transline предлагает профессиональные грузоперевозки по маршруту Караганда-Актобе. Надежная и быстрая доставка грузов наших клиентов - наш приоритет." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeader />
                <div className='tpl-margin-h'>
                    <MoBlockHeaderH1 text='Грузоперевозки Караганда-Актобе' />
                    <MoNavLinker
                        text2="Грузоперевозки Караганда-Актобе"
                        link2="/gruzoperevozki-karaganda-aktobe"
                    />
                </div>
                <TplPage
                    title='О грузоперевозке по маршруту Караганда-Актобе'
                    text1='Компания Transline предоставляет профессиональные услуги по грузоперевозкам на маршруте Караганда-Актобе. Мы готовы взять на себя всю ответственность за перевозку вашего груза и обеспечить его безопасность на всем пути следования.'
                    text2='Наша компания предоставляет грузовые автомобили различных типов и грузоподъемностей, что позволяет выбрать наиболее подходящий транспорт для перевозки вашего груза. Наша команда профессионалов разработает оптимальный маршрут и будет следить за его выполнением на протяжении всей поездки.'
                    text3='Но это еще не все! Компания Transline также обладает собственной складской базой, где вы можете хранить ваш груз до момента его отправки или после прибытия в пункт назначения. Мы готовы предложить услуги по складированию, упаковке и маркировке груза для обеспечения его безопасности и сохранности.'
                    text4='Кроме того, мы понимаем, что время - это деньги, поэтому наша компания стремится обеспечить своевременную доставку груза в назначенный срок. Мы понимаем важность вашего бизнеса и поэтому всегда готовы предоставить вам высококлассное обслуживание и конкурентоспособные цены.'
                />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default GruzoperevozkiKaragandaAktobe;