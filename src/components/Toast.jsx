import React from "react";
import toast from "react-hot-toast";
import userToast from "./userToast.jsx";

const Toast = () => {
    const {handleToast} = userToast()
    const handleToasting = () => {
        handleToast()
    };

    return (
        <div>
            <button onClick={handleToasting}>Make a toast</button>
        </div>
    );
};

export default Toast;
