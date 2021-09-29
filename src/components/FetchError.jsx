import React from "react";

import "../styles/FetchError.css"
const FetchError = ({message}) => {
    return (
        <div className="error-warning">
            <p>{message}</p>
        </div>
    )
}

export default FetchError;