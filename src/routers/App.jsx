import { defaults } from "autoprefixer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Dashboard, Home, ManageUser, ManageResidents } from "../components";

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route index element={ <Home /> } />
        <Route path='/dashboard' element={ <Dashboard /> } />
        <Route path='/dashboard/manage/users' element={ <ManageUser /> } />
        <Route path='/dashboard/manage/residents' element={ <ManageResidents /> } />
      </Routes>
    </BrowserRouter>
  );
}