import React, { FC } from "react";

type Props = {
    element_color: string;
    margin_top: string
    height: string;
}

const BottomFooterLine: FC<Props> = ({ element_color, margin_top, height }) => {
    const style: React.CSSProperties = {
        backgroundColor: element_color,
        marginTop: margin_top,
        height: height,
    }
    return (
        <div style={style}></div>
    )
}

export default BottomFooterLine