import react from "react";
// styles
import "../../styles/CountryInfo/CountryInfo.css"

const CountryInfo = ({flag, name, capital, region, subregion, oficialName, languages, currencies}) => {
    
    const getData= (obj) => {
        let data;
        for (let key in obj){
            data = obj[key];
        }
        return data
    }
    console.log(currencies[name])

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
           
        </div>
    )
}

export default CountryInfo;