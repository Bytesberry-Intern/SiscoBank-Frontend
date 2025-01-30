//* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import LoginForm from "./areas/public/pages/loginForm.component";
import FeedBackForm from "./areas/public/pages/FeedbackForm";
import SystemAdminDashboard from "./areas/admin/system-admin/SystemAdminDashboard";

import FeedbackConfig from "./areas/admin/system-admin/modules/MasterFeedback/feedbackConfig.component";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route exact path="/" element={<LoginForm />} />
        <Route exact path="/feedback" element={<FeedBackForm />} />
        {/* System Admin */}
        <Route
          exact
          path="/system-admin/dashboard"
          element={<SystemAdminDashboard />}
        />
        <Route
          exact
          path="/system-admin/master-config-feedback"
          element={<FeedbackConfig/>}
        />
      </Routes>
    </>
  );
}

export default App;
