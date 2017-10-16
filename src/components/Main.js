import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from './NotFound';
import Home from './0-Home';
import Equilibre from './1-Equilibre';
import Recettes from './2-Recettes';
import Techniques from './3-Techniques';
import Placard from './4-Placard';
import Ustensiles from './5-Ustensiles';


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/equilibre' component={Equilibre} />
      <Route exact path='/recettes' component={Recettes} />
      <Route exact path='/techniques' component={Techniques} />
      <Route exact path='/placard' component={Placard} />
      <Route exact path='/ustensiles' component={Ustensiles} />
      <Route component={NotFound} />
    </Switch>
  </main>
)

export default Main;