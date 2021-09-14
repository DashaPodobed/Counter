type RESET_AT = {
    type: "RESET",
}

type INC_AT = {
    type: "INC",
}

type SET_AT = {
    type: "SET",
    newValue: number
}

type CHANGE_MAX_VALUE_AT = {
    type: "CHANGE_MAX_VALUE_AT",
    newMaxValue: number
}

type CHANGE_START_VALUE_AT = {
    type: "CHANGE_START_VALUE_AT",
    newStartValue: number
}

type CHANGE_DISABLED_VALUE_AT = {
    type: "CHANGE_DISABLED_VALUE_AT",
    newValue: boolean
}

type ActionType = RESET_AT | INC_AT | SET_AT | CHANGE_MAX_VALUE_AT | CHANGE_START_VALUE_AT | CHANGE_DISABLED_VALUE_AT

const InitialState = {
    value: 0,
    maxValue: 0,
    startValue: 0,
    disabled: true,
    error: "Incorrect value"
}

type InitialStateType = typeof InitialState

export const CountReducer = (state: InitialStateType = InitialState, action: ActionType) => {
    switch (action.type) {
        case "RESET":
            return {...state, value: state.value = 0, maxValue: state.maxValue = 0, startValue: state.startValue = 0}
        case "INC":
            return {...state, value: state.value + 1}
        case "SET":
            return {...state, value: state.value = state.startValue}
        case "CHANGE_MAX_VALUE_AT":
            return {...state, maxValue: action.newMaxValue}
        case "CHANGE_START_VALUE_AT":
            return {...state, startValue: action.newStartValue}
        case "CHANGE_DISABLED_VALUE_AT":
            return {...state, disabled: action.newValue}
        default:
            return state
    }
}

export const ResetAC = (): RESET_AT => {
    return {type: "RESET"}
}
export const IncAC = (): INC_AT=> {
    return {type: "INC"}
}
export const SetAC = (newValue: number): SET_AT=> {
    return {type: "SET", newValue}
}
export const ChangeMaxValueAC = ( newMaxValue: number):CHANGE_MAX_VALUE_AT => {
    return {type: "CHANGE_MAX_VALUE_AT", newMaxValue}
}
export const ChangeStartValueAC = (newStartValue: number):CHANGE_START_VALUE_AT => {
    return {type: "CHANGE_START_VALUE_AT", newStartValue}
}
export const ChangeDisabledValueAC = (newValue: boolean):CHANGE_DISABLED_VALUE_AT => {
    return {type: "CHANGE_DISABLED_VALUE_AT", newValue}
}
