import React from "react"

const Button = ({type,intervalID,countdownActive}) => {
    let buttonText = "Start";
    let buttonStyle = "btn-secondary";
    
    if (type==="stopCount" && intervalID){
        buttonText = "Stop";
        buttonStyle = "btn-primary";
    }
    
    if (countdownActive===false){
        buttonText = "Timer";
        buttonStyle = "btn-primary";
    } else if (countdownActive===true){
        buttonText = "Countdown";
        buttonStyle = "btn-secondary";
    }
    
    if (type === "restart"){
        buttonText = "Restart";
    }
    

    return (
    <div className="col-10 col-md-4 col-lg-3 d-flex justify-content-center my-3">
        <button id={type} className={"btn w-75 "+ buttonStyle} data-bs-toggle="button">
            {buttonText}
        </button>
    </div>)
}

export default Button;