import { NextPage } from "next"
import style from "../styles/introduction.module.scss"
import HeroImage from "@components/components/heroContent/heroImage/heroImage"

type Props = {

}

const HomePageTest: NextPage<Props> = () => {
    return (
        <>
            <HeroImage />
        </>
    )
}

export default HomePageTest