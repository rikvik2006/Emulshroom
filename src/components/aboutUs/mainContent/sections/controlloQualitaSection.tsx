import { FC } from "react";
import style from "./index.module.scss";

const ContrlloQualitaSection: FC = () => {
    return (
        <div className={style.container}>
            <h3 className={style.sectionTitle}>Contrllo qualità</h3>
            <div className={style.sectionDescription}>Grazie ad analisi spettrofotometriche a campione, riusciamo a garantire il grado di purezza più elevato (99,9999%).</div>
        </div>
    )
}

export default ContrlloQualitaSection