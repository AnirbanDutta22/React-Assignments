import React,{useState} from "react";
import '../style.css';

export default function Counter() {
    const [count,setCount] = useState(0);

    const countIncrement = (e)=>{
        setCount(count+1);
    }
    const countDecrement = (e)=>{
        setCount(count-1);
    }
    const countReset = (e)=>{
        setCount(0);
    }

    let result = count===5?true:false;
    let result2 = count===-5?true:false;
    return (
        <>
            <h1 className="heading">Counter App</h1>
            <div className="appArea">
                <button className="btn" onClick={countIncrement} disabled={result}>+</button>
                <h3 className="output">{count}</h3>
                <button className="btn" onClick={countDecrement} disabled={result2}>-</button>
                <button className="btn" onClick={countReset}>Reset</button>
            </div>
        </>
    );
}