import react from "react";
import { Link } from "react-router-dom"

// Styles
import "../../styles/CountryPage/Country.css"

const Country = ({flag, name}) => {

    return (
        <div className="country-container">
            <h2>{name}</h2>
            <img src={flag} alt={name} />
            <Link to={`/details/${name}`} className="link-button"><button>See more</button></Link>
        </div>
    )
}

export default Country;