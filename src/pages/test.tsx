import { NextPage } from 'next'
import Head from 'next/head'
import style from "../styles/Home.module.scss"
import NavbarContainer from '@components/components/navbar'
import { Montserrat } from "next/font/google"

type Props = {}


const HomePage: NextPage<Props> = () => {
    return (
        <>
            <Head>
                <title>Emulsionati House</title>
            </Head>
            <div className={style.container}>
                <NavbarContainer />

                <div className={style.heroContent}>
                    <div className={style.imageContainer}>
                        <img src="/img/heroimage.jpg" alt="heroimage" />
                        <h2>La natura divide noi uniamo</h2>
                        <p>
                            At Emulshroom, we have taken the ordinary mushroom and turned it into a miraculous ingredient for the food and cosmetic industry. Our emulsifiers are not only sustainable, but they are also game-changers for any product they are used in. Join us in making an impact on the environment while simultaneously creating stunning products.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage