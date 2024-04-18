# levelz-js

![GitHub License](https://img.shields.io/github/license/LevelZ-File/js-bindings)
[![GitHub package.json version](https://img.shields.io/github/package-json/v/LevelZ-File/js-bindings)](https://www.npmjs.com/package/levelz-js)
[![Static Badge](https://img.shields.io/badge/documentation-jsdoc-blue)](https://levelz-file.github.io/js-bindings)
![NPM Downloads](https://img.shields.io/npm/d18m/levelz-js)

> JavaScript Bindings for the LevelZ File Format

## Overview

Provides JavaScript bindings for the LevelZ File Format.

## Installation

### System

```bash
# NPM
npm install levelz-js

# Yarn
yarn add levelz-js

# Bun
bun install levelz-js
```

### Web

```html
<!-- Use Minified Version -->
<script src="https://levelz-file.github.io/js-bindings/levelz.min.js"></script>

<!-- Use Readable Version -->
<script src="https://levelz-file.github.io/js-bindings/levelz.js"></script>
```

## Usage

```js
import { Coordinate2D } from 'levelz-js';

const coordinate = new Coordinate2D(1, 2);
console.log(coordinate.toString()); // [1, 2]
```

```js
import * as fs from 'fs';
import { parseLevel } from 'levelz-js';

const txt = fs.readFileSync('my_level.lvlz', { encoding: 'utf-8' });
const level = parseLevel(txt);

console.log(level.headers.get('type')) // 3
```

```js
import * as LevelZ from 'levelz-js'

const coordinate3D = new LevelZ.Coordinate3D(1, 2, 3);
console.log(coordinate3D.toString()); // [1, 2, 3]

const level = new LevelZ.Level2D({'type': '3', 'spawn', '[0, 0, 0]'});
console.log(level.toString()); // @type 3, @spawn [0, 0, 0]
```
