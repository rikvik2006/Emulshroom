import { FC } from 'react'
import style from "./index.module.scss"
import NavbarContainer from '../navbar/'
import { motion } from 'framer-motion'

type Props = {}


const HeroImage: FC<Props> = () => {
    return (
        <div className={style.heroImageContainer}>
            <NavbarContainer />

            <img className={style.heroImage} src="/img/heroImage2.jpg" alt="Heroimage" />


            <motion.div
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    delay: 0.4,
                    duration: 0.75,
                }}
                className={style.heroTitleContainer}>
                <h1 className={style.heroTitle}>
                    Introducing the new mushroom ECO emulsifiers.
                </h1>
                <div className={style.buttonsContainer}>
                    <div className={style.button}>Learn about Emulshroom</div>
                    <a href="#" className={style.link}>View our research</a>
                </div>
            </motion.div>
        </div>
    )
}

export default HeroImage