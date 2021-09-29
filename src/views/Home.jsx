import React, { useEffect, useState } from "react";

// components
import Country from "../components/CountryPage/Country";
import Header from "../components/Header";
import Loader from "../components/Loader"

// styles
import "../styles/Home.css"

const Home = props => {

    const [allCountries, setAllCountries] = useState([]);
    const [loading, setLoading]= useState(true);

    const fetchAllCoutries = async() => {
        try {
            const response = await fetch (
                "https://restcountries.com/v3.1/all"
                );
            const result = await response.json();
            // console.log(result);
            // setLoading(true);
            setAllCountries(result);
            setLoading(false);
        } catch (er) {
            console.log(er);
        }
    }

    useEffect(() => {
        fetchAllCoutries();
    }, [])
    return (
        <>
        <Header/>

        {
            loading ? <Loader/>
            : (
                <div className="container-home">

                {
                    
                    allCountries.map(infoCountry => (
                        <Country
                            key={infoCountry.name.common}
                            flag={infoCountry.flags.svg}
                            name={infoCountry.name.common}
    
                        /> 
                    ))
                  
                }     
    
            </div>
            )
        }
       
        </>
    )
}

export default Home;