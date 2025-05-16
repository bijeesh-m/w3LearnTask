import Counter from "./components/Counter";
import Todos from "./components/Todos";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";
import DataProvider, { msgContext } from "./context/DataProvider";
import { useContext } from "react";
import { themeContext } from "./context/ThemeProvider";

const App = () => {
    const { theme, setTheme } = useContext(themeContext);

    return (
        <div
            className=" min-h-screen"
            style={{
                backgroundColor: theme === "light" ? "white" : "black",
                color: theme === "light" ? "black" : "white",
            }}
        >
            <Header/>
            <Todos />
        </div>
    );
};

export default App;
