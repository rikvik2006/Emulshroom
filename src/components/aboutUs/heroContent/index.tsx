import { FC } from 'react'
import style from "./index.module.scss"

type Props = {}


const HeroContent: FC<Props> = () => {
    return (
        <div className={style.heroContainer}>
            <div className={style.heroDescription}>
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
            </div>
        </div>
    )
}

export default HeroContent