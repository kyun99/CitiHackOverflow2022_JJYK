import React, {Fragment} from "react";
import CompanyView from "./CompanyView";
import SearchBar from './SearchBar';

const BrowseCompanies = () => {
   return (
      <Fragment>
         <div className="BrowseCompanies">
            <h1>Browse Companies</h1>
            <SearchBar />
            <CompanyView 
            header="Company Name" 
            companyname="Wilmar International" 
            industry="Agrubusiness" 
            summary="Wilmar International (Wilmar) is an integrated agribusiness company. It is involved in oil palm cultivation, edible oil refining, oilseed crushing, consumer pack edible oil processing and merchandising, specialty fats, oleochemicals and biodiesel manufacturing, and grain processing and merchandising. Wilmar also manufactures and distributes fertilisers and owns a fleet of vessels."  
            />
            <CompanyView 
            header="Company Name" 
            companyname="Yanghzijiang Shipbuilding" 
            industry="Shipbuilding" 
            summary="Yangzijiang is one of the largest, most efficient, and profitable shipbuilders in China. It has moved up the value chain to produce ultra-large containerships and very large bulk carriers, as well as LNG vessels."  
            />
            <CompanyView 
            header="Company Name" 
            companyname="Meta" 
            industry="Social Media, Social Media Network Advertising" 
            summary="At Meta, we are constantly iterating, solving problems and working together to connect people all over the world. That’s why it’s important that our workforce reflects the diversity of the people we serve. Hiring people with different backgrounds and points of view helps us make better decisions, build better products and create better experiences for everyone."  
            />
            <CompanyView 
            header="Company Name" 
            companyname="Keppel Capital" 
            industry="Investments" 
            summary="Listed on the Singapore Exchange, Keppel Corporation is one of Singapore's flagship multinational companies with a global footprint in more than 20 countries. Keppel Corporation provides solutions for sustainable urbanisation, focusing on energy & environment, urban development, connectivity and asset management." 
            />
            <CompanyView 
            header="Company Name" 
            companyname="Goldman Sachs" 
            industry="Financial Services" 
            summary="The Goldman Sachs Group, Inc. is a leading global financial institution that delivers a broad range of financial services across investment banking, securities, investment management and consumer banking to a large and diversified client base that includes corporations, financial institutions, governments and individuals.
            Founded in 1869, the firm is headquartered in New York and maintains offices in all major financial centers around the world." 
            />
         </div>
      </Fragment>
   );
};

export default BrowseCompanies;
