import React, { Fragment, useEffect, useState } from "react";
import BankerForm from "./BankerForm";
import axios from 'axios';

const CreateCompany = (props) => {
  const [recentDevelopments, setRecentDevelopments] = useState([])

  const [esgInitiatives, setEsgInitiatives] = useState([])
  const [bloombergCode, setBloombergCode] = useState()
  const [name, setName] = useState()
  const [industry, setIndustry]=useState()
  const [description, setDescription]=useState()
  const [marketcap, setMarketcap]=useState()
  const [recommendation, setRecommendation] = useState()
  const [targetprice, setTargetPrice] = useState()
  

  const handleCreate = (e) => {
    e.preventDefault();
    const data = {bloomberg_code: bloombergCode,
    name: name,
    industry: industry,
    description:description,
    market_cap: marketcap,
    recommendation: recommendation,
    target_price: targetprice }
    
    console.log(data)
    axios.post('http://127.0.0.1:8000/moneyplant/company/', data)
    .then(resp => {
      console.log(resp.status)

    })
    .catch(err => {
      console.log(err)
    })
  }
  
  return <Fragment>
    <h2>Create Company</h2>
    <BankerForm 
      recentDevelopments={recentDevelopments}
      esgInitiatives={esgInitiatives}
      setRecentDevelopments={setRecentDevelopments}
      setEsgInitiatives={setEsgInitiatives}
      handleCreate={handleCreate}

      setBloombergCode={setBloombergCode}
      setName={setName}
      setIndustry={setIndustry}
      setDescription={setDescription}
      setMarketcap={setMarketcap}
      setRecommendation={setRecommendation}
      setTargetPrice={setTargetPrice}

      isCreateNew={true}
    />
  </Fragment>

}

export default CreateCompany