import React from "react";
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";

import "../stylesheets/navbar.css";

// Import required actions and qualifiers.
import {scale} from "@cloudinary/url-gen/actions/resize";

import "bootstrap/dist/css/bootstrap.css";

import { NavLink } from "react-router-dom";

// Display Navbar
export default function Navbar() {

    // Cloudinary Logo image
    const cld = new Cloudinary({
        cloud: {
            cloudName: 'dqilxju9e'
        }
    });

    const logoImage = cld.image('personal-website-assets/q9igxikcchp4dftpkfgm');
    logoImage.resize(scale().width(50).height(50));

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <NavLink className="navbar-brand" to="/">
                <AdvancedImage cldImg={logoImage}/>
                </NavLink>
                <div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aris-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/create">
                                    Create Record
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/projects">
                                    Projects
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}