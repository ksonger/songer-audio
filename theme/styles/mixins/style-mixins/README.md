# @castiron/style-mixins

A collection of JS helper functions (mixins) for styling. The mixins generally return template literals, and do not require a specific css-in-js library.

## Usage

1. `yarn add @castiron/style-mixins`
2. `import { someMixin } from "@castiron/style-mixins` or `import someMixin from @'castiron/style-mixins/someMixin`

## Philosophy

Mixins in this package are each scoped to a single type of style concern. The reason for this is that when mixins become opinionated about a wide range of styles, they can quickly begin to conflict with one another when used in combination. Or someone may want most of the styles from a mixin, but not all of them, and will need to declare overriding styles. As this happens repeatedly, these mixins lose their utility, and developers on a project may ultimately just ignore them or write new mixins altogether. To prevent this, the mixins in this library limit their declarations to a single category of style concern, and are organized and prefixed accordingly:

### Base

`base.js`

Common application-wide mixins, such as for writing media queries or fluidly scaling type and space values.

### Appearance

`appearance.js`

Mixins for color, hover and focus effects, etc, prefixed with `a`.

### Layout

`layout.js`

Mixins for container sizes and layouts, prefixed with `l`.

### State

`state.js`

Mixins for common state-specific styles like scroll-locking, prefixed with `is` or `has`.

### Typography

`typography.js`

Mixins for `font-` and `text-` properties, prefixed with `t`.
