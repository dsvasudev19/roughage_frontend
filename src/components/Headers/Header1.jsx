import React from "react";

const Header1=(props)=>{
    return (
        <h1 className="text-4xl font-semibold mb-3">
            {props.title}
        </h1>
    )
}

export default Header1;