import { NextPage } from "next"
import style from "../styles/introduction.module.scss"
import HeroImage from "@components/components/heroContent/heroImage/heroImage"
import MainContent from "@components/components/mainContent"
import ProductionContainer from "@components/components/production"
import ProductsContainer from "@components/components/products"
import Footer from "@components/components/footer"

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
                <hr />
                <Footer />
            </div>
        </>
    )
}

export default HomePageTest