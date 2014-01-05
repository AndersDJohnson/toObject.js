toObject.js
==============

Convert Object-like JavaScript variables into true Objects.

Lets you use Object utilities like `JSON.stringify` with libraries
that so sneakily give you Functions with properties instead of vanilla Objects...
looking at you, [jQuery][jquery] and [Express][express].


## Install

via [npm]:

```bash
$ npm install --save toobject
```

via [Bower][bower]:

```bash
$ bower install --save toobject
```

[npm]: https://npmjs.org/
[bower]: http://bower.io/

## Use

First load the script - it supports CommonJS, AMD/Require.js, and will set a browser global.

Then it's simple...

```javascript
var func = function () {};
func.hello = 'Hello';

toObject(func);
// => {hello: "Hello"}
```

[jquery]: http://jquery.com/
[express]: http://expressjs.com/
