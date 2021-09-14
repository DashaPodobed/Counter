import React from "react";
import "./UniversalButton.css"

type UniversalButtonType = {
    title: string
    callback: () => void
    disabled: boolean
}

const UniversalButton: React.FC<UniversalButtonType> = ({title, callback, disabled}) => {

    return (
        <button
            onClick={callback}
            disabled={disabled}
        >{title}</button>)
}

export default UniversalButton;