import './App.css';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import { motion } from "framer-motion"
import { Outlet, useLocation } from 'react-router-dom';


function App() {
    const location = useLocation();

    return (
        <div className="App">
            <motion.div 
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.75, type: "spring", delay: 1.5 }}
            >
                <NavBar />
            </motion.div>

            <Outlet />


        </div>
    );
}

export default App;
