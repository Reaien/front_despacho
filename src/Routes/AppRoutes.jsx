import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CrudAdmin } from "../componentes/CrudAdmin.jsx";
import { Home } from "../componentes/Home.jsx";
import PrivateRoute from "../componentes/PrivateRoute.jsx";
import { AuthProvider } from "../componentes/AuthContext.jsx";

const AppRoutes = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/crud"
            element={
              <PrivateRoute>
                <CrudAdmin />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default AppRoutes;
