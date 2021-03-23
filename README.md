<h1 align="center">Welcome to dynamic-cards 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/dynamic-cards" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/dynamic-cards.svg">
  </a>
  <img src="https://img.shields.io/badge/node-%3E%3D10-blue.svg" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

### 🏠 [Homepage](https://csj5588.github.io/dynamic-card)

## Prerequisites

- node >=10

## Install

```sh
yarn install dynamic-cards
```

## Usage

### base

```javascript
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
```

### support for default

```javascript
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
```

### support for async

```javascript
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
```

## Show your support

Give a ⭐️ if this project helped you!
