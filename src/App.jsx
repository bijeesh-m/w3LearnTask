import Counter from "./components/Counter";
import Todos from "./components/Todos";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";
import DataProvider, { msgContext } from "./context/DataProvider";
import { useContext } from "react";
import { themeContext } from "./context/ThemeProvider";
import LoginPage from "./pages/LoginPage";
import RegisterForm from "./components/RegisterForm";
import Posts from "./components/Posts";
import Toast from "./components/Toast";
import { Toaster } from "react-hot-toast";

const App = () => {
    // const { theme, setTheme } = useContext(themeContext);

    return (
        <div className=" min-h-screen flex justify-center items-center">
            {/* <Toaster/> */}
            {/* <LoginPage/> */}
            {/* <RegisterForm /> */}
            {/* <Posts/> */}
            <Counter />
        </div>
    );
};

export default App;
