import React from "react";
import Digit from "./digit";

const Number = (props) => {
    let num = props.time + "";
    let arr = num.split("");
    
    return (
        <div className="col-10 p-0 d-flex justify-content-around">
            <Digit unit={arr[arr.length-6]}/>
            <Digit unit={arr[arr.length-5]}/>
            <Digit unit={arr[arr.length-4]}/>
            <Digit unit={arr[arr.length-3]}/>
            <Digit unit={arr[arr.length-2]}/>
            <Digit unit={arr[arr.length-1]}/>
        </div>
    )
}

export default Number;