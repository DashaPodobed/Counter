import React from "react";
type SetButtonType = {
    callback: () => void
    disabled: boolean
    startValue: number
    maxValue: number
}

const SetButton = (props: SetButtonType) => {

    return (

        <div>
            <button
                onClick={props.callback}
                disabled={!props.disabled || props.startValue < 0 || props.maxValue < 0 }
            >set</button>
        </div>
    )
}

export default SetButton;