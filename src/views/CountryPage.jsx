import React, {useState} from "react";

// Styles
import "../styles/CountryPage/CountryPage.css"

// Components
import SearchForm from "../components/CountryPage/SearchForm"
import Country from "../components/CountryPage/Country"
import Header from "../components/Header"
import FetchError from "../components/FetchError"


const CountryPage = props => {
    const [countryData, setCountryData] = useState([]);
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    // Functions
    const handleFetchCountryData = async () => {

        try {
            const response = await fetch (
                `https://restcountries.com/v3/name/${name}?fullText=true`
                );
            const result = await response.json();
            // console.log(result);
            setLoading(true);
            if (result.status) {
                setError(result.message)
            } else {
                setCountryData(result);
                setError(false)
            }

        } catch (e) {
            setError(true);  
        }
       
    };

    return (
        <>
        <Header/>
        <SearchForm 
        setName={setName}
        handleFetchCountryData = {handleFetchCountryData}
        />
       {
            error ? (<FetchError
                        message={error}/> )
            : (
                <div className="main-container">
                
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
        </>  
    );
};

export default CountryPage;