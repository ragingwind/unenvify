# unenvify [![Build Status](https://travis-ci.org/ragingwind/unenvify.svg?branch=master)](https://travis-ci.org/ragingwind/unenvify)

> Replacement Shell/Environment Variable in String


## Install

```
$ npm install --save unenvify
```


## Usage

```js
const unenvify = require('unenvify');

unenvify('$HOME/path', {
	HOME: os.homedir()
});
```


## API

### unenvify(str, [env])

#### str

Type: `string`

Target string having shell/environment variable

#### env

Type: `object`<br>
Default: `process.env`

Environment variable sets


## License

MIT © [Jimmy Moon](http://ragingwind.me)
