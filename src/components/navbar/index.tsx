import { FC } from 'react'
import style from './index.module.scss'

type Props = {}


const NavbarContainer: FC<Props> = () => {
    return (
        <div className={style.container}>
            <div className={style.logo}></div>
            <div className={style.links}>

            </div>
        </div>
    )
}

export default NavbarContainer