import React, { createContext } from "react";

export const msgContext = createContext();

const DataProvider = ({ children }) => {
    const message = "New message,";
    const username = "New user";
    return (
        <div>
            <msgContext.Provider value={{message, username}}>
                {children}
            </msgContext.Provider>
        </div>
    );
};

export default DataProvider;
