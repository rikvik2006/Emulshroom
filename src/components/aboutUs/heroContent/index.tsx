import { FC } from 'react'
import style from "./index.module.scss"
import { motion } from 'framer-motion'

type Props = {}


const HeroContent: FC<Props> = () => {
    return (
        <div
            className={style.heroContainer}>
            <div className={style.container}>

                <motion.div
                    initial={{ y: 25, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        delay: 0.2,
                        duration: 0.75,
                    }}
                    className={style.heroDescription}>
                    <h1 className={style.title}>
                        La natura li divide, noi li uniamo
                    </h1>
                    <div className={style.description}>
                        <div className={style.text}>Ci dedichiamo costantemente alla ricerca e allo sviluppo di nuove soluzioni per la produzione di emulsionanti, con un focus particolare sulla sostenibilità e sulla riduzione dell&apos;impatto ambientale.</div>
                        <div className={style.buttonContainer}>
                            <div className={style.button}>Learn about Emulshroom</div>
                            <a href="#" className={style.link}>View our research</a>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ y: 25, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        delay: 0.4,
                        duration: 0.75,
                    }}
                    className={style.imageContainer}>
                    <img src="/img/aboutusBanner.png" alt="" />
                </motion.div>
            </div>
        </div>
    )
}

export default HeroContent