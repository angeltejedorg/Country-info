import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Components
import CountryInfo from "../components/CountryDetails/CountryInfo"
import Header from "../components/Header";
import FetchError from "../components/FetchError";

const CountryDetails = props => {

    const [error, setError] = useState(false);

    const { country } = useParams();

    const [details, setDetails] = useState([]);

    const fetchDetailsAPI = async () => {
        try {
            const response = await fetch (
                `https://restcountries.com/v3/name/${country}?fullText=true`
            );
            const result = await response.json();
            
            console.log(result)
            if (result.status) {
                setError(result.message)
            }else {
                setDetails(result)
                setError(false)
            }
            
        } catch (error) {
            console.log(error)
        }
        
        
    };
    
    useEffect(()=> {
        fetchDetailsAPI();
    }, []);


    return (
        <>
        <Header/>
        <div>
           
        {
            error ? (<FetchError
                        message = {error}
                        />)
            : (
                
                    details.map(detailsCountry =>(
                        <CountryInfo
                        key={detailsCountry.name.common}
                        flag={detailsCountry.flags[0]}
                        name={detailsCountry.name.common}
                        capital={detailsCountry.capital}
                        region={detailsCountry.region}
                        subregion={detailsCountry.subregion}
                        oficialName = {detailsCountry.name.official}
                        languages = {detailsCountry.languages}
                        currencies = {detailsCountry.currencies}
                        />
                    ) )
                
            )

        }
            
            
          
        </div>
        </>
    );
};

export default CountryDetails