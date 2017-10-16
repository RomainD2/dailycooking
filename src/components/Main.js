import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './0-Home';
import Equilibre from './1-Equilibre';
import Recettes from './2-Recettes';
import Techniques from './3-Techniques';
import Placard from './4-Placard';
import Ustensiles from './5-Ustensiles';
import Recette from './Recette';
import NavBar from './NavBar';
import Footer from './Footer';
import recettes from '../recettes_datas';

const Main = () => (
  <div>
    <main>
      <Router>
        <div>
          <NavBar />
          <Route exact path='/' render={()=><Home recettes={recettes} />} />
          <Route exact path='/equilibre' component={Equilibre} />
          <Route exact path='/recettes' render={()=><Recettes recettes={recettes} />} />
          <Route exact path='/techniques' component={Techniques} />
          <Route exact path='/placard' component={Placard} />
          <Route exact path='/ustensiles' component={Ustensiles} />
          <Route path='/recette/:id' component={Recette} />
        </div>
      </Router>
    </main>
    <Footer />
  </div>
)

export default Main;