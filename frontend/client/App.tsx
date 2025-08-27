import { BrowserRouter, Route, Routes } from "react-router";
import {
  LoginPage,
  MainPage,
  HomePage,
  RegistrPage,
  ProfilePage,
  ChangeProfilePage,
  PostsPage,
  SettingsPage,
} from "client/pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registr" element={<RegistrPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/change" element={<ChangeProfilePage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
