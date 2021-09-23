import react from "react";

const SearchForm = ({setName, handleFetchCountryData}) => {

    return (
        <div>
            <input 
            type="text" 
            placeholder="Enter country name" 
            onChange={e=> setName(e.target.value)}/>

            <button onClick={handleFetchCountryData}>Search</button>
        </div>
    )
}

export default SearchForm;