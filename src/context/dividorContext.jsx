import { createContext, useState } from "react";

export const DividorContext = createContext();

export function DividorProvider ({ children }) {

  const[palanca, setPalanca] = useState(false);

  return (
    <DividorContext.Provider value={{ setPalanca , palanca}}>
      {children}
    </DividorContext.Provider>
  );
};
