import React, { useState } from "react";

const RegisterForm = () => {
    const [formValues, setFormValues] = useState({
        username: "",
        email: "",
        password: "",
        phone: "",
    });

    const [formErrors, setFormErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSumbit = (event) => {
        event.preventDefault();

        const errors = validate(formValues);

        if (Object.keys(errors).length === 0) {
            //submission logic
            console.log(formValues);
            setFormErrors({});
        } else {
            setFormErrors(errors);
        }
    };

    const validate = (values) => {
        const errors = {};

        if (!values.username) {
            errors.username = "This field is required!";
        } else if (values.username.length < 3) {
            errors.username = "Minim 3 characters!";
        }

        if (!values.email) {
            errors.email = "This field is required!";
        }

        if (!values.password) {
            errors.password = "This field is required!";
        } else if (values.password.length < 8) {
            errors.password = "Minimum 8 characters required";
        }
        if (!values.phone) {
            errors.phone = "This field is required!";
        } else if (values.phone.length != 10) {
            errors.phone = "Enter a valid mobile number";
        }

        return errors;
    };

    return (
        <div>
            <form
                onSubmit={handleSumbit}
                className=" bg-blue-700 flex flex-col gap-3 px-[20px] py-[50px] w-md rounded text-white"
            >
                <label htmlFor="username">Username</label>
                <input
                    className={` border outline-none px-2 py-2 rounded-md ${formErrors.username && "border-red-500"}`}
                    type="text"
                    name="username"
                    id="username"
                    onChange={handleChange}
                    value={formValues.username}
                />
                {formErrors.username && <p className=" text-red-500 text-xs font-bold">{formErrors.username}</p>}

                <label htmlFor="email">Email</label>
                <input
                    className={` border outline-none px-2 py-2 rounded-md ${formErrors.email && "border-red-500"}`}
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    value={formValues.email}
                />
                {formErrors.email && <p className=" text-red-500 text-xs font-bold">{formErrors.email}</p>}
                <label htmlFor="password">Password</label>
                <input
                    className={` border outline-none px-2 py-2 rounded-md ${formErrors.password && "border-red-500"}`}
                    type="password"
                    name="password"
                    id="password"
                    onChange={handleChange}
                    value={formValues.password}
                />
                {formErrors.password && <p className=" text-red-500 text-xs font-bold">{formErrors.password}</p>}
                <label htmlFor="phone">Phone No:</label>
                <input
                    className={` border outline-none px-2 py-2 rounded-md ${formErrors.phone && "border-red-500"}`}
                    type="tel"
                    name="phone"
                    id="phone"
                    onChange={handleChange}
                    value={formValues.phone}
                />
                {formErrors.phone && <p className=" text-red-500 text-xs font-bold">{formErrors.phone}</p>}
                <button className=" border py-4 rounded-md bg-black cursor-pointer">Register</button>
            </form>
        </div>
    );
};

export default RegisterForm;
