import * as React from 'react';

import { DynamicCard } from '../../src';

const Dynamic = () => {
  return (
    <div style={{ padding: '20px' }}>
      <DynamicCard>
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

const ContentOne = () => {
  return (
    <div className="label-layout">
      <div className="label">
        <div className="describe">
          <h2>Base Demo</h2>
          <p>The basic initial structure, with add, delete function</p>
          <p>the code structure is as follows</p>
          <img src="https://z3.ax1x.com/2021/03/23/6Tq04e.png" alt="" />
        </div>
      </div>
      <div className="label">
        <Dynamic />
      </div>
    </div>
  );
};

export default ContentOne;
