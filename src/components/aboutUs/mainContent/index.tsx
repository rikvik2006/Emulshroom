import { FC } from 'react'
import ChiSiamo from './chiSiamo'
import Coltivazioni from './coltivazioni'

type Props = {}


const MainContent: FC<Props> = () => {
    return (
        <>
            <ChiSiamo />
            <hr />
            <Coltivazioni />
            <hr />
        </>
    )
}

export default MainContent