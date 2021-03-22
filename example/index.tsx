import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';


import { DynamicCard } from '../src';

const App = () => {
  const timeout = (ms: number) => {
    return new Promise(resolve => setTimeout(() => {
      resolve(console.log('done'))
    }, ms));
  }

  const willAdd = async () => {
    await timeout(500)
  }

  const willCancel = async () => {
    await timeout(500);
  }

  return (
    <div style={{ padding: '20px' }}>
      <DynamicCard
        defaultNum={2}
        willAdd={willAdd}
        willCancel={willCancel}
      >
        {(key) => {
          return (
            <p className="block">这是第{key}张卡片内容</p>
          )
        }}
      </DynamicCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
