# replace-shebang [![Build Status](https://travis-ci.org/saintedlama/replace-shebang.svg?branch=master)](https://travis-ci.org/saintedlama/replace-shebang)

> Replaces a [shebang](https://en.wikipedia.org/wiki/Shebang_(Unix)) *(eg. `#!/bin/sh`)* by a string using string.replace


## Install

```
$ npm install --save replace-shebang
```


## Usage

```js
const fs = require('fs');
const replaceShebang = require('replace-shebang');

const str = fs.readFileSync('bin', 'utf8');
//=> #!/usr/bin/env node
//=> console.log('unicorns');

// string replacement
replaceShebang(str, '// shebang');
//=> // shebang
//=> console.log('unicorns');

// function to replace the shebang
replaceShebang(str, shebang => '// ' + shebang);
//=> // #!/usr/bin/env node
//=> console.log('unicorns');

// stripping shebangs
replaceShebang(str);
//=> 
//=> console.log('unicorns');
```
