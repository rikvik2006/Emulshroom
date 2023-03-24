import { FC } from 'react'
import style from "./index.module.scss"

type Props = {}


const ProductsContainer: FC<Props> = () => {
    return (
        <>
            <div className={style.productsContainer}>
                <div className={style.header}>
                    <h2 className={style.title}>Products</h2>
                    <div className={style.description}>

                    </div>
                </div>
                <div className={style.productsList}>
                    <div className={style.product}>
                        <div className={style.image}> </div>
                        <div className={style.productName}></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsContainer