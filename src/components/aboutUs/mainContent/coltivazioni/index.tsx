import { FC } from "react";
import style from "./index.module.scss";

type Props = {};

const Coltivazioni: FC<Props> = () => {
    return (
        <div className={style.container}>
            <div className={style.introductionContainer}>
                <h3>Coltivazioni</h3>
                <div className={style.description}>
                    Il nostro fungo (rhizopus oligosporus) viene coltivato su un
                    substrato di riso lavorato, che garantisce la maggiore
                    produzione di inoculo.
                </div>
            </div>
            <div className={style.coltivazioniContainer}>
                <div className={style.imageContainer}>
                    <img src="/img/emulsionantBackground.png" alt="" />
                </div>
                <div className={style.imageContainer}>
                    <img src="/img/emulsionantBackground.png" alt="" />
                </div>
                <div className={style.imageContainer}>
                    <img src="/img/emulsionantBackground.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Coltivazioni;
