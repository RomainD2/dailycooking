import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

// On fait juste afficher quelque chose donc on crée un component stateless
const NotFound = () => {
    return (
        <div>
            <NavBar />
            <h2>Y'a rien ici!</h2>
            <Footer />
        </div>

    )
}

export default NotFound;