import { FC, useEffect, useState } from "react";
import style from "./index.module.scss";

type Props = {};

const NavbarContainer: FC<Props> = () => {
    const [scroll, setScroll] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 66) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    }

    useEffect(() => {
        changeBackground();

        window.addEventListener("scroll", changeBackground);
    })

    return (
        <div className={[`${style.container}`, `${scroll ? style.scrolled : ""}`].join(" ")} id="navbar">
            <div className={style.leftPart}>
                <div className={style.logoContainer}>
                    <img src="/img/logo.png" alt="Emulshoorm Logo" />
                </div>

                <div className={style.item}>Research</div>
                <div className={style.item}>Product</div>
                <div className={style.item}>About us</div>
                <div className={style.item}>Company</div>
            </div>
            <div className={style.rightPart}></div>
        </div>
    )
}

export default NavbarContainer;