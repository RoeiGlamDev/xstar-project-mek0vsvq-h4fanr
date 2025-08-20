import autoprefixer from 'autoprefixer'; // Import autoprefixer for handling vendor prefixes
import cssnano from 'cssnano'; // Import cssnano for optimizing CSS

export default {
  plugins: [
    autoprefixer(), // Add autoprefixer as a PostCSS plugin
    cssnano({ preset: 'default' }) // Add cssnano for CSS minification
  ]
};