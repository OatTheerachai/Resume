import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import AboutMe from "./pages/AboutMe";
import Resume from "./pages/Resume";
import Profile from "./pages/Profile";
import Loading from "./components/Loading";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Loading />} /> */}
        <Route path="/" element={<Sidebar />}>
          <Route index element={<Navigate to="about" replace />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="resume" element={<Resume />} />
          {/* <Route path="profile" element={<Profile />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
