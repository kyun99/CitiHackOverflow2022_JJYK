import "./App.css";
import { Fragment } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import BrowseCompanies from "./components/BrowseCompanies";
import CompanyDetails from "./components/CompanyDetails";
import Navbar from "./components/Navbar";
import EditCompany from "./components/EditCompany";

function App() {
   return (
      <div className="App">
         <Fragment>
            <Router>
               <Navbar />
               <section className="container">
                  <Routes>
                     <Route exact path="" element={<Home />} />
                     <Route exact path="about" element={<About />} />
                     <Route
                        exact
                        path="companies"
                        element={<BrowseCompanies />}
                     />
                     <Route exact path="details" element={<CompanyDetails />} />
                     <Route
                        exact
                        path="banker/edit"
                        element={<EditCompany />}
                     />
                  </Routes>
               </section>
            </Router>
         </Fragment>
      </div>
   );
}

export default App;
