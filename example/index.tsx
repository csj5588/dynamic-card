import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Popup from '../.';
import '../dist/react-easy-popup.min.css';

const App = () => {
  return (
    <div>
      <Popup />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
