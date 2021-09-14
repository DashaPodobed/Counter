import React from "react";
import Screen from "./Count/Screen";
import UniversalButton from "./Count/UniversalButton/UniversalButton";


type CountType = {
    value: number
    inc: () => void
    reset: () => void
    maxValue: number
    startValue: number
    disabled: boolean
    error: string
}

const Count: React.FC<CountType> = ({startValue, inc, reset, maxValue, disabled, error, value}) => {

    return (
        <div className={"form-group"}>
            <div className={"form-count"}>
                <Screen startValue={startValue} maxValue={maxValue}  error={error}/>
            </div>
            <div className={"form-btn"}>
                <UniversalButton callback={inc} title={"inc"} disabled={disabled || startValue === maxValue || startValue > maxValue}/>
                <UniversalButton callback={reset} title={"reset"} disabled={disabled || maxValue > value}/>
            </div>
        </div>
    )
}

export default Count;