import React from 'react';

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
                    <a className="navbar-brand" href="">Daily Cooking - La cuisine saine et facile du quotidien</a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                        <li><a href="#equilibre">L'équilibre ?</a></li>
                        <li><a href="#recettes">Recettes</a></li>
                        <li><a href="#techniques">Techniques</a></li>
                        <li><a href="#palcard">Ton placard</a></li>
                        <li><a href="#ustensiles">Tes ustensiles</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
)

export default NavBar;