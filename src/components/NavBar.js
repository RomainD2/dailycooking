import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <div>
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link className="navbar-brand" to="/">Daily Cooking - La cuisine saine et facile du quotidien</Link>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                        <li><Link to="/equilibre">L'équilibre ?</Link></li>
                        <li><Link to="/recettes">Recettes</Link></li>
                        <li><Link to="/techniques">Techniques</Link></li>
                        <li><Link to="/placard">Ton placard</Link></li>
                        <li><Link to="/ustensiles">Tes ustensiles</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
)

export default NavBar;