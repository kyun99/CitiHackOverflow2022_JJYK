import React, { Fragment, useEffect, useState } from "react";
import BankerForm from "./BankerForm";
import { useLocation } from "react-router-dom"


const EditCompany = (props) => {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const bloombergCode =  params.get('code');
  const targetPrice = 1.0
  const recommendation = "Buy"
  const marketCap = "1.4B"
  const profile = "Yangzijiang is one of the largest, most efficient, and profitable shipbuilders in China. It has moved up the value chain to produce ultra-large containerships and very large bulk carriers, as well as LNG vessels."


  const [recentDevelopments, setRecentDevelopments] = useState([
    { title: "Yangzijiang Shipbuilding Holdings Ltd: A good set of 1H22 results", link: "https://www.dbs.com.sg/private-banking/aics/templatedata/article/recentdevelopment/data/en/DBSV/082022/YZJSGD_SP_08082022.xml" },
    { title: "Yangzijiang Shipbuilding: Trading at unwarranted deep discount to peers", link: "https://www.dbs.com.sg/private-banking/aics/templatedata/article/recentdevelopment/data/en/DBSV/082022/YZJSGD_SP_08042022.xml" }
  ])

  const [esgInitiatives, setEsgInitiatives] = useState([
    { title: "Yangzijiang Shipbuilding Holdings reduces carbon emissions in 1H22", link: "https://www.dbs.com.sg/private-banking/aics/templatedata/article/recentdevelopment/data/en/DBSV/082022/YZJSGD_SP_08082022.xml" },
    { title: "Yangzijiang Shipbuilding Increase resiliance of supply chain", link: "https://www.dbs.com.sg/private-banking/aics/templatedata/article/recentdevelopment/data/en/DBSV/082022/YZJSGD_SP_08042022.xml" }
  ])

  useEffect(() => {
    setRecentDevelopments(old => ([
      { title: "Yangzijiang Shipbuilding Holdings Ltd: A good set of 1H22 results", link: "https://www.dbs.com.sg/private-banking/aics/templatedata/article/recentdevelopment/data/en/DBSV/082022/YZJSGD_SP_08082022.xml" },
      { title: "Yangzijiang Shipbuilding: Trading at unwarranted deep discount to peers", link: "https://www.dbs.com.sg/private-banking/aics/templatedata/article/recentdevelopment/data/en/DBSV/082022/YZJSGD_SP_08042022.xml" }
    ]))
  }, [])

  const handleUpdate = () => {

  }
  const handleDelete = () => {

  }


  return <Fragment>
    <h2>Edit Company Details</h2>
    <BankerForm 
      recentDevelopments={recentDevelopments}
      esgInitiatives={esgInitiatives}
      setRecentDevelopments={setRecentDevelopments}
      setEsgInitiatives={setEsgInitiatives}
      handleUpdate={handleUpdate}
      handleDelete={handleDelete}
      isCreateNew={false}
    />
  </Fragment>
};

export default EditCompany;
