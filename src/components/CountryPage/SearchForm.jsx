import react from "react";

// Styles
import "../../styles/CountryPage/SearchForm.css"

const SearchForm = ({setName, handleFetchCountryData}) => {

    return (
        <div className="input-container">

            <h2>Enter country name:</h2>
            <input 
            type="text" 
            placeholder="I.e.: United Kingdom or Colombia" 
            required
            onChange={e=> setName(e.target.value)}/>

            <button onClick={handleFetchCountryData}>Search</button>
        </div>
    )
}

export default SearchForm;