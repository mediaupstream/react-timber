# react-timber

> Simple debug component for React

## Overview

Log prop values using `<pre><code>` or `console.log`

## Install

```sh
yarn add react-timber
```

```sh
npm i react-timber
```

## Usage

Available Props:

| Prop       | Default Value |   Description |
| ---------- | ------------- | ------------- |
| consoleLog | false | When true Timber will only `console.log` the props |
| hideLabel | false | When true the label is omitted |
| className | null | class is applied to the wrapper `div` and `pre` tag |
| style | null | inline styles are applied to the wrapper `div` and `pre` tag |
| * | null | All other props are `console.log`'d or rendered in a `pre` tag. |


**Exapmle:**

```js
import React, { Component } from 'react'
import Timber from 'react-timber'

class SomeComponent extends Component {
  state = {
    lumberjacks: [
      { name: 'Big Joe Mufferaw', origin: 'Canada'}, 
      { name: 'Paul Bunyan', origin: 'North America'}, 
      { name: 'Log Diver', origin: 'Canada'},
      { name: 'Johnny Canuck', origin: 'Canada'},
    ],
    selected: { 
      name: 'Big Joe Mufferaw', 
      origin: 'Canada'
    }
  }
  render() {
    return (
      <Timber 
        consoleLog 
        PaulBunyan={this.state.selected}
        lumberjacks={this.state.lumberjacks}
      />
    )
  }
}
```




## License MIT
