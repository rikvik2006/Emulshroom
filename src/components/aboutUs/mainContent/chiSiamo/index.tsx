import { FC } from "react";
import style from "./index.module.scss";

const ChiSiamo: FC = () => {
    return (

        <div className={style.container}>
            <h2>Chi siamo</h2>
            <div className={style.description}>
                Emulshroom è un’ azienda che produce emulsionanti di grado alimentare, cosmetico e farmaceutico. Offriamo la migliore qualità di lipasi esistente, al minor costo possibile.
            </div>
        </div>
    )
}

export default ChiSiamo;