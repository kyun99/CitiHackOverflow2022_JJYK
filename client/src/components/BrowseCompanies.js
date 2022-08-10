import React, {Fragment} from "react";
import CompanyView from "./CompanyView";
import SearchBar from './SearchBar';

const BrowseCompanies = () => {
   return (
      <Fragment>
         <div className="BrowseCompanies">
            <h1>Browse Companies</h1>
            <SearchBar />
            <CompanyView />
         </div>
      </Fragment>
   );
};

export default BrowseCompanies;
