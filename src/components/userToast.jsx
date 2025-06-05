import React from "react";
import toast from "react-hot-toast";

const userToast = () => {
    const handleToast = () => {
        toast.custom((t) => (
            <div
                className={`${
                    t.visible ? "animate-enter" : "animate-leave"
                } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
                <div className="flex-1 w-0 p-4">
                    <p className="text-sm font-medium text-gray-900">Custom Message</p>
                    <p className="mt-1 text-sm text-gray-500">This is a custom toast with Tailwind.</p>
                </div>
                <button onClick={() => toast.dismiss(t.id)} className="text-gray-400 hover:text-gray-500 px-4">
                    ✖
                </button>
            </div>
        ));
    };
    return { handleToast };
};

export default userToast;
