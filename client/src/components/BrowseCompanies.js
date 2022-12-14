import React, { Fragment, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import CompanyView from "./CompanyView";
import SearchBar from "./SearchBar";
import axios from "axios";

const BrowseCompanies = (props) => {
  const [companies, setCompanies] = useState([
    {bloomberg_code: 'WIL_SP_EQUITY',
      name: "Wilmar International",
      industry: "Agribusiness",
      description: "Wilmar International (Wilmar) is an integrated agribusiness company. It is involved in oil palm cultivation, edible oil refining, oilseed crushing, consumer pack edible oil processing and merchandising, specialty fats, oleochemicals and biodiesel manufacturing, and grain processing and merchandising. Wilmar also manufactures and distributes fertilisers and owns a fleet of vessels.",
      market_cap: "3.2M",
      recommendation: "Hold",
      target_price: "1.55"
    },
    {
      bloomberg_code: 'YZJSGD_SP_Equity',
      name: "Yanghzijiang Shipbuilding",
      industry: "Shipbuilding",
      description: "Yangzijiang is one of the largest, most efficient, and profitable shipbuilders in China. It has moved up the value chain to produce ultra-large containerships and very large bulk carriers, as well as LNG vessels.",
      market_cap: "6.1M",
      recommendation: "Sell",
      target_price: "29.4"
    },
    {
      bloomberg_code: 'META_US_EQUITY',
      name: "Meta",
      industry: "Social Media, Social Media Network Advertising",
      description: "At Meta, we are constantly iterating, solving problems and working together to connect people all over the world. That’s why it’s important that our workforce reflects the diversity of the people we serve. Hiring people with different backgrounds and points of view helps us make better decisions, build better products and create better experiences for everyone.",
      market_cap: "2.4B",
      recommendation: "Sell",
      target_price: "29.4"
    },
    {
      bloomberg_code: 'KEP_SP_EQUITY',
      name: "Keppel Capital",
      industry: "Investments",
      description: "Listed on the Singapore Exchange, Keppel Corporation is one of Singapore's flagship multinational companies with a global footprint in more than 20 countries. Keppel Corporation provides solutions for sustainable urbanisation, focusing on energy & environment, urban development, connectivity and asset management.",
      market_cap: "2.4B",
      recommendation: "Sell",
      target_price: "8.4"
    },
    {
      bloomberg_code: 'GS_US_EQUITY',
      name: "Goldman Sachs",
      industry: "Financial Services",
      description: "The Goldman Sachs Group, Inc. is a leading global financial institution that delivers a broad range of financial services across investment banking, securities, investment management and consumer banking to a large and diversified client base that includes corporations, financial institutions, governments and individuals. Founded in 1869, the firm is headquartered in New York and maintains offices in all major financial centers around the world.",
      market_cap: "2.4B",
      recommendation: "Buy",
      target_price: "150.4"
    },
  ]);

  const [query, setQuery] = useState("");
  const [filteredCompanies, setFilteredCompanies] = useState(companies);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/moneyplant/company/")
      .then((resp) => {
        console.log(resp.status);
        console.log(resp.data);
        setCompanies((oldarr) => resp.data);
        setFilteredCompanies((oldarr) => resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filterData = (e) => {
    var q = e.target.value;
    if (!q) {
      setFilteredCompanies(companies);
    } else {
      const temp = companies.filter((d) => {
        return (
          d.name.toLowerCase().includes(q.toLowerCase()) ||
          d.industry.toLowerCase().includes(q.toLowerCase())
        );
      });
      setFilteredCompanies(temp);
    }
  };

  let navigate = useNavigate();

  return (
    <Fragment className="container">
      <div className="BrowseCompanies container">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1>Browse Companies</h1>
          {props.isBanker && (
            <button
              className="btn-green"
              onClick={() => {
                navigate("/banker/create");
              }}>
              + New Company
            </button>
          )}
        </div>
        <SearchBar onChange={(e) => filterData(e)} />
        {filteredCompanies.map((item) => (
          <CompanyView 
          companyname={item.name}
          industry={item.industry}
          summary={item.description}
          linkTo={`/details?code=${item.bloomberg_code}`}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default BrowseCompanies;
