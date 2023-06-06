import { FC } from "react";
import style from "./index.module.scss";
import { validateHeaderValue } from "http";
import BottomFooterLine from "./bottomFooterLine";

type Props = {
    bg_color: string
    element_color: string
}

const BottomFooter: FC<Props> = ({ bg_color, element_color }) => {
    return (
        <div className={style.container} style={{ backgroundColor: bg_color }}>
            {
                Array.from(Array(23).keys()).map((margin) => {
                    return (
                        <BottomFooterLine key={margin} element_color={element_color} height={`${23 - margin}px`} margin_top={`${margin}px`} />
                    )
                })
            }
        </div>
    )
}

export default BottomFooter