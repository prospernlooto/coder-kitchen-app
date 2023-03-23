import React, { useState } from "react";
import Kitchen from './screens/Kitchen';
import Navigation from './screens/global/Navigation';
import powerContext from "./providers/power";

function App() {
  const [powerStatus, setpowerStatus] = useState(true);

  return (
  <powerContext.Provider value={{ powerStatus, setpowerStatus }}>
    <Navigation/>
    <Kitchen />
</powerContext.Provider>
  );
}

export default App;
