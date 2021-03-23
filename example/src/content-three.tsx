import * as React from 'react';

import { DynamicCard } from '../../src';

const Dynamic = () => {
  const timeout = (ms: number) => {
    return new Promise(resolve => setTimeout(() => {
      resolve(console.log('done'))
    }, ms));
  }

  const willAdd = async () => {
    await timeout(2000)
  }

  const willCancel = async () => {
    await timeout(2000);
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
            <div className="card-demo">
              <img className="emoji" src="https://z3.ax1x.com/2021/03/23/6To1Ve.png" alt=""/>
              <p className="block">this card key number with {key}</p>
            </div>
          )
        }}
      </DynamicCard>
    </div>
  );
};

const ContentThree = () => {
  return (
    <div className="label-layout" style={{ borderBottom: 'none' }}>
      <div className="label">
        <div className="describe">
          <h2>Async Hooks</h2>
          <p>Component support asynchronous hook</p>
          <p>You can do some asynchronous operations like interface request before deleting or adding operations</p>
          <img src="https://z3.ax1x.com/2021/03/23/6THWsP.png" alt="" />
        </div>
      </div>
      <div className="label">
        <Dynamic />
      </div>
    </div>
  );
};

export default ContentThree;
