import { FC } from "react";
import style from "./index.module.scss";
import { TbArrowUpRight } from "react-icons/tb"

const ScegliereNoiSection: FC = () => {
    return (
        <div className={style.container}>
            <h3 className={style.sectionTitle}>Perché scegliere noi</h3>
            <div className={style.descriptionContainer}>
                <div className={style.sectionDescription}>Mettiamo sempre al primo posto la soddsfazione dei nostri clisenti, offriamo prodotti di alta qualità a prezzi competitivi, il nostro team è composto da esperti altamente qualificati che garantisce la massima professionalità in ogni fase del processo.<br />Per maggiori informazioni cliccare sul link.
                </div>
                <div className={style.outLinkContainer}>
                    <div className={style.outLinkPage}>Maggiori informazioni</div>
                    <TbArrowUpRight className={style.arrowUpRight} />
                </div>
            </div>
        </div>
    )
}

export default ScegliereNoiSection