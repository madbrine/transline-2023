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
import { useEffect, useState } from 'react'
import CoBlockServices from '@/compnents/add-block-services'
import MoBlockLine from '@/molecules/block-line'
import CoSubmitApplicationMore from '@/compnents/submit-application-more'

const inter = Inter({ subsets: ['latin'] })

export default function OformitZayavku() {
    const [offerData, setOfferData] = useState(false)
    useEffect(() => {
        setOfferData(sessionStorage.getItem('offerData'));
        consoleGet();
    }, [])
    function consoleGet() {
        console.log(sessionStorage.getItem('offerData'))
        console.log()
    }

    const formData = {
        from: 's',
        to: 'sd',
        volume: 21,
        weight: 15,
        description: ''
    }
    return (
        <>
            <Head>
                <title>Transline</title>
                <meta name="description" content="Транспортная компания" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeader />
                <CoSubmitApplicationMore />
                <MoBlockLine text="Другие услуги" />
                <CoBlockServices />
                <CoFooter />
            </main>
        </>
    )
}