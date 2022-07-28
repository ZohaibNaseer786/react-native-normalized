[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)
[![npm version](https://badge.fury.io/js/react-native-normalize.svg)](https://www.npmjs.com/package/rn-normalized)

### Without `normalized`
<img src="https://i.imgur.com/bLbnjsC.jpg" width="600"/>

### With `rn-normalized`
<img src="https://i.imgur.com/4IqqAR2.jpg" width="600"/>

# React Native Normalized

**rn-normalized** is a small and simple package that helps make your React Native app responsive easily.

It comes with a function `normalized` that will adapt a value depending on the screen's width or height so you can use it for `width, height, top, bottom, fontSize, borderRadius,...`

# Installation
```bash
$ yarn add rn-normalized
```

```javascript
// on iPhone 8
normalized(100)          // = 100
normalized(50, 'height') // = 50
// on iPhone 5s
normalized(100)          // = 86
normalized(50, 'height') // = 43
// on iPhoneXs Max
normalized(100)          // = 110
normalized(50, 'height') // = 67
```

## Quick example

```JSX
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import normalized from 'rn-normalized';

const App = () => {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>React Native Normalize</Text>
        </View>
      </View>
    )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    top: normalized(180, 'height'),
    left: normalized(40),
    width: normalized(300),
    height: normalized(300),
    borderRadius: normalized(150),
    backgroundColor: '#009fcd',
  },
  text: {
    fontSize: normalize(60),
    color: 'white',
  },
});
```
