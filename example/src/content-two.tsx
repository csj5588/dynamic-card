import * as React from 'react';

import { DynamicCard } from '../../src';

const Dynamic = () => {
  return (
    <div style={{ padding: '20px' }}>
      <DynamicCard
        defaultNum={2}
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

const ContentTwo = () => {
  return (
    <div className="label-layout">
      <div className="label">
        <Dynamic />
      </div>
      <div className="label">
        <div className="describe">
          <h2>Has DefaultNum</h2>
          <p>You can specify the initial data length</p>
          <p>Components render based on initial length</p>
          <img src="https://z3.ax1x.com/2021/03/23/6TqD9H.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContentTwo;
