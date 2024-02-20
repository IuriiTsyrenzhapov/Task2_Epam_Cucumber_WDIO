const { $ } = require('@wdio/globals');
const Page = require('./base.page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PatientsPage extends Page {
    async open() {
        await super.open(
            'patients'
        );
    }
}

module.exports = new PatientsPage();
