// FONT embedder
// --------------------------------------------------------

// If you're going to embed fonts, you must make sure they exist
// in the file system :)
export const embedFonts = (list = []) => {
  let fonts = "";
  list.forEach(({ name, fileName, weight, style }) => {
    fonts += `
      @font-face {
        font-family: ${name};
        font-style: ${style};
        font-weight: ${weight};
        src: url("/fonts/${fileName}.woff2") format("woff2"),
          url("/fonts/${fileName}.woff") format("woff");
        font-display: optional;
      }
    `;
  });

  return `
    ${fonts}
  `;
};
