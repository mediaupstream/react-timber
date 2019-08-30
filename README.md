# react-timber

![Logo](logo.png?raw=true "Timber")

> Simple debug component for React

## Overview

A React component that outputs prop values wrapped in `<pre><code>` tags. Optionally you can `console.log` the prop values.

## Install

```sh
yarn add react-timber
```

```sh
npm i react-timber
```

## Usage

There are two **output modes**. By default `Timber` will render the passed `props` as a pretty printed JSON object inside `<pre><code>` tags. If you only want to log the `props` to the console you can pass the `consoleLog` prop.

```js
import Timber from 'react-timber'
const ExampleApp = () => <Timber foo="bar" consoleLog />
```
![Example1](example1.png?raw=true "Outputs to the Console")

**Options:**

| Prop       | Default Value |   Description |
| ---------- | ------------- | ------------- |
| consoleLog | false | When true Timber will only `console.log` the props |
| hideLabel | false | When true the label is omitted |
| className |   | class is applied to the wrapper `div` and `pre` tag |
| style |   | inline styles are applied to the wrapper `div` and `pre` tag |
| * |    | All other props are `console.log`'d or rendered in a `pre` tag. |


**Exapmle:**

```js
const SomeComponent = () => {
  const lumberjacks = [
    { name: 'Big Joe Mufferaw', origin: 'Canada'}, 
    { name: 'Paul Bunyan', origin: 'North America'}, 
    { name: 'Log Diver', origin: 'Canada'},
    { name: 'Johnny Canuck', origin: 'Canada'},
  ]
  const selected = lumberjacks.find(n => n.name === 'Paul Bunyan')
  return (
    <div>
      <Timber 
          className="purple" 
          PaulBunyan={selected} 
        />
        <Timber
          lumberjacks={lumberjacks}
        />
    </div>
  )
}
```
![Example2](example2.png?raw=true "Outputs to pre tag")

## License MIT
