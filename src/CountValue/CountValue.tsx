import React from "react";
import SetButton from "./SetButton";
import InputValue from "./inputValue";

type CountValueType = {
    maxValue: number
    startValue: number
    changeMaxValue: (newMaxValue: number) => void
    changeStartValue: (newCountValue: number) => void
    callback: () => void
    disabled: boolean
}
const CountValue = (props: CountValueType) => {
    return (
        <div className="form-group">
            <div>
                <InputValue
                    className={props.startValue < 0 ? "input-error" : ""}
                    title={"start value"}
                    value={props.startValue}
                    changeValue={props.changeStartValue}
                    disabled={props.disabled}
                />
                <InputValue
                    className={props.maxValue < 0 ? "input-error" : ""}
                    title={"max value"}
                    value={props.maxValue}
                    changeValue={props.changeMaxValue}
                    disabled={props.disabled}
                />

            </div>
            <div>
                <SetButton
                    maxValue={props.maxValue}
                    startValue={props.startValue}
                    callback={props.callback}
                    disabled={props.disabled}
                />
            </div>
        </div>
    )
}

export default CountValue;