import React, {useState} from "react";


// Components
import SearchForm from "../components/CountryPage/SearchForm"
import Country from "../components/CountryPage/Country"


const CountryPage = props => {
    const [countryData, setCountryData] = useState([])
    const [name, setName] = useState(null)

    // Functions
    const handleFetchCountryData = async () => {
        const response = await fetch (
            `https://restcountries.com/v3/name/${name}`
            );
        const result = await response.json();
        console.log(result)
        setCountryData(result)
    }

    return (
        <div>
            <SearchForm 
            setName={setName}
            handleFetchCountryData = {handleFetchCountryData}
            />
            {
                countryData.map(infoCountry => (
                    <Country
                        key={infoCountry.name.common}
                        flag={infoCountry.flags[0]}
                        name={infoCountry.name.common}

                    /> 
                ))
            }
                   
        </div>
    )
}

export default CountryPage;