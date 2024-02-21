const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals');
const basePage = require('../pageobjects/base.page');

const doctorsPage = require('../pageobjects/doctors.page');
const patientsPage = require('../pageobjects/patients.page');
const calendarPage = require('../pageobjects/calendar.page');

Given(/^Users on the (\w+) page$/, async (page) => {
  await doctorsPage.open(page);
});

When(/^they search for a doctor named "Nembo Lukeni"$/, async () => {
  await doctorsPage.searchForDoctor('Nembo Lukeni');
});

When(/^edit the phone number of the doctor$/, async () => {
  await doctorsPage.editPhoneNumber('(044) 555-5555');
});
Then(
  /^the phone number of the doctor should be updated successfully$/,
  async () => {
    const expectTitle =
      'Appointment Planner - Syncfusion Angular Components Showcase App';
    await expect(browser).toHaveTitle(expectTitle);
  }
);
Given(/^User on the (\w+) page$/, async () => {
  await doctorsPage.open();
});

When(/^they click on the "Add Doctor" button$/, async () => {
  await doctorsPage.clickAddDoctorButton();
});

When(/^fill in the required details for the new doctor$/, async () => {
  await doctorsPage.fillDoctorDetails(
    'Jon doe',
    'Jondoe@mail.com',
    'University',
    '(044) 444-9999'
  );
});

When(/^submit the form$/, async () => {
  await doctorsPage.submitForm();
});

Then(/^the new doctor should be added successfully$/, async () => {
  const expectTitle =
    'Appointment Planner - Syncfusion Angular Components Showcase App';
  await expect(browser).toHaveTitle(expectTitle);
  await browser.pause(3000);
});

Given(/^User on the (\w+) page$/, async () => {
  await patientsPage.open();
});

When(/^doctor search for a patient named Laura$/, async () => {
  await patientsPage.searchForPatient('Laura');
});

When(/^edit the symptom$/, async () => {
  await patientsPage.editSymptom('recovered');
});

Then(/^the patient's email should be updated successfully$/, async () => {
  await patientsPage.verifyEmailUpdate();
});
Given(/^User on the (\w+) page$/, async () => {
  await patientsPage.open();
});

When(/^doctor search for a patient named "([^"]*)"$/, async (patientName) => {
  await patientsPage.openPatientDetailsPage(patientName);
});

Then(
  /^should see the details of the patient named "([^"]*)"$/,
  async (patientName) => {
    await patientsPage.verifyPatientDetailsDisplayed(patientName);
  }
);
Given(/^calendar page$/, async () => {
  await browser.url(
    'https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/calendar'
  );
  await browser.pause(3000);
});
When(/^they select a patient's appointment$/, async () => {
  await $("div[data-id='Appointment_1002']").click();
});
When(/^change the patient's name$/, async () => {
  await calendarPage.changePatientName('1002', 'Laura');
});

Then(
  /^the patient's name should be updated in the appointment details$/,
  async () => {
    await calendarPage.verifyPatientNameUpdated('1002', 'Laura');
  }
);
