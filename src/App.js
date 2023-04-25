import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/navbar.component";
import AddPackage from './components/package/add-package.component';
import PackageList from './components/package/package-list.component';
import ViewPackage from './components/package/package-view.component';
import EditPackage from './components/package/package-edit.component';
// import { EmployeeList } from "./components/employee/employee-list.component";
// import { CreateEmployee } from './components/employee/employee-add.component';

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/nav" element={<Navbar/>} />
          <Route exact path="/addPackage" element={<AddPackage/>} />
          <Route exact path="/package" element={<PackageList/>} />
          <Route exact path="/viewPackage" element={<ViewPackage/>} />
          <Route exact path="/editPackage" element={<EditPackage/>} />
          {/* <Route exact path="/" element={<Home />} /> */}
        </Routes>
      </Router>

    </div>
  );

}

export default App;
