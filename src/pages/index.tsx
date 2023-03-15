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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque exercitationem fugiat eaque id assumenda blanditiis sit est! Vitae eius deleniti amet debitis placeat rerum, facilis quis. Illo earum deserunt voluptatem?
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage