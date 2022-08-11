import React, { Fragment, useEffect, useState } from "react";
import BankerForm from "./BankerForm";

const CreateCompany = (props) => {
   const [recentDevelopments, setRecentDevelopments] = useState([]);

   const [esgInitiatives, setEsgInitiatives] = useState([]);

   const handleCreate = () => {};

   return (
      <Fragment className="container">
         <h2>Edit Company Details</h2>
         <BankerForm
            recentDevelopments={recentDevelopments}
            esgInitiatives={esgInitiatives}
            setRecentDevelopments={setRecentDevelopments}
            setEsgInitiatives={setEsgInitiatives}
            handleCreate={handleCreate}
            isCreateNew={true}
         />
      </Fragment>
   );
};

export default CreateCompany;
