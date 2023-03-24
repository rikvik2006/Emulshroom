import { FC, useEffect, useState } from "react";
import style from "./index.module.scss";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { PageInfos } from "../../../types/hadersType";

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
        <div className={[`${style.container}`, `${scrol ? style.scrolled : ""}`].join(" ")} id="navbar">
            <div className={style.leftPart}>
                <div className={style.logoContainer}>
                    <img src="/img/logo.png" alt="Emulshoorm Logo" onClick={goToHome} />
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
        </div >
    )
}

export default NavbarContainer;