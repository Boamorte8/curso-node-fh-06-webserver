const hbs = require('hbs');

const version = require('../environment');

// Helpers
hbs.registerHelper('getYear', () => {
    return new Date().getFullYear();
});
hbs.registerHelper('getVersion', () => {
    return version.version;
});
hbs.registerHelper('onCapitalize', (text) => {
    let words  = text.split(' ');
    words.forEach((word, idx) => {
        words[idx] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    });
    return words.join(' ');
});