import {BrowserRouter, Route, Routes} from "react-router";
import LoginPage from "./components/pages/LoginPage.tsx";
import MainPage from "./components/pages/MainPage.tsx";
import RegisterPage from "./components/pages/RegistrPage.tsx";
import ProfilePage from "./components/pages/ProfilePage.tsx";
import ChangeProfilePage from "./components/pages/СhangeProfilePage.tsx";
import HomePage from "./components/pages/HomePage.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path="/home" element={<MainPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/registr" element={<RegisterPage/>}/>
                <Route path="/profile" element={<ProfilePage/>}/>
                <Route path="/change" element={<ChangeProfilePage/>}/>
            </Routes>

        </BrowserRouter>
    )
}

export default App