import { FC } from 'react'
import style from "./index.module.scss"
import linksStyle from "../../styles/links.module.scss"

type Props = {}


const ProductionContainer: FC<Props> = () => {
    return (
        <>
            <div className={style.productionContainer}>
                <h2 className={style.title}>Production</h2>
                <div className={style.textContainer}>
                    <p>
                        Our company recognizes the importance of producing our product in a safe and sustainable manner. We are committed to following safety regulations and adopting the most effective practices to reduce the environmental impact of our production.<br />
                        The safety of our workers and customers is a top priority, and we are constantly working to improve working conditions and the quality of our product.
                    </p>
                    <a className={linksStyle.link} href="#">View about our production</a>
                </div>
            </div>
        </>
    )
}

export default ProductionContainer