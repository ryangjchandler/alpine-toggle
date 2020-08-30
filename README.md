> ✨ Help support the maintenance of this package by [sponsoring me](https://github.com/sponsors/ryangjchandler).

# Alpine Toggle

Quickly toggle / negate a property in your Alpine.js components.

![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/ryangjchandler/alpine-toggle?label=version&style=flat-square)
![GitHub file size in bytes](https://img.shields.io/github/size/ryangjchandler/alpine-toggle/dist/alpine-toggle.js?label=min%20%28no%20gzip%29&style=flat-square)
[![Monthly downloads via CDN](https://data.jsdelivr.com/v1/package/gh/ryangjchandler/alpine-toggle/badge)](https://www.jsdelivr.com/package/gh/ryangjchandler/alpine-toggle)

## About

When you need to toggle a property in your code, you probably have something like this inside of your action:

```html
<button>very.deeply.nested[0].property = ! very.deeply.nested[0].property</button>
```

Wouldn't it be nice if you could do this instead:

```html
<button @click="$toggle('very.deeply.nested.0.property')"></button>
```

## Installation

### CDN

Include the following `<script>` tag in the `<head>` of your document:

``` html
<script src="https://cdn.jsdelivr.net/npm/@ryangjchandler/alpine-toggle@0.1.0/dist/alpine-toggle.umd.js"></script>
```

> **Important**: This must be added **before** loading Alpine.js when using CDN links.

## Usage

This plugin provides a single `$toggle` magic property that can be invoked and accepts a single argument - the dot-notation of the property you wish to toggle.

```html
<div x-data="{ foo: true }">
    <p x-text="JSON.stringify(foo)"></p>
    <button @click="$toggle('foo')">Toggle</button>
</div>
```

When the button is clicked, the value of `foo` will be flipped and become `false.`

### Nested properties

You can also negate nested properties inside of objects:

```html
<div x-data="{ foo: { bar: true } }">
    <p x-text="JSON.stringify(foo.bar)"></p>
    <button @click="$toggle('foo.bar')">Toggle (nested)</button>
</div>
```

Just pass in the dot-notation path for the property and the plugin will handle the rest.

### Nested arrays

If you have an array of objects, you might wish to use the index of the array too. Use the syntax below, as part of the dot-notation, to toggle something inside of an array.

```html
<div x-data="{ foo: { bar: { boo: [true] } } }">
    <p x-text="JSON.stringify(foo.bar.boo[0])"></p>
    <button @click="$toggle('foo.bar.boo.0')">Toggle (nested array)</button>
</div>
```

## Versioning

This projects follow the [Semantic Versioning](https://semver.org/) guidelines. This means that there *could* be breaking changes on minor version changes, up until v1.x is reached.

For example, 0.1 -> 0.2 might introduce a breaking change.

## License

Copyright (c) 2020 Ryan Chandler and contributors

Licensed under the MIT license, see [LICENSE.md](LICENSE.md) for details.
