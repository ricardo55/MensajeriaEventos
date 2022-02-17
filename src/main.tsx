import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import typeOfMessage from './typeOfMessage';
import Channels from './channels';
import EmailChannel from './EmailChannel';

ReactDOM.render(
  <React.StrictMode>
    <EmailChannel />
  </React.StrictMode>,
  document.getElementById('root'),
);
