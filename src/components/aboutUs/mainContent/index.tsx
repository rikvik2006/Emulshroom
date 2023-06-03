import { FC } from 'react'
import ChiSiamo from './chiSiamo'
import Coltivazioni from './coltivazioni'
import ProduzioneSection from './sections/produzioneSection'
import ContrlloQualitaSection from './sections/controlloQualitaSection'
import ScegliereNoiSection from './sections/scegliereNoiSection'

type Props = {}


const MainContent: FC<Props> = () => {
    return (
        <>
            <ChiSiamo />
            <hr />
            <Coltivazioni />
            <hr />
            <ProduzioneSection />
            <hr />
            <ContrlloQualitaSection />
            <hr />
            <ScegliereNoiSection />
        </>
    )
}

export default MainContent