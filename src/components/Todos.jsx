import React, { useContext, useState } from "react";
import Counter from "./Counter";
import { msgContext } from "../context/DataProvider";

const Todos = () => {
    const { username } = useContext(msgContext);

    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");
    const [editMode, setEditMode] = useState(false);
    const [todoText, setTodoText] = useState("");
    const [editTodoId, setEditTodoId] = useState(null);

    const handleTodoChange = (event) => {
        setTodo(event.target.value);
    };

    // ADD TODO
    const handleAddTodo = () => {
        const newTodo = { todoText: todo, completed: false, todoId: Date.now() };
        setTodos((prev) => [...prev, newTodo]);
        setTodo("");
    };

    // EDIT TODO
    const handleEdit = (tText, tId) => {
        setEditMode(true);
        setTodoText(tText);
        setEditTodoId(tId);
    };

    // EDIT TODO TEXT
    const handleChange = (event) => {
        setTodoText(event.target.value);
    };

    // SAVE TODO
    const handleSaveTodo = () => {
        const uTodos = todos.map((todo) => {
            if (todo.todoId === editTodoId) {
                todo.todoText = todoText;
            }
            return todo;
        });

        setTodos(uTodos);
        setEditMode(false);
    };

    // DELETE TODO

    const handleDeleteTodo = (tId) => {
        setTodos((prev) => prev.filter((todo) => todo.todoId !== tId));

        // const uTodos = todos.filter((todo) => todo.todoId !== tId);
        // setTodos(uTodos);
    };
    console.log(username);

    return (
        <div className=" flex justify-center flex-col items-center gap-4 ">
            {username}
            <div className=" mt-5  flex w-xl ">
                <input
                    onChange={handleTodoChange}
                    className=" border outline-none flex-1 p-3 "
                    type="text"
                    value={todo}
                    name=""
                    id=""
                />

                <button onClick={handleAddTodo} className=" border outline-none p-3 ">
                    Add Todo
                </button>
            </div>

            <div className=" bg-amber-50 h-72 overflow-y-scroll w-xl">
                {todos.map((todo) => {
                    return (
                        <div key={todo.todoId} className=" flex justify-between p-2">
                            {editMode && todo.todoId === editTodoId ? (
                                <div className=" flex justify-between p-2 w-full ">
                                    <input
                                        onChange={handleChange}
                                        className=" outline-none border px-3 py-1"
                                        type="text"
                                        name=""
                                        id=""
                                        value={todoText}
                                    />
                                    <button className=" border px-3 py-1 rounded" onClick={handleSaveTodo}>
                                        Save
                                    </button>
                                </div>
                            ) : (
                                <div className=" flex justify-between p-2 w-full">
                                    <li>{todo.todoText}</li>
                                    <div className=" flex gap-2">
                                        <button
                                            onClick={() => handleEdit(todo.todoText, todo.todoId)}
                                            className=" border px-2 py-1 rounded"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDeleteTodo(todo.todoId)}
                                            className=" border px-2 py-1 rounded"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
            <Counter />
        </div>
    );
};

export default Todos;
