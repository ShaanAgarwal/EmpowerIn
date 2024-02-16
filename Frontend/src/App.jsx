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
import RegisterCandidateForm from "./Pages/CandidateRegistrationFlow/RegisterCandidateForm/RegisterCandidateForm";
import RegisterCandidateOTPVerification from "./Pages/CandidateRegistrationFlow/RegisterCandidateOTPVerification/RegisterCandidateOTPVerification";
import CareerPage from "./Pages/CareerPage/CareerPage";
import AdminBaseDashboard from "./Pages/Admin Pages/Admin Base Dashboard/AdminBaseDashboard";
import HeadHRBaseDashboard from "./Pages/Head HR Pages/Head HR Base Dashboard/HeadHRBaseDashboard";
import HRBaseDashboard from "./Pages/HR Pages/HR Base Dashboard/HRBaseDashboard";
import CandidateBaseDashboard from "./Pages/Candidate Pages/Candidate Base Dashboard/CandidateBaseDashboard";
import ActiveUsers from "./Pages/Admin Pages/Manager Users/Active Users/ActiveUsers";
import BlockedUsers from "./Pages/Admin Pages/Manager Users/Blocked Users/BlockedUsers";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/aboutUs" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/contactUs" element={<ContactUsPage />} />
        <Route path="/contactUsResponse" element={<ContactUsResponsePage />} />
        <Route path="/forgotPassword-enterEmail" element={<ForgotPasswordEnterEmailPage />} />
        <Route path="/forgotPassword-enterOTP" element={<ForgotPasswordEnterOTPPage />} />
        <Route path="/forgotPassword-resetPassword" element={<ForgotPasswordResetPasswordPage />} />
        <Route path="/registerCandidate-form" element={<RegisterCandidateForm />} />
        <Route path="/registerCandidate-OTPVerification" element={<RegisterCandidateOTPVerification />} />
        <Route path="/admin-baseDashboard" element={<AdminBaseDashboard />} />
        <Route path="/headHR-baseDashboard" element={<HeadHRBaseDashboard />} />
        <Route path="/HR-baseDashboard" element={<HRBaseDashboard />} />
        <Route path="/candidate-baseDashboard" element={<CandidateBaseDashboard />} />
        <Route path="/admin-baseDashboard-manageUsers-activeUsers" element={<ActiveUsers />} />
        <Route path="/admin-baseDashboard-manageUsers-blockedUsers" element={<BlockedUsers />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
