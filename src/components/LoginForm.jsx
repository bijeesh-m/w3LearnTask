import { useState } from "react";

const LoginForm = () => {
    const [formValues, setFormValues] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        console.log(formValues);
    };

    return (
        <div>
            <h1 className=" text-3xl text-center font-bold mb-5"> Register </h1>
            {/* <form onSubmit={handleRegister} className=" bg-indigo-300 p-10 text-xl h-full flex flex-col gap-4">
                <div className=" flex items-center h-full justify-between gap-2">
                    <label htmlFor="username">Username</label>
                    <input
                        onChange={(e) => setFormValues({ ...formValues, username: e.target.value })}
                        value={formValues.username}
                        className=" outline-none border px-4 py-2"
                        type="text"
                        name="username"
                        id="username"
                    />
                </div>
                <div className=" flex items-center h-full justify-between gap-2">
                    <label htmlFor="email">Email</label>
                    <input
                        onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                        value={formValues.email}
                        className=" outline-none border px-4 py-2"
                        type="email"
                        name="email"
                        id="email"
                    />
                </div>
                <div className=" flex items-center h-full justify-between gap-2">
                    <label htmlFor="mob">Phone No :</label>
                    <input
                        onChange={(e) => setFormValues({ ...formValues, phone: e.target.value })}
                        value={formValues.phone}
                        className=" outline-none border px-4 py-2"
                        type="tel"
                        name="mob"
                        id="mob"
                    />
                </div>
                <div className=" flex items-center h-full justify-between gap-2">
                    <label htmlFor="password">Password</label>
                    <input
                        onChange={(e) => setFormValues({ ...formValues, password: e.target.value })}
                        value={formValues.password}
                        className=" outline-none border px-4 py-2"
                        type="password"
                        name="password"
                        id="password"
                    />
                </div>

                <button className=" border bg-amber-300 text-sm py-2 rounded-full">Register</button>
            </form> */}
            <form onSubmit={handleRegister} className=" bg-indigo-300 p-10 text-xl h-full flex flex-col gap-4">
                <div className=" flex items-center h-full justify-between gap-2">
                    <label htmlFor="username">Username</label>
                    <input
                        onChange={handleChange}
                        value={formValues.username}
                        className=" outline-none border px-4 py-2"
                        type="text"
                        name="username"
                        id="username"
                    />
                </div>
                <div className=" flex items-center h-full justify-between gap-2">
                    <label htmlFor="email">Email</label>
                    <input
                        onChange={handleChange}
                        value={formValues.email}
                        className=" outline-none border px-4 py-2"
                        type="email"
                        name="email"
                        id="email"
                    />
                </div>
                <div className=" flex items-center h-full justify-between gap-2">
                    <label htmlFor="mob">Phone No :</label>
                    <input
                        onChange={handleChange}
                        value={formValues.phone}
                        className=" outline-none border px-4 py-2"
                        type="tel"
                        name="phone"
                        id="mob"
                    />
                </div>
                <div className=" flex items-center h-full justify-between gap-2">
                    <label htmlFor="password">Password</label>
                    <input
                        onChange={handleChange}
                        value={formValues.password}
                        className=" outline-none border px-4 py-2"
                        type="password"
                        name="password"
                        id="password"
                    />
                </div>

                <button className=" border bg-amber-300 text-sm py-2 rounded-full">Register</button>
            </form>
        </div>
    );
};

export default LoginForm;
