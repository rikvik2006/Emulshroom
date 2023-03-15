import { FC } from 'react'
import style from './index.module.scss'
import Image from "next/image"

type Props = {}


const NavbarContainer: FC<Props> = () => {
    return (
        <div className={style.container}>
            <div className={style.logoContainer}>
                <Image className={style.logo} alt='logo' src="https://imgur.com/BqPMnCm.png" width={30} height={30} />
            </div>
            <div className={style.links}>
                <div className={style.linkContainer}>
                    <a className="link" href='#'>About</a>
                </div>

                <div className={style.linkContainer}>
                    <a className="link" href='#'>Store</a>
                </div>

                <div className={style.linkContainer}>
                    <a className="link" href='#'>About</a>
                </div>

                <div className={style.linkContainer}>
                    <a className="link" href='#'>Contact</a>
                </div>
            </div>
        </div>
    )
}

export default NavbarContainer