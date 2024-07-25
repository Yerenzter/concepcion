import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Dashboard, Home, ManageUser, ManageResidents } from "../components";
import { useState } from "react";
import useToken from "./useToken";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/manage/users" element={<ManageUser />} />
        <Route
          path="/dashboard/manage/residents"
          element={<ManageResidents />}
        />
      </Routes>
    </BrowserRouter>
  );
}
