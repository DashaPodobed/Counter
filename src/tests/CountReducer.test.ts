import {CountReducer, IncAC, ResetAC} from "../Redux/CountReducer";
import {InitialStateType} from "../Redux/StartValueReducer";

let startState: InitialStateType

beforeEach( ()=>{
    startState = {
        value: 5
    }
})

test('reset value', ()=>{
    const endState  = CountReducer(startState, ResetAC())

    expect(endState.value).toBe(0)
})

test('inc value', ()=>{

    const endState = CountReducer(startState, IncAC())
    expect(endState.value).toBe(6)

})


