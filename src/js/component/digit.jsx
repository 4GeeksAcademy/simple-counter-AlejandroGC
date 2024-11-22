import React from "react";

const Digit = (props) => {
    return (
        <div className="col-2 px-0 d-flex justify-content-center">
            <div className="digit col-9 col-sm-10 border border-3 border-dark border-opacity-25 rounded text-center text-white px-0 bold">
                {props.icon ? <i className="timer-icon fa-regular fa-clock"></i>
                : props.unit ? props.unit : 0}
            </div>
        </div>
    )
}

export default Digit;