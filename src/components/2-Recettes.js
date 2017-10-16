import React, {Component} from 'react';
import NavBar from './NavBar';
import RecettesBody from './2-RecettesBody';
import Footer from './Footer';

class Recettes extends Component {
    render(){
        return(
            <div>
                <NavBar />
                <RecettesBody />
                <Footer />
            </div>
        )
    }
}

export default Recettes;