import React from "react";
import User from "./User";

const customStyle = {
    boxShadow: "inset -1px 0 0 rgba(0, 0, 0, 0.1)"
};
export default function Sidebar({user: {name, image}}) {
    return (
        <div className="col-3 p-3 bg-light vh-100 overflow-scroll" style={customStyle}>
            <User name={name} image={image}/>
        </div>
    );
}