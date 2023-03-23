import React, { useContext } from 'react';
import powerContext from '../../providers/power';

const MainPower = () => {
    const {setpowerStatus} = useContext(powerContext);
    const switchOnPower = () => setpowerStatus(true);
    const switchOffPower = () => setpowerStatus(false);
  return (
    <div>
    <span className="navbar-text">
        Main Switch
      </span>
    <span onClick={switchOnPower} className="navbar-text btn btn-success mx-2">
        On
    </span>
      <span onClick={switchOffPower} className="navbar-text btn btn-secondary">
        off
      </span>
    </div>
    
  )
}
export default MainPower
