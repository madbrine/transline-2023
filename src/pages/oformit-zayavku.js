import Head from 'next/head'
import CoHeader from '@/compnents/header'
import CoFooter from '@/compnents/footer'
import CoBlockServices from '@/compnents/add-block-services'
import MoBlockLine from '@/molecules/block-line'
import CoSubmitApplicationMore from '@/compnents/submit-application-more'

export default function OformitZayavku() {
    return (
        <>
            <Head>
                <title>Оформить заявку Transline</title>
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