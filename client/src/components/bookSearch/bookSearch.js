import React from "react";

function BookSearch (props) {
    return(
<form className="input-group mb-3" {...props}>
    <input className="form-control"  {...props} />
    <div className="input-group-append">
  <button type="submit" className="btn btn-primary mb-2">Search Books</button>
    </div>
</form>



    )
}

export default BookSearch