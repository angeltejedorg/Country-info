import react from "react";

const Country = ({flag, name}) => {

    return (
        <div>
            <h2>{name}</h2>
            <img src={flag} alt={name} />
        </div>
    )
}

export default Country;