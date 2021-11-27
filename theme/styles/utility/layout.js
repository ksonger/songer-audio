// Layout
// -------------------

// Layout-specific utility classes.
// They may style nested classes/elements if the style properties are layout-related only.
// E.g. using the lobotomized owl selector (`> * + *`).
// Classes are prefixed with `l-`.

export default `
  .a-bg-default:not(header) + .a-bg-default,
  .a-bg-accent-primary:not(header) + .a-bg-accent-primary,
  .a-bg-neutral05:not(header) + .a-bg-neutral05,
  .a-bg-neutral15:not(header) + .a-bg-neutral15,
  .a-bg-neutral90:not(header) + .a-bg-neutral90,
  .a-bg-default:not(header) + .a-bg-neutral15-gradient,
  .a-bg-default:not(header) + .a-bg-accent-primary-gradient {
    --container-block-start-padding: 0;
  }
`;
