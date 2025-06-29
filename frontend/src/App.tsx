import {BrowserRouter, Route, Routes} from "react-router";
import LoginPage from "./components/pages/LoginPage.tsx";
import MainPage from "./components/pages/MainPage.tsx";
import RegisterPage from "./components/pages/RegistrPage.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/registr" element={<RegisterPage/>}/>
            </Routes>

        </BrowserRouter>
    )
}

export default App