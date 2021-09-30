import react from "react";
import { Link } from "react-router-dom"

// styles
import "../../styles/CountryInfo/CountryInfo.css"

const CountryInfo = ({flag, name, capital, region, subregion, oficialName, languages, currencies, country}) => {
    
    const getData= (obj) => {
        let data;
        for (let key in obj){
            data = obj[key];
        }
        return data
    }

    const language = getData(languages)

    return (
        <div className="main-container-countryInfo">
           <h1>Country details</h1>
           
           
           <div className="main-info-countryInfo">
                <h2>{oficialName}</h2>
                <p><span>Capital:</span> {capital}</p>
                <p><span>Region:</span> {region}</p>
                <p><span>Subregion:</span> {subregion}</p>
                <p><span>Languages:</span> {language}  </p>  
           </div>
           <img src={flag} alt={name} />
           <div className="weather-container">
               <p>Click here to see current {capital} weather</p>
               <Link className="link-button" to={`/details/${name}/weather/${capital}`}>
                    <button>Weather information</button>
                </Link>
            </div>
        </div>
    )
}

export default CountryInfo;