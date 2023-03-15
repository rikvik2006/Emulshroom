import { NextPage } from 'next'
import Head from 'next/head'
import styles from "../styles/Home.module.scss"
import NavbarContainer from '@components/components/navbar'

type Props = {}


const HomePage: NextPage<Props> = () => {
    return (
        <>
            <Head>
                <title>Emulsionati House</title>
            </Head>
            <div className={styles.container}>
                <NavbarContainer />
            </div>
        </>
    )
}

export default HomePage