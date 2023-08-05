import React, {Component} from 'react';
import SimpleSelect from "./simpleSelect";
import {Link} from "react-router-dom";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{color:"white"}}>
                <span className="navbar-brand">Pathfinder</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                    <NavLink exact to="/" className="nav-link" style={{color:"white"}}>Home</NavLink>
                </div>

            </nav>
        );
    }
}

export default Navbar;