import "./App.css";
import { Fragment, useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import BrowseCompanies from "./components/BrowseCompanies";
import CompanyDetailPage from "./components/CompanyDetailPage";
import Navbar from "./components/Navbar";
import EditCompany from "./components/EditCompany";
import CreateCompany from "./components/CreateCompany";
import Industries from "./components/Industries";

function App() {
   const [isBanker, setIsBanker] = useState(true);
   const setBanker = (val) => {
      setIsBanker(val);
   };

   return (
      <div className="App">
         <Fragment>
            <Router>
               <Navbar
                  className="navbar"
                  isBanker={isBanker}
                  setIsBanker={setBanker}
               />
               <section className="landing">
                  <Routes>
                     <Route exact path="" element={<Home />} />
                     <Route exact path="about" element={<About />} />
                     <Route exact path="industries" element={<Industries />} />
                     <Route
                        path="companies"
                        element={<BrowseCompanies isBanker={isBanker} />}
                     />
                     <Route
                        exact
                        path="details"
                        element={<CompanyDetailPage isBanker={isBanker} />}
                     />
                     <Route
                        exact
                        path="banker/create"
                        element={<CreateCompany />}
                     />
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
