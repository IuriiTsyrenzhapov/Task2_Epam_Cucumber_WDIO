const BasePage = require('./base.page');

class DoctorsPage extends BasePage {
  async open() {
    await super.open('doctors');
  }

  async searchForPatient(name) {
    const patientName = $(`span.patient-name*=${name}`);
    await patientName.click();
    await browser.pause(6000);
  }

  async editSymptom(symptom) {
    const editButton = $('button#edit');
    await editButton.click();

    const symptomsInput = $('input[name="Symptoms"]');
    await symptomsInput.clearValue();
    await symptomsInput.setValue(symptom);

    const saveButton = await $(
      'button[ejs-button][cssclass="e-normal"].e-control.e-btn.e-lib.e-normal.e-primary'
    );
    await saveButton.click();
    await browser.pause(3000);
  }

  async verifyEmailUpdate() {
    const expectTitle =
      'Appointment Planner - Syncfusion Angular Components Showcase App';
    await expect(browser).toHaveTitle(expectTitle);
  }
  async openPatientDetailsPage(patientName) {
    await this.open('patients');
    const patientElement = $(`span.patient-name*=${patientName}`);
    await patientElement.click();
  }

  async verifyPatientDetailsDisplayed() {
    const element = await $('div#grid_1627125836_1_dialogEdit_wrapper_title');
    const text = await element.getText();
    await expect(text).toContain('Patient Details');
    await browser.pause(6000);
  }
}

module.exports = new DoctorsPage();
