import React from 'react';
import ReactDOM from 'react-dom';
import Recepies from './components/Recepies';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Recepies />, document.getElementById('insertRecepies'));
registerServiceWorker();
