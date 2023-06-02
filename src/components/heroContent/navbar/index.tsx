import { FC, useEffect, useState } from "react";
import style from "./index.module.scss";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { PageInfos } from "../../../types/hadersType";
import { motion } from "framer-motion";

type Props = {

};

const NavbarContainer: FC<Props> = () => {
    const [scrol, setScrol] = useState(false);

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
                delay: 0.2,
                duration: 0.75,
            }}
            className={[`${style.container}`, `${scrol ? style.scrolled : ""}`].join(" ")}
            id="navbar">
            <div className={style.leftPart}>
                <div className={style.logoContainer}>
                    <img src="/img/logo.png" alt="Emulshoorm Logo" onClick={goToHome} />
                </div>

                <div className={style.item} onClick={() => router.push("/")}>Research</div>
                <div className={style.item}>Product</div>
                <div className={style.item} onClick={goToAboutUs}>About us</div>
                <div className={style.item}>Company</div>
            </div>
            <div className={style.rightPart}>
                {/* <div className={style.lenguageSwitch}>
                    <div className={style.item}>EN</div>
                    <div className={style.item}>IT</div>
                </div> */}
            </div>
        </motion.div>
    )
}

export default NavbarContainer;