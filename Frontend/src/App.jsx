import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import AboutUsPage from "./Pages/AboutUsPage/AboutUsPage";
import ServicesPage from "./Pages/ServicesPage/ServicesPage";
import ContactUsPage from "./Pages/ContactUsPage/ContactUsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/aboutUs" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contactUs" element={<ContactUsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
