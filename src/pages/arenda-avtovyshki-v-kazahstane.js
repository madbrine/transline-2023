import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";


function ArendaAvtokranaVKazahstane() {
    return (
        <>
            <Head>
                <title>Аренда автовышки в Казахстане</title>
                <meta name="description" content="Если Вы планируется производить монтажные, строительные или ремонтные работы на высоте, например, с линиями электропередач, по монтажу рекламных конструкций или фасадами зданий в Казахстане, то Вам потребуется автовышка. Вы можете взять ее в аренду в нашей компании." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeader />
                <div className='tpl-margin-h'>
                    <MoBlockHeaderH1 text='Аренда автовышки' />
                    <MoNavLinker
                        text2="Аренда автовышки"
                        link2="/arenda-avtovyshki-v-kazahstane"
                    />
                </div>
                <TplPage
                    title='Автовышки'
                    text1='Автовышкой называется грузовой автомобиль оборудованный выдвижной стрелой с закрепленной на ней платформой. Данный вид спецтехники предназначен для монтажных, строительных и ремонтных работ на высоте – с линиями электропередач, рекламными конструкциями, фасадами зданий и т.д.'
                    text2='Если Вы планируется производить монтажные, строительные или ремонтные работы на высоте, например, с линиями электропередач, по монтажу рекламных конструкций или фасадами зданий в Казахстане, то Вам потребуется автовышка. Вы можете взять ее в аренду в нашей компании.'
                />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default ArendaAvtokranaVKazahstane;