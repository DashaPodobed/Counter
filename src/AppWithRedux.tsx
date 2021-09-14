import React, {useEffect} from 'react';
import './App.css'
import Count from "./Count";
import CountValue from "./CountValue/CountValue";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./Redux/store";
import {ChangeDisabledValueAC, ChangeMaxValueAC, ChangeStartValueAC, IncAC, ResetAC, SetAC} from "./Redux/CountReducer";

function App() {

    const value = useSelector<AppRootStateType, number>(state => state.count.value)
    const maxValue = useSelector<AppRootStateType, number>(state => state.count.maxValue)
    const startValue = useSelector<AppRootStateType, number>(state => state.count.startValue)
    const error = useSelector<AppRootStateType, string>(state => state.count.error)
    const disabled = useSelector<AppRootStateType, boolean>(state => state.count.disabled)
    const dispatch = useDispatch()

    useEffect(() => {
        let maxValueAsString = localStorage.getItem('MaxValue')
        let startValueAsString = localStorage.getItem('StartValue')
        if (maxValueAsString) {
            let newMaxValue = JSON.parse(maxValueAsString)
            changeMaxValue(newMaxValue)
        }
        if (startValueAsString) {
            let newStartValue = JSON.parse(startValueAsString)
            changeStartValue(newStartValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('MaxValue', JSON.stringify(maxValue))
        localStorage.setItem('StartValue', JSON.stringify(startValue))
    }, [maxValue, startValue])

    const changeMaxValue = (newMaxValue: number) => {
        let action = ChangeMaxValueAC(newMaxValue)
        dispatch(action)
    }

    const changeStartValue = (newStartValue: number) => {
        let action = ChangeStartValueAC(newStartValue)
        dispatch(action)
    }

    const inc = () => {
        let action = IncAC()
        dispatch(action)
    }

    const reset = () => {
        let actionDispatch = ChangeDisabledValueAC(true)
        dispatch(actionDispatch)
        let action = ResetAC()
        dispatch(action)
    }

    const set = () => {
        let actionDispatch = ChangeDisabledValueAC(false)
        dispatch(actionDispatch)

        let action = SetAC(startValue)
        dispatch(action)
    }

    return (
        <div className={"App"}>
            <Count
                value={value}
                startValue={value}
                inc={inc}
                reset={reset}
                maxValue={maxValue}
                disabled={disabled}
                error={error}

            />
            <CountValue
                maxValue={maxValue}
                startValue={startValue}
                changeMaxValue={changeMaxValue}
                changeStartValue={changeStartValue}
                callback={set}
                disabled={disabled}
            />
        </div>
    );
}

export default App;
