import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrementCount, incrementCount, updateCount } from "../features/counterSlice";

const Counter = () => {
    const count = useSelector((states) => states.count);

    const [value, setValue] = useState("");

    const dispatch = useDispatch();

    const handleIncrementCount = () => {
        dispatch(incrementCount());
    };
    const handleDecrementCount = () => {
        dispatch(decrementCount());
    };

    const handleChangeValue = (event) => {
        setValue(Number(event.target.value));
    };

    const handleAddValue = () => {
        dispatch(updateCount(value));
    };

    return (
        <div className=" flex h-screen flex-col p-[100px] gap-2">
            <button onClick={handleDecrementCount} className=" border p-5  bg-red-100 text-red-800 rounded-full  ">
                Decrement
            </button>
            <h1 className="  p-5 text-center">{count}</h1>
            <button onClick={handleIncrementCount} className=" border p-5  bg-green-100 text-green-800 rounded-full">
                Increment
            </button>

            <input onChange={handleChangeValue} className=" border p-5 outline-none" type="number" />
            <button onClick={handleAddValue} className=" border p-5 bg-green-400">
                Add Value
            </button>
        </div>
    );
};

export default Counter;
