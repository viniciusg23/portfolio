import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { FirstLoadProvider } from "./context/FirstLoadProvider";


function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <FirstLoadProvider>
                    <AnimatedRoutes />
                </FirstLoadProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
