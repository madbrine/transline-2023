import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import MoLogo from '@/compnents/logo'
import CoHeader from '@/compnents/header'
import CoFooter from '@/compnents/footer'
import MoBlockHeader from '@/molecules/block-header'
import MoBlockLine from '@/molecules/block-line'
import SertifikatyIntro from '@/compnents/sertifikaty-intro'

export default function Sertifikaty() {
    return (
        <>
            <Head>
                <title>Сертификаты Transline</title>
                <meta name="description" content="Сертификаты нашей компании" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeader />
                <SertifikatyIntro />
                <CoFooter />
            </main>
        </>
    )
}