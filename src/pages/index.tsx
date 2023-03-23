import { NextPage } from "next"
import style from "../styles/introduction.module.scss"
import HeroImage from "@components/components/heroContent/heroImage/heroImage"
import MainContent from "@components/components/mainContent"

type Props = {

}

const HomePageTest: NextPage<Props> = () => {
    return (
        <>
            <HeroImage />
            <MainContent />
        </>
    )
}

export default HomePageTest