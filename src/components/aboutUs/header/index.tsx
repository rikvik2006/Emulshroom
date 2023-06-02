import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react'
import style from "./index.module.scss";
import { motion } from 'framer-motion';

type Props = {}


const AboutUsNavbar: FC<Props> = () => {
    const [scrol, setScrol] = useState(false);
    const [logo, setLogo] = useState<string>("/img/LogoBlue.png")

    const router = useRouter();

    const changeBackground = () => {
        if (window.scrollY >= 66) {
            setScrol(true);
        } else {
            setScrol(false);
        }
    }

    useEffect(() => {
        changeBackground();

        window.addEventListener("scroll", changeBackground);
    })

    const changeLogo = () => {
        const fristChild: HTMLImageElement = document.querySelector('#headerImage:first-child') as HTMLImageElement;
        const lastChild: HTMLImageElement = document.querySelector('#headerImage:last-child') as HTMLImageElement;

        if (window.scrollY >= 66) {
            fristChild ? fristChild.style.opacity = '0' : null;
            lastChild ? lastChild.style.opacity = '1' : null;
        } else {
            fristChild ? fristChild.style.opacity = '1' : null;
            lastChild ? lastChild.style.opacity = '0' : null;
        }
    }

    useEffect(() => {
        changeLogo();

        window.addEventListener("scroll", changeLogo);

    })

    const goToHome = () => {
        router.push("/");
    }

    const goToAboutUs = () => {
        router.push("/about-us");
    }

    return (
        <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                duration: 0.75,
            }}
            className={[`${style.container}`, `${scrol ? style.scrolled : ""}`].join(" ")}
            id="navbar">
            <div className={style.leftPart}>
                <div className={style.logoContainer}>
                    <img className={style.image} id="headerImage" src="/img/LogoBlue.png" alt="Emulshoorm Logo" onClick={goToHome} />
                    <img className={style.image} id="headerImage" src="/img/LogoBlack.png" alt="Emulshoorm Logo" onClick={goToHome} />
                </div>

                <div className={style.item} onClick={goToAboutUs}>Research</div>
                <div className={style.item}>Product</div>
                <div className={style.item}>About us</div>
                <div className={style.item}>Company</div>
            </div>
            <div className={style.rightPart}>
                {/* <div className={style.lenguageSwitch}>
                <div className={style.item}>EN</div>
                <div className={style.item}>IT</div>
            </div> */}
            </div>
        </motion.div >
    )
}

export default AboutUsNavbar