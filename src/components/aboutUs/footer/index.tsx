import { FC, useEffect, useState } from "react"
import style from "./index.module.scss";

type Props = {}

const Footer: FC<Props> = () => {
    const [element, setElement] = useState<HTMLElement | null>();

    useEffect(() => {
        setElement(document.querySelector<HTMLElement>(`.${style.container}`))
    }, [])

    return (
        <div className={style.fillContainer}>
            <div className={style.fill}></div>
            <footer className={style.container}>
                <div className={style.logoContainer}>
                    <img src="/img/LogoBlue.png" alt="Logo" />
                </div>
                <div></div>
                <div className={style.section}>
                    <div className={style.title}>Product</div>
                    <div className={style.element}>Overview</div>
                    <div className={style.element}>Index</div>
                    <div className={style.element}>Emulsifiers</div>
                    <div className={style.element}>Pricing</div>
                </div>
                <div className={style.section}>
                    <div className={style.title}>Researc</div>
                    <div className={style.element}>Index</div>
                </div>
                <div className={style.section}>
                    <div className={style.title}>Careers</div>
                    <div className={style.element}>Join us</div>
                </div>
                <div className={style.section}>
                    <div className={style.title}>About</div>
                    <div className={style.element}>News</div>
                    <div className={style.element}>Contacts</div>
                </div>
            </footer>
            <div className={style.fill} ></div>
        </div>
    )
}

export default Footer