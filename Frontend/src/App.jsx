import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import AboutUsPage from "./Pages/AboutUsPage/AboutUsPage";
import ServicesPage from "./Pages/ServicesPage/ServicesPage";
import ContactUsPage from "./Pages/ContactUsPage/ContactUsPage";
import ContactUsResponsePage from "./Pages/ContactUsResponsePage/ContactUsResponsePage";
import ForgotPasswordEnterEmailPage from "./Pages/ForgotPasswordFlow/ForgotPasswordEnterEmailPage/ForgotPasswordEnterEmailPage";
import ForgotPasswordEnterOTPPage from "./Pages/ForgotPasswordFlow/ForgotPasswordEnterOTPPage/ForgotPasswordEnterOTPPage";
import ForgotPasswordResetPasswordPage from "./Pages/ForgotPasswordFlow/ForgotPasswordResetPasswordPage/ForgotPasswordResetPasswordPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/aboutUs" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contactUs" element={<ContactUsPage />} />
        <Route path="/contactUsResponse" element={<ContactUsResponsePage />} />
        <Route path="/forgotPassword-enterEmail" element={<ForgotPasswordEnterEmailPage />} />
        <Route path="/forgotPassword-enterOTP" element={<ForgotPasswordEnterOTPPage />} />
        <Route path="/forgotPassword-resetPassword" element={<ForgotPasswordResetPasswordPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
