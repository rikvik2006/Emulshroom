import { FC } from "react";
import style from "./index.module.scss";

type Props = {

}

const ProduzioneSection: FC<Props> = () => {
    return (
        <div className={style.container}>
            <h3 className={style.sectionTitle}>Produzione</h3>
            <div className={style.sectionDescription}>Dopo la raccolta delle spore, usiamo dei bioreattori alimentati da fonti rinnovabili per la fermentazione a stato di sommersione, che garantisce la maggior attività enzimatica della lipasi.</div>
        </div>
    )
}

export default ProduzioneSection