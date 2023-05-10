import { NextPage } from "next"
import style from "../styles/introduction.module.scss"
import HeroImage from "@components/heroContent/heroImage/heroImage"
import MainContent from "@components/mainContent"
import ProductionContainer from "@components/production"
import ProductsContainer from "@components/products"
import Footer from "@components/footer"

type Props = {

}

const HomePageTest: NextPage<Props> = () => {
    return (
        <>
            <style jsx global>
                {`
                    ::selection {
                        background: #ffffff;
                        color: #000000;
                    }
                `}
            </style>
            <HeroImage />

            <div className={style.container}>
                <div className={style.border}>
                    <MainContent />
                    <hr />
                    <ProductionContainer />
                    <hr />
                    <ProductsContainer />
                    <hr />
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default HomePageTest