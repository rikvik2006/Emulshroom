import { FC } from 'react'
import style from "../index.module.scss"
import ProductCard from './product';

type Props = {
    products: ProductType[];
}

type ProductType = {
    name: string;
    image: string;
    link: string;
}

const ProductCardGenerator: FC<Props> = ({ products }) => {
    return (
        <>
            {products.map((product, index) => {
                return (
                    <ProductCard product={product} key={index} />
                )
            })}
        </>
    )

}

export default ProductCardGenerator