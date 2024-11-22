import React from "react";

const Input = (props) => {
    return (
    <div className="col-10 col-md-8 col-lg-3 my-3 d-flex justify-content-center">
        <div className="input-group input-group-lg w-75">
            <span className="input-group-text bg-primary text-white" id="inputGroup-sizing-lg">Nº</span>
            <input id={props.type} type="number" min="1" max="999999" className="form-control bg-primary text-white" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
        </div>
    </div>
    )
}

export default Input;