import React, {ChangeEvent} from "react";
import {ChangeDisabledValueAC} from "../Redux/CountReducer";
import {useDispatch} from "react-redux";

type StartValueType = {
    title: string
    value: number
    changeValue: (newInputValue: number) => void
    className: string
    disabled: boolean
}
const InputValue = (props: StartValueType) => {
const dispatch = useDispatch()
    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeValue(e.currentTarget.valueAsNumber)
        let action = ChangeDisabledValueAC(true)
        dispatch(action)
    }

    return (
        <span>
        <h5>{props.title}</h5>
        <input
            className={props.className}
            type={"number"}
            value={props.value}
            onChange={changeValue}
        />
    </span>
    )
}
export default InputValue;