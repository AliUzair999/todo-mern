import { useState } from 'react';

import {useSelector, useDispatch} from "react-redux"
import {increment, decrement, incrementByAmount} from "../../store/actions/CounterAction"



export default function Login() {

    const dispatch = useDispatch()
    const [val, setVal] = useState(3)
  
    const reduxState = useSelector((state) => state)
    const reduxValue = useSelector((state) => state.CounterReducer.value)
  
    // console.log(reduxState, reduxValue)

    
    return <>
    <h3>Login Page</h3>
    <div>

     <p>value from Store {reduxValue}</p>
        <br />
        <button onClick={() => dispatch(increment(1))}>+</button>
        <br />
        <button onClick={() => dispatch(decrement(1))}>-</button>
        <br />
        <input type='number' placeholder='increase by' value={val} onChange={(e)=> setVal(parseInt(e.target.value))}/>
        <button onClick={() => dispatch(incrementByAmount(val))}>+ by</button>
        <br />
    </div>
    
    <button> Dashboard</button>
    </>
}