import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/navbar.component";
import Footer from "./components/navbar/footer.component"
// import Footer from "./components/navbar/footer.component";
import AddPackage from './components/package/add-package.component';
import PackageList from './components/package/package-list.component';
import ViewPackage from './components/package/package-view.component';
import EditPackage from './components/package/package-edit.component';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';


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
         
        </Routes>
      </Router>
      <Footer />
    </div>
  );

}

export default App;
