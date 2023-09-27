import Head from 'next/head'
import CoHeader from '@/compnents/header'
import CoFooter from '@/compnents/footer'
import CoBlockServices from '@/compnents/add-block-services'
import MoBlockLine from '@/molecules/block-line'
import CoSubmitApplicationMore from '@/compnents/submit-application-more'
import CoHeaderV2 from '@/compnents/header-v2'

export default function OformitZayavku() {
    return (
        <>
            <Head>
                <title>Перевозка груза по Казахстану и СНГ</title>
                <meta name="description" content="Транспортная компания" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <CoHeaderV2 />
                <CoSubmitApplicationMore />
                <MoBlockLine text="Другие услуги" />
                <CoBlockServices />
                <CoFooter />
            </main>
        </>
    )
}