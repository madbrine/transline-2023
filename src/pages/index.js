import Head from 'next/head'
import CoHeader from '@/compnents/header'
import CoIntro from '@/compnents/intro'
import CoAboutCompany from '@/compnents/about-company'
import CoNews from '@/compnents/news'
import CoSubmitApplication from '@/compnents/submit-application'
import CoFooter from '@/compnents/footer'
import CoBlockServices from '@/compnents/add-block-services'
import MoBlockHeader from '@/molecules/block-header'
import MoBlockLine from '@/molecules/block-line'
import VanishDiv from '@/molecules/vanish-div'

export default function Home() {
  return (
    <>
      <Head>
        <title>Крупнейшая логистическая компания в Центральной Азии</title>
        <meta name="description" content="Крупнейшая логистическая компания в Центральной Азии. Надежные автоперевозки по Казахстану, СНГ и миру. Оптимизируем грузоперевозки для бизнеса любого масштаба. Быстрая и безопасная доставка с гарантированным качеством." />
        <meta name="viewport" content="width=device-width, minimum-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ overflowX: 'hidden', width: '100vw' }}>
        <CoHeader />
        <CoIntro />
        <VanishDiv>
          <MoBlockHeader text="Решения для Вашего бизнеса" />
        </VanishDiv>
        <VanishDiv>
          <MoBlockLine text="Наши решения" />
        </VanishDiv>
        <CoBlockServices />
        <CoAboutCompany />
        {/* <CoNews /> */}
        <CoSubmitApplication />
        <CoFooter />
      </main>
    </>
  )
}
