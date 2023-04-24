import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/navbar.component";
// import { EmployeeList } from "./components/employee/employee-list.component";
// import { CreateEmployee } from './components/employee/employee-add.component';

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/nav" element={Navbar} />
          {/* <Route exact path="/" element={<Home />} /> */}
        </Routes>
      </Router>

    </div>
  );

}

export default App;
