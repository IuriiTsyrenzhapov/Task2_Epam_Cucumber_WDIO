const { browser } = require('@wdio/sync');

/**
 * Base page object containing common methods and functionality
 */
class BasePage {
  open(path) {
    return browser.url(
      `https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/${path}`
    );
  }
}

module.exports = new BasePage();
