const { $ } = require('@wdio/globals');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DoctorsPage extends Page {
  get searchInput() {
    return $('#search-input');
  }
  get searchButton() {
    return $('#search-button');
  }
  get editPhoneNumberButton() {
    return $('#edit-phone-number-button');
  }
  get phoneNumberInput() {
    return $('#phone-number-input');
  }
  get saveButton() {
    return $('#save-button');
  }

  async searchDoctor(doctorName) {
    await this.searchInput.setValue(doctorName);
    await this.searchButton.click();
  }

  async editPhoneNumber(newPhoneNumber) {
    await this.editPhoneNumberButton.click();
    await this.phoneNumberInput.clearValue();
    await this.phoneNumberInput.setValue(newPhoneNumber);
    await this.saveButton.click();
  }

  async open() {
    await super.open(
      'https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/doctors'
    );
  }
}

module.exports = new DoctorsPage();
