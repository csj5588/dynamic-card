import * as React from 'react';

import { DynamicCard } from '../../src';

const Dynamic = () => {
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
            <p className="block">this card key number with {key}</p>
          )
        }}
      </DynamicCard>
    </div>
  );
};

export default Dynamic
