module.exports = function( eleventyConfig ) {
    let Handlebars = require( 'handlebars' );
    eleventyConfig.setLibrary( 'hbs', Handlebars );
    eleventyConfig.addPassthroughCopy( 'src/img' );
    eleventyConfig.addPassthroughCopy( 'src/css' );

    return {
        pathPrefix: '/',
        passthroughFileCopy: true,
        dir: {
            input: 'src',
            output: 'dist',
            layouts: '_layouts'
        },
    };
};