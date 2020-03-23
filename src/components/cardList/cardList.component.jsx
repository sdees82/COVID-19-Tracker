import React from 'react';
import CountryCard from "../countryCard/countryCard.component";
import {getCode} from "country-list";
import "./cardList.style.css";

const missingCountries = {
    "Iran" : "IR",
    "S. Korea" : "KR",
    "USA" : "US",
    "UK" : "GB",
    "Russia" : "RU",
    "UAE" : "AE",
    "Taiwan" : "TN",
    "Vietnam" : "VN",
    "Brunei" : "BN",
    "Diamond Princess" : "US",
    "Faeroe Islands" : "FO",
    "Palestine" : "PS",
    "Moldova" : "MD",
    "Venezuela" : "VE",
    "Bolivia" : "BO",
    "Channel Islands" : "GB",
    "DRC" : "CD",
    "Ivory Coast" : "CI",
    "St. Barth" : "BL",
    "Saint Martin" : "MF",
    "Tanzania" : "TZ",
    "U.S. Virgin Islands" : "US",
    "CAR" : "CF",
    "Vatican City" : "VA",
    "St. Vincent Grenadines" : "VC",
    "Sint Maarten" : "SX",
    "Syria": "SY",
    "Turks an Caicos" : "TC"
  
  }
  
  const getCountry = (country) =>{
    return getCode(country) !== undefined ? getCode(country) : missingCountries[country];
  }

const CardList = ({countryData}) => {
    return ( 
        <div className="card-list-container">
        {
            countryData.map((countries, index) => {
                return(
                    <CountryCard
                    key={index}
                    country={countries.country}
                    activeCases={countries.active}
                    todayCases={countries.todayCases}
                    totalCases={countries.cases}
                    deaths={countries.deaths}
                    todayDeaths={countries.todayDeaths}
                    recoveredCases={countries.recovered}
                    critical={countries.critical}
                    imageSrc={`https://www.countryflags.io/${getCountry(countries.country)}/flat/64.png`}
                    />
                );
            })
        }
        </div>
     );
}
 
export default CardList;