const BasePage = require('./base.page');

class DoctorsPage extends BasePage {
  async searchForDoctor(name) {
    await $('div.doctors').click();

    const specialistElement = await $(`#Specialist_1`);
    await specialistElement.click();
  }

  async editPhoneNumber(newPhoneNumber) {
    await $("//button[text()='Edit']").click();

    const mobileNumberInput = await $('input#DoctorMobile');
    await mobileNumberInput.clearValue();
    await mobileNumberInput.setValue(newPhoneNumber);

    const saveButton = await $("//button[text()='Save']");
    await saveButton.click();
  }

  async clickAddDoctorButton() {
    await $("//button[text()='Add New Doctor']").click();
    await browser.pause(6000);
  }

  async fillDoctorDetails(name, email, education, mobile) {
    await $("input[name='Name']").setValue(name);
    await $("input[name='Email']").setValue(email);
    await $("input[name='Education']").setValue(education);
    await $("input[name='Mobile']").setValue(mobile);
    await browser.pause(6000);
  }

  async submitForm() {
    await $("//button[text()='Save']").click();
    await browser.pause(6000);
  }
}

module.exports = new DoctorsPage();
