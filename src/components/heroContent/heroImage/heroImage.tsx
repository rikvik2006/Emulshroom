import { FC } from 'react'
import style from "./index.module.scss"
import NavbarContainer from '../navbar/'

type Props = {}


const HeroImage: FC<Props> = () => {
    return (
        <div className={style.heroImageContainer}>
            <NavbarContainer />

            <img className={style.heroImage} src="/img/heroimage.jpg" alt="Heroimage" />

            <div className={style.heroTitleContainer}>
                <h1 className={style.heroTitle}>
                    Introducing the new mushroom ECO emulsifiers.
                </h1>
                <div className={style.buttonsContainer}>
                    <div className={style.button}>Learn more</div>
                    <a href="#" className={style.link}>View our research</a>
                </div>
            </div>
        </div>
    )
}

export default HeroImage