const hbs = require('hbs');
const uuid = require('uuid');

const version = 'DEV_' + uuid.v4();

// Helpers
hbs.registerHelper('getYear', () => {
    return new Date().getFullYear();
});
hbs.registerHelper('getVersion', () => {
    return version;
});
hbs.registerHelper('onCapitalize', (text) => {
    let words  = text.split(' ');
    words.forEach((word, idx) => {
        words[idx] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    });
    return words.join(' ');
});