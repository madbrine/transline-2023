import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import MoLogo from '@/compnents/logo'
import CoHeader from '@/compnents/header'
import CoIntro from '@/compnents/intro'
import CoAboutCompany from '@/compnents/about-company'
import CoOurServices from '@/compnents/our-services'
import CoWhyWe from '@/compnents/why-we'
import CoRegions from '@/compnents/regions'
import CoOurClients from '@/compnents/our-clients'
import CoNews from '@/compnents/news'
import CoSubmitApplication from '@/compnents/submit-application'
import CoFooter from '@/compnents/footer'
import CoBlockServices from '@/compnents/add-block-services'
import MoBlockHeader from '@/molecules/block-header'
import MoBlockLine from '@/molecules/block-line'
import NewsIntro from '@/compnents/news-intro'
import VanishDiv from '@/molecules/vanish-div'
import NewsItem from '@/compnents/news-item'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Transline</title>
        <meta name="description" content="Крупнейшая логистическая компания в Центральной Азии" />
        <meta name="viewport" content="width=device-width, minimum-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ overflowX: 'hidden', width: '100vw' }}>
        <CoHeader />
        <CoIntro />
        <VanishDiv>
          <MoBlockHeader text="Решения для любого бизнеса" />
        </VanishDiv>
        <VanishDiv>
          <MoBlockLine text="Наши решения" />
        </VanishDiv>
        <CoBlockServices />
        <CoAboutCompany />
        <CoNews />
        <CoSubmitApplication />
        <CoFooter />
      </main>
    </>
  )
}
