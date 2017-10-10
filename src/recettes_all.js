import React from 'react';
import ReactDOM from 'react-dom';
import Recepies from './components/Recepies';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Recepies />, document.getElementById('insertRecepiesPage'));
registerServiceWorker();
// Comment sont chargés les recettes alors que le fichier index.js n'est jamais appelé!!!