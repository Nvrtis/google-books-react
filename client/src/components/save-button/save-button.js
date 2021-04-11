import React from 'react'

const Buttons = props => {
    console.log(props)
return(

    <button className="btn btn-primary" type="Save" data-id={props}>Save</button>
)
}

export default Buttons