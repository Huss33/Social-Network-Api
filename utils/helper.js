const moment = require('moment');

function formatter(date) {
    return moment(date).format('LLLL');
};

module.exports = formatter;