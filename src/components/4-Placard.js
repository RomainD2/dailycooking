import React, {Component} from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

class Placard extends Component {
    render(){
        return(
            <div>
                <NavBar />
                <Footer />
            </div>
        )
    }
}

export default Placard;