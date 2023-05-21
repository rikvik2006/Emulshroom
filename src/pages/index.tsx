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

            {/* Noise effect */}
            <svg className={style.displayNone}>
                <defs>
                    <filter id="noise">
                        <feTurbulence
                            baseFrequency="0.7,0.8"
                            seed="0"
                            type="fractalNoise"
                            result="static">

                        </feTurbulence>
                        <feDisplacementMap in="SourceGraphic" in2="static" scale="0">
                            <animate
                                attributeName="scale"
                                values="0;40;0"
                                dur="800ms"
                                repeatCount="1"
                                begin="cardImage.mouseenter"
                            />
                        </feDisplacementMap>
                    </filter>
                </defs>
            </svg >
        </>
    )
}

export default HomePageTest