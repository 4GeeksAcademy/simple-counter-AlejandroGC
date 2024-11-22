import React from "react";
import Number from "./number";
import Digit from "./digit";
import Button from "./button";
import Input from "./input"

//create your first component
const Home = ({time,intervalID,countdownActive}) => {
	return (
		<div className="container-fluid bg-black d-flex justify-content-center">
			<div className="row d-flex justify-content-center my-3 w-100">
				<Digit icon={true}/>
				<Number time={time}/>

				<div className="row d-flex justify-content-center my-3">
					<Button type="stopCount" intervalID={intervalID}/>
					<Button type="restart"/>
					<Button type="countdown" countdownActive={countdownActive}/>
					<Input type="startNumber"/>
				</div>
			</div>
		</div>
	);
};

export default Home;
