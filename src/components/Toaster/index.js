import React, { useState, useRef, useContext, useEffect} from 'react';
import powerContext from '../../providers/power';

const Toaster = (props) => {
const {name} = props
const {powerStatus} = useContext(powerContext);
const [statusText, setStatusText] = useState("Off");
const [statuStyle, setStatuStyle] = useState("text-muted");
const [toastTimer, settoastTimer] = useState();
const interval = useRef();
const electricity = useRef();

const toasterImage = require('../../assets/images/toaster.jpg');

 useEffect(() => {
  electricity.current = powerStatus;
  console.log("electricity: " + electricity.current)
});

const handleToast = () => {
 if(!powerStatus)
 {
  alert("Electricity is off.");
    return;
 }

 if(toastTimer > 0){
    alert("toaster is on");
    return;
 }

 clearInterval(interval.current);
 var value = 0;

  settoastTimer(value);
  setStatusText("On");
  setStatuStyle('text-success');
  interval.current = setInterval(() => {
  value++;
    if (!electricity.current || value == 30) {
      value = 0;
      handleCancel();
    }
    settoastTimer(value);
  }, 1000);
};

const handleCancel = () => {
  setStatusText("Off");
  setStatuStyle('text-muted'); 

  if (interval.current) {
    settoastTimer(0);
    clearInterval(interval.current);
    alert("toaster is off");
    return;
  }
};

  return (
  <div className="card">
  <img className="card-img-top" src={toasterImage} alt="Card image cap"></img>
  <div className="card-body">
    <h5 className="card-title">Toaster {name}</h5>
    <h6 className={`card-subtitle mb-2 ${statuStyle}`}>{statusText}<br/> 
    {toastTimer > 0 && <span style={{fontSize:"small"}}>{'timer: '}{toastTimer}</span>}
    </h6>
    <p className="card-text text-justify">Pushing the "toast" button turns on the toaster. Once on, the toaster will toast for 30 seconds before automatically turning off and
    popping the toast. Pushing the "cancel" button at any point will turn the toaster off and pop the toast.</p>
    <span onClick={handleToast}  className="btn btn-primary btn-md text-uppercase" style={{marginRight: 5, width:100}}>Toast</span>
    <span onClick={handleCancel} className="btn btn-danger btn-md text-uppercase" style={{width:100}}>Cancel</span>
  </div>
</div>
  )
}

export default Toaster
