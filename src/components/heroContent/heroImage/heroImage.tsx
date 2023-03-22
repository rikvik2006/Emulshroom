import { FC } from 'react'
import style from "./index.module.scss"
import NavbarContainer from '../navbar/'

type Props = {}


const HeroImage: FC<Props> = () => {
    return (
        <div className={style.heroImageContainer}>
            <NavbarContainer />

            <img className={style.heroImage} src="/img/heroimage.jpg" alt="Heroimage" />


        </div>
    )
}

export default HeroImage