import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import AboutMe from "./pages/AboutMe";
import Resume from "./pages/Resume";

function App() {
  return (
    <HashRouter basename="Resume">
      <Routes>
        {/* <Route path="/" element={<Loading />} /> */}
        <Route path="/" element={<Sidebar />}>
          <Route index element={<Navigate to="about" replace />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="resume" element={<Resume />} />
          {/* <Route path="profile" element={<Profile />} /> */}
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
