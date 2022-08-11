import React, { Fragment, useEffect, useState } from "react";
import BankerForm from "./BankerForm";
import { useLocation } from "react-router-dom"
import axios from "axios";
import { Navigate } from "react-router-dom";


const EditCompany = (props) => {


  const [recentDevelopments, setRecentDevelopments] = useState([
    { title: "Yangzijiang Shipbuilding Holdings Ltd: A good set of 1H22 results", link: "https://www.dbs.com.sg/private-banking/aics/templatedata/article/recentdevelopment/data/en/DBSV/082022/YZJSGD_SP_08082022.xml" },
    { title: "Yangzijiang Shipbuilding: Trading at unwarranted deep discount to peers", link: "https://www.dbs.com.sg/private-banking/aics/templatedata/article/recentdevelopment/data/en/DBSV/082022/YZJSGD_SP_08042022.xml" }
  ])

  const [esgInitiatives, setEsgInitiatives] = useState([
    { title: "Yangzijiang Shipbuilding Holdings reduces carbon emissions in 1H22", link: "https://www.dbs.com.sg/private-banking/aics/templatedata/article/recentdevelopment/data/en/DBSV/082022/YZJSGD_SP_08082022.xml" },
    { title: "Yangzijiang Shipbuilding Increase resiliance of supply chain", link: "https://www.dbs.com.sg/private-banking/aics/templatedata/article/recentdevelopment/data/en/DBSV/082022/YZJSGD_SP_08042022.xml" }
  ])

  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const [redirect, setRedirect] = useState(false)
  const [bloombergCode, setBloombergCode] = useState(params.get('code'))
  const [name, setName] = useState("Yangzijiang Shipbuilding Holdings Ltd")
  const [industry, setIndustry] = useState("Logistics")
  const [description, setDescription] = useState("Yangzijiang is one of the largest, most efficient, and profitable shipbuilders in China. It has moved up the value chain to produce ultra-large containerships and very large bulk carriers, as well as LNG vessels.")
  const [marketcap, setMarketcap] = useState("1.4B")
  const [recommendation, setRecommendation] = useState("Buy")
  const [targetprice, setTargetPrice] = useState("1.14")
  useEffect(() => {
    setRecentDevelopments(old => ([
      { title: "Yangzijiang Shipbuilding Holdings Ltd: A good set of 1H22 results", link: "https://www.dbs.com.sg/private-banking/aics/templatedata/article/recentdevelopment/data/en/DBSV/082022/YZJSGD_SP_08082022.xml" },
    ]))
  }, [])

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/moneyplant/company/${bloombergCode}`)
      .then(resp => {
        console.log(resp.status)
        console.log(resp.data)
        const data = resp.data

        setDescription(prev => (data.description))
        setIndustry(prev => data.industry)
        setMarketcap(prev => data.market_cap)
        setName(prev => data.name)
        setRecommendation(prev => data.recommendation)
        setTargetPrice(prev => data.target_price)

      })
      .catch(err => {
        console.log(err)
      })
  })

  const handleUpdate = (e) => {
    e.preventDefault();
    const data = {
      bloomberg_code: bloombergCode,
      name: name,
      industry: industry,
      description: description,
      market_cap: marketcap,
      recommendation: recommendation,
      target_price: targetprice
    }

    console.log(data)
    axios.put(`http://127.0.0.1:8000/moneyplant/company/${bloombergCode}`, data)
      .then(resp => {
        console.log(resp.status)
        setRedirect(prev => true)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleDelete = () => {
    axios.delete(`http://127.0.0.1:8000/moneyplant/company/${bloombergCode}`)
      .then(resp => {
        console.log(resp.status)
        setRedirect(prev => true)
      })
      .catch(err => {
        console.log(err)
      })
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

      bloombergCode={bloombergCode}
      name={name}
      industry={industry}
      description={description}

      setBloombergCode={setBloombergCode}
      setName={setName}
      setIndustry={setIndustry}
      setDescription={setDescription}
      setMarketcap={setMarketcap}
      setRecommendation={setRecommendation}
      setTargetPrice={setTargetPrice}
    />
    {redirect && (<Navigate to="/companies" replace={true} />)}
  </Fragment>
};

export default EditCompany;
