import React from "react";
import "./Screen.css"

type CountType = {
    startValue: number
    maxValue: number
    error: string
}
const Screen = (props: CountType) => {
    return (
        <div>
            <span className={props.startValue === props.maxValue ? "number-color" : ""}>
                {props.startValue > props.maxValue
                    ? <div className="number-color">{props.error}</div>
                    : props.startValue
                }
            </span>
        </div>
    )
}

export default Screen;