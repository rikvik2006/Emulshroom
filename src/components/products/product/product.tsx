import { FC } from 'react'
import style from "./product.module.scss"

type Product = {
    name: string;
    image: string;
    link: string;
}

type Props = {
    product: Product;
}

const ProductCard: FC<Props> = ({ product }) => {
    return (
        <div key={product.name} className={style.product}>
            <div className={style.imageContainer} id="cardImage">
                <img className={style.image} src={product.image} alt={product.name} />
            </div>
            <div className={style.productName}>{product.name}</div>
        </div>
    )
}

export default ProductCard