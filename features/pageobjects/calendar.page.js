const { $ } = require('@wdio/globals');
const Page = require('./base.page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CalendarPage extends Page {
    async open() {
        await super.open(
            'calendar'
        );
    }
}

module.exports = new CalendarPage();
