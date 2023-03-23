import { createContext } from "react";

const powerContext = createContext({
  powerStatus: false,
  setpowerStatus: (power) => {}
});

export default powerContext;
