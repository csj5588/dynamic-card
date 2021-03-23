import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Head from './head';
import ContentOne from './content-one';
import ContentTwo from './content-two';
import ContentThree from './content-three';
import Footer from './footer';

const App = () => {
  return (
    <div>
      <Head />
      <div className="title">
        <span className="primary">Dynamic</span>
        <span className="red">Features</span>
      </div>
      <ContentOne />
      <ContentTwo />
      <ContentThree />
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
