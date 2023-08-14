import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Index from "./pages/Index";
import Register from "./pages/Register";
import LoggedinRoutes from "./routes/LoggedinRoutes";
import NotLoggedinRoutes from "./routes/NotLoggedinRoutes";
import Activate from "./pages/Activate";
import ResendActivateEmail from "./pages/ResendActivateEmail";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import { useSelector } from "react-redux";

function App() {

  const { user } = useSelector((state) => ({ ...state }));

  return (
    <div className="App">
      {/* <Header /> */}

      <Routes>
        <Route element={<LoggedinRoutes />}>
          <Route path="/" element={<Index />} exact />
          <Route path="/profile" element={<Profile />} exact />
        </Route>

        <Route element={<NotLoggedinRoutes />}>
          <Route path="/register" element={<Register />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/activateAccount" element={<Activate />} exact />
          <Route path="/resendActivationEmail" element={<ResendActivateEmail />} exact />
          <Route path="/forgotPassword" element={<ForgotPassword />} exact />
          <Route path="/resetPassword" element={<ResetPassword />} exact />


        </Route>
      </Routes>

    </div>
  );
}

export default App;
