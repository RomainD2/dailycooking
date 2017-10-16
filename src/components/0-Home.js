import React, {Component} from 'react';
import NavBar from './NavBar';
import HomeBody from './0-HomeBody';
import Footer from './Footer';

class Home extends Component {
    render(){
        return(
            <div>
                <NavBar />
                <HomeBody />
                <Footer />
            </div>
        )
    }
}

export default Home;