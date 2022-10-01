<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# keyBy

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Convert a collection to an object whose keys are determined by a provided function and whose values are the collection values.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import keyBy from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-key-by@esm/index.mjs';
```

#### keyBy( collection, fcn\[, thisArg ] )

Converts a `collection` to an object whose keys are determined by a provided `function` and whose values are the `collection` values.

<!-- eslint-disable object-curly-newline -->

```javascript
function toKey( value ) {
    return value.a;
}

var arr = [
    { 'a': 1 },
    { 'a': 2 }
];

var out = keyBy( arr, toKey );
// returns { '1': { 'a': 1 }, '2': { 'a': 2 } }
```

The invoked `function` is provided two arguments:

-   `value`: collection element
-   `index`: collection index

To set the function execution context, provide a `thisArg`.

```javascript
function toKey( value, index ) {
    this.sum += value;
    this.count += 1;
    return index;
}

var arr = [ 1, 2, 3, 4 ];

var context = {
    'sum': 0,
    'count': 0
};

var out = keyBy( arr, toKey, context );
// returns { '0': 1, '1': 2, '2': 3, '3': 4 }

var mean = context.sum / context.count;
// returns 2.5
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A `collection` may be either an [`Array`][mdn-array], [`Typed Array`][mdn-typed-array], or an array-like [`Object`][mdn-object] (excluding `strings` and `functions`).
-   If more than one element in a `collection` resolves to the same key, the key value is the `collection` element which last resolved to the key.
-   Object values are shallow copies.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import keyBy from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-key-by@esm/index.mjs';

var arr;
var obj;
var i;

function toKey( value ) {
    return value.name;
}

arr = new Array( 100 );
for ( i = 0; i < arr.length; i++ ) {
    arr[ i ] = {
        'name': 'v'+i,
        'value': i
    };
}

obj = keyBy( arr, toKey );
console.log( obj );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/for-each`][@stdlib/utils/for-each]</span><span class="delimiter">: </span><span class="description">invoke a function for each element in a collection.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-key-by.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-key-by

[test-image]: https://github.com/stdlib-js/utils-key-by/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-key-by/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-key-by/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-key-by?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-key-by.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-key-by/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-key-by/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-key-by/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-key-by/tree/esm
[branches-url]: https://github.com/stdlib-js/utils-key-by/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-key-by/main/LICENSE

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[mdn-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

<!-- <related-links> -->

[@stdlib/utils/for-each]: https://github.com/stdlib-js/utils-for-each/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
