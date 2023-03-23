import { FC } from "react"
import style from "./index.module.scss"

type Props = {}

const MainContent: FC<Props> = () => {
    return (
        <div className={style.container}>
            <div className={style.gridContent}>
                <div className={style.contentImage}>
                    <img src="/img/emulsionant.png" alt="Emulsionant Product" />
                </div>
                <div className={style.descriptionContainer}>
                    <h3 className={style.titleDescription}>Emulsifiers</h3>
                    <div className={[style.descriptionText, style.left].join(" ")}>
                        <p>An emulsifier is a substance that helps mix together two liquids that would not normally mix well.
                        </p>
                        <p>This happens because emulsifiers have a molecular structure that has both hydrophilic parts (which bind to water) and lipophilic parts (which bind to oil). In this way, the emulsifier can stabilize the emulsion and prevent the liquids from separating again.</p>
                    </div>
                </div>
                <div className={style.descriptionContainer}>
                    <h3 className={style.titleDescription}>Emushroom for
                        Business</h3>
                    <div className={[style.descriptionText, style.right].join(" ")}>
                        <p>
                            Welcome to the world of emulsifiers, where oil and water can finally put their differences aside and create something amazing together.
                        </p>
                        <p>
                            Are you a Business? <span>Emushroom</span> for Business is a platform that helps you to find the best emulsifier for your business.
                            With industial quantity up to 100kg for box.
                        </p>
                    </div>
                </div>
                <div className={style.contentImage}>
                    <img src="/img/emulsionat10k.png" alt="Emulsionant Product" />
                </div>
            </div>
        </div>
    )
}

export default MainContent