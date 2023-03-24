import { NextPage } from "next"
import style from "../styles/introduction.module.scss"
import HeroImage from "@components/components/heroContent/heroImage/heroImage"
import MainContent from "@components/components/mainContent"
import ProductionContainer from "@components/components/production"
import ProductsContainer from "@components/components/products"

type Props = {

}

const HomePageTest: NextPage<Props> = () => {
    return (
        <>
            <HeroImage />
            <div className={style.border}>
                <MainContent />
                <hr />
                <ProductionContainer />
                <hr />
                <ProductsContainer />
            </div>
        </>
    )
}

export default HomePageTest