import React from "react";
import "./style.css"

function BookSearch (props) {
    return(
        <div className="searchfield">

    <h2>Search for Books here </h2>
<form className="input-group mb-3" {...props}>
    <input className="input-field"  {...props} />
    <div className="input-group-append">
  <button type="submit" className="btn btn-primary searchbutton">Search Books</button>
    </div>
</form>
        </div>



    )
}

export default BookSearch