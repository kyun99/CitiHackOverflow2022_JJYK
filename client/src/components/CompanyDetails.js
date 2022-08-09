import React, { Fragment } from "react";
import Detail from './Detail';

const CompanyDetails = () => {
   const CompanyName = "John's Poultry"
   return (
      <div>
         <Fragment>
            <h1 className="name">{CompanyName}</h1>
            <Detail />
            <Detail />
         </Fragment>
      </div>
   );
};

export default CompanyDetails;
