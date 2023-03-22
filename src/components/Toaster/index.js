import React, { useState, useRef } from 'react';

const Toaster = () => {

const [status, setStatus] = useState(false);
const [statusText, setStatusText] = useState("Off");
const [statuStyle, setStatuStyle] = useState("text-muted");
const [toastTimer, settoastTimer] = useState();
const interval = useRef();

const toasterImage = require('../../assets/images/toaster.jpg');

const handleToast = () => {
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
    if (value == 30) {
      value = 0;
      handleCancel();
    }
    settoastTimer(value);
  }, 1000);
};

const handleCancel = () => {

  if(toastTimer == 0){
    
    return;
  }
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
  <img class="card-img-top" src={toasterImage} alt="Card image cap"></img>
  <div className="card-body">
    <h5 className="card-title">Toaster</h5>
    <h6 className={`card-subtitle mb-2 ${statuStyle}`}>{statusText} {'timer: '}{toastTimer}</h6>
    <p className="card-text text-justify">Pushing the "toast" button turns on the toaster. Once on, the toaster will toast for 30 seconds before automatically turning off and
    popping the toast. Pushing the "cancel" button at any point will turn the toaster off and pop the toast.</p>
    <span onClick={handleToast}  className="btn btn-primary btn-md text-uppercase" style={{marginRight: 5, width:100}}>Toast</span>
    <span onClick={handleCancel} className="btn btn-danger btn-md text-uppercase" style={{width:100}}>Cancel</span>
  </div>
</div>
  )
}

export default Toaster
