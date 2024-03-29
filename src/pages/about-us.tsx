import NavbarContainer from '@components/heroContent/navbar'
import { NextPage } from 'next'
import Head from 'next/head';
import style from "../styles/aboutus.module.scss";
import HeroContent from '@components/aboutUs/heroContent';
import { Fragment } from 'react';
import { PageInfos } from '../types/hadersType';

import logoWhite from "../../public/img/logo.png"
import logoBlue from "../../public/img/LogoBlue.png"
import logoBlack from "../../public/img/LogoBlack.png"
import AboutUsNavbar from '@components/aboutUs/header';
import MainContent from '@components/aboutUs/mainContent';
import Footer from '@components/aboutUs/footer';
import BottomFooter from '@components/bottomFooter';

type Props = {}


const AboutUs: NextPage<Props> = () => {
    const pageInfos: PageInfos = {
        page: "about-us",
        header: {
            logo: [logoBlue, logoBlack],
            color: ["#0000ff", "#000000"]
        }
    }

    return (
        <>
            <Head>
                <title>About Us</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <style jsx global>
                {`
                        body {
                            background: white;
                            color: black;
                        }

                        ::selection {
                            background: #0000ff;
                            color: #FFF1D6;
                        }
                `}
            </style>


            <AboutUsNavbar />
            <HeroContent />
            <div className={style.container}>
                <div className={style.mainContainer}>
                    <hr />
                    <MainContent />
                </div>
            </div>
            <div className={style.footerContainer}>
                <Footer />
                <BottomFooter bg_color="#0000ff" element_color="#FFF1D6" />
            </div>
        </>
    )
}

export default AboutUs