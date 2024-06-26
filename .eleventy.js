module.exports = function( eleventyConfig ) {
    let Handlebars = require( 'handlebars' );
    eleventyConfig.setLibrary( 'hbs', Handlebars );
    eleventyConfig.addPassthroughCopy( 'src/img' );
    eleventyConfig.addPassthroughCopy( 'src/css' );
    eleventyConfig.addPassthroughCopy( 'src/fonts' );

    Handlebars.registerHelper('formatDonation', value => {
        if (value) {
            return '$' + Math.round(value)
        } else {
            return false
        }
    })

    Handlebars.registerHelper('formatRegistrant', name => {
        return name.replace(/,/, ',<br>')
    })

    Handlebars.registerHelper('formatStatus', value => {
        if (value === 'paid') {
            return 'Paid - thanks!'
        } else {
            return 'Amount due: ' + '$' + Math.round(value)
        }
    })

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