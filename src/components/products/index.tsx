import { FC } from 'react'
import style from "./index.module.scss"
import linksStyle from "../../styles/links.module.scss"
import ProductCardGenerator from './product'

type Props = {}

const products = [
    {
        name: "Portion 500g",
        image: "/img/emulsionant.png",
        link: "#"
    },
    {
        name: "Portion 25kg",
        image: "/img/emulsionat10k.png",
        link: "#"
    },
    {
        name: "Portion 500g",
        image: "/img/emulsionant.png",
        link: "#"
    },
    {
        name: "Portion 25kg",
        image: "/img/emulsionat10k.png",
        link: "#"
    },
    {
        name: "Portion 500g",
        image: "/img/emulsionant.png",
        link: "#"
    },
    {
        name: "Portion 25kg",
        image: "/img/emulsionat10k.png",
        link: "#"
    },
]


const ProductsContainer: FC<Props> = () => {
    return (
        <>
            <div className={style.productsContainer}>
                <div className={style.header}>
                    <h2 className={style.title}>Products</h2>
                    <div className={style.description}>
                        Our company offers you our best and highest performing emulsifiers.
                        <br />
                        <div className={style.linkContainer}>
                            <a className={linksStyle.link} href="#">Explore our products</a>
                        </div>
                    </div>
                </div>
                <div className={style.productsList}>
                    <ProductCardGenerator products={products} />
                </div>
            </div>
        </>
    )
}

export default ProductsContainer