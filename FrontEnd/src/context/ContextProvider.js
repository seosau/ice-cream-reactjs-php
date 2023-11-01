import { createContext, useContext } from "react";
import { useState } from "react";
const StateContext = createContext({
    currentUser: {},
    setcurrentUser: () => {},
    userToken: null,
    setUserToken: () => {},
    toast: {
        message: null,
        show: false,
    },
});
export const ContextProvider = ({ children }) => {
    const [currentUser, setcurrentUser] = useState({});
    const [userToken, _setUserToken] = useState(
        localStorage.getItem("TOKEN") || ""
    );

    const setUserToken = (token) => {
        if (token) {
            localStorage.setItem("TOKEN", token);
        } else {
            localStorage.removeItem("TOKEN");
        }
        _setUserToken(token);
    };

    const [toast, setToast] = useState({ message: "", show: false });
    const showToast = (message) => {
        setToast({ message, show: true });
    };
    return (
        <StateContext.Provider
            value={{
                currentUser,
                setcurrentUser,
                userToken,
                setUserToken,
                toast,
                showToast,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
