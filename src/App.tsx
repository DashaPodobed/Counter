 import React, {useEffect, useState} from 'react';
// import './App.css';
// import Count from "./Count";
// import CountValue from "./CountValue/CountValue";
//
// function App() {
//     const [disabled, setDisabled] = useState<boolean>(true)
//
//     const [value, setValue] = useState<number>(0)
//
//     const [maxValue, setMaxValue] = useState<number>(0)
//
//     const changeMaxValue = (newMaxValue: number) => {
//         setMaxValue(newMaxValue)
//     }
//
//     const [startValue, setStartValue] = useState(0)
//     const changeStartValue = (newStartValue: number) => {
//         setStartValue(newStartValue)
//     }
//
//
//     const inc = () => {
//         value < maxValue && setValue(value + 1)
//     }
//
//     const reset = () => {
//         setDisabled(true)
//         setValue(0)
//     }
//
//     const set = () => {
//         setDisabled(false)
//         setValue(startValue)
//     }
//
//     useEffect(() => {
//         let maxValueAsString = localStorage.getItem('MaxValue')
//         let startValueAsString = localStorage.getItem('StartValue')
//         if (maxValueAsString) {
//             let newMaxValue = JSON.parse(maxValueAsString)
//             setMaxValue(newMaxValue)
//         }
//         if (startValueAsString) {
//             let newStartValue = JSON.parse(startValueAsString)
//             setStartValue(newStartValue)
//         }
//     }, [])
//
//     useEffect(() => {
//         localStorage.setItem('MaxValue', JSON.stringify(maxValue))
//         localStorage.setItem('StartValue', JSON.stringify(startValue))
//     }, [maxValue, startValue])
//
//     return (
//         <div>
//             <Count
//                 value={value}
//                 startValue={value}
//                 inc={inc}
//                 reset={reset}
//                 maxValue={maxValue}
//                 disabled={disabled}
//                 error={""}
//
//             />
//             <CountValue
//                 maxValue={maxValue}
//                 startValue={startValue}
//                 changeMaxValue={changeMaxValue}
//                 changeStartValue={changeStartValue}
//                 callback={set}
//                 disabled={disabled}
//             />
//         </div>
//     );
// }
//
// export default App;
