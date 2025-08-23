import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from "./components/pages/LoginPage.tsx";
import MainPage from "./components/pages/MainPage.tsx";
import RegisterPage from "./components/pages/RegistrPage.tsx";
import ProfilePage from "./components/pages/ProfilePage.tsx";
import ChangeProfilePage from "./components/pages/СhangeProfilePage.tsx";
import HomePage from "./components/pages/HomePage.tsx";
import PostsPage from "./components/pages/PostsPage.tsx";
import SettingsPage from "./components/pages/SettingsPage.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registr" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/change" element={<ChangeProfilePage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
