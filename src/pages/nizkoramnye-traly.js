import CoFooter from "@/compnents/footer";
import CoHeader from "@/compnents/header";
import CoSubmitApplication from "@/compnents/submit-application";
import TplPage from "@/compnents/tpl-pages";
import MoBlockHeaderH1 from "@/molecules/block-header-h1";
import MoNavLinker from "@/molecules/nav-linker";
import Head from "next/head";


function NizkoramnyeTraly() {
    return (
        <>
            <Head>
                <title>Аренда низкорамных тралов в Казахстане</title>
                <meta name="description" content="Низкорамными тралами называются прицепы для тягачей, приспособленные для перевозки крупногабаритной техники, военных и дорожных машин, строительного и горнодобывающего оборудования, а так же негабаритных грузов. Низкорамники рассчитаны на большие нагрузки (до 120 тонн) и имеют низкую посадку, что облегчает погрузочно-разгрузочные работы и позволяет проезжать в условиях недостатка пространства – под мостами, в тоннелях и т.д." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeader />
                <div className='tpl-margin-h'>
                    <MoBlockHeaderH1 text='Аренда низкорамных тралов' />
                    <MoNavLinker
                        text2="Аренда низкорамных тралов"
                        link2="/nizkoramnye-traly"
                    />
                </div>
                <TplPage
                    title='Низкорамные траллы'
                    text1='Низкорамными тралами называются прицепы для тягачей, приспособленные для перевозки крупногабаритной техники, военных и дорожных машин, строительного и горнодобывающего оборудования, а так же негабаритных грузов. Низкорамники рассчитаны на большие нагрузки (до 120 тонн) и имеют низкую посадку, что облегчает погрузочно-разгрузочные работы и позволяет проезжать в условиях недостатка пространства – под мостами, в тоннелях и т.д.'
                />
                <CoSubmitApplication />
                <CoFooter />
            </main>
        </>
    )
}
export default NizkoramnyeTraly;