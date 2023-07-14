import React, { createContext, useState } from "react";

// Buat context baru
export const BalanceContext = createContext({ balanceRef: 500000 });


// Buat provider untuk mengatur state balanceRef
export const BalanceProvider = ({ children }) => {
    const [balanceRef, setBalanceRef] = useState(500000);
  
    return (
      <BalanceContext.Provider value={{ balanceRef, setBalanceRef }}>
        {children}
      </BalanceContext.Provider>
    );
  };
  
