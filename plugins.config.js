export const CUSTOM_MARKUP = ({ src, sources, width, height, alt }) => {
  return `
  <picture>
  ${sources}
  <img
    src="${src}"
    width="${width}"
    height="${height}"
    alt="${alt}"
    loading="lazy"
    decoding="async">
  </picture>
  `
}

/* https://github.com/astro-community/astro-compress/tree/main/src/options */
export const COMPRESSION_CONFIG = {
  path: ['./public', './dist'],
  css: false,
  js: true,
  // or https://github.com/frontendista/astro-html-minify
  html: {
    removeComments: true,
    removeAttributeQuotes: true
  },
  img: false,
  svg: {
    multipass: true,
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            cleanupNumericValues: false,
            removeViewBox: false // https://github.com/svg/svgo/issues/1128
          },
          cleanupIDs: {
            minify: false,
            remove: false
          },
          convertPathData: false
        }
      },
      'sortAttrs',
      {
        name: 'addAttributesToSVGElement',
        params: {
          attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }]
        }
      }
    ]
  },
  logger: 1
}
