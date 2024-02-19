const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals');

const DoctorsPage = require('../pageobjects/doctor.page');

Given(/^User on the doctors page$/, async () => {
  await browser.url(
    'https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/doctors'
  );
});

When(/^they search for a doctor named "Nembo Lukeni"$/, async () => {
  await $('div.doctors').click();

  const specialistElement = await $('#Specialist_1');
  await specialistElement.click();
});

When(/^edit the phone number of the doctor$/, async () => {
  await $("//button[text()='Edit']").click();

  const mobileNumberInput = await $('input#DoctorMobile');
  await mobileNumberInput.clearValue();

  await mobileNumberInput.setValue('(044) 555-5555');

  const saveButton = await $("//button[text()='Save']");
  await saveButton.click();
});
Then(
  /^the phone number of the doctor should be updated successfully$/,
  async () => {
    const expectTitle =
      'Appointment Planner - Syncfusion Angular Components Showcase App';
    await expect(browser).toHaveTitle(expectTitle);
  }
);

Given(/^I open the page$/, async () => {
  await browser.url(
    'https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/doctors'
  );
  await browser.pause(6000);
});

When(/^they click on the "Add Doctor" button$/, async () => {
  await $("//button[text()='Add New Doctor']").click();
  await browser.pause(6000);
});

When(/^fill in the required details for the new doctor$/, async () => {
  await $("input[name='Name']").setValue('Jon doe');
  await $("input[name='Email']").setValue('Jondoe@mail.com');
  await $("input[name='Education']").setValue('University');
  await $("input[name='Mobile']").setValue('(044) 444-9999');
  await browser.pause(6000);
});

When(/^submit the form$/, async () => {
  await $("//button[text()='Save']").click();

  await browser.pause(6000);
});
Then(/^the new doctor should be added successfully$/, async () => {
  const expectTitle =
    'Appointment Planner - Syncfusion Angular Components Showcase App';
  await expect(browser).toHaveTitle(expectTitle);
});
Given(/^on the patients page$/, async () => {
  await browser.url(
    'https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/patients'
  );
  await browser.pause(3000);
});
When(/^they search for a patient$/, async () => {
  const patientName = $('span.patient-name*=Laura');
  patientName.click();
  await browser.pause(6000);
});
When(/^edit the symptom$/, async () => {
  const editButton = $('button#edit');
  editButton.click();

  const symptomsInput = $('input[name="Symptoms"]');
  await symptomsInput.clearValue();
  await symptomsInput.setValue('recovered');

  const saveButton = await $(
    'button[ejs-button][cssclass="e-normal"].e-control.e-btn.e-lib.e-normal.e-primary'
  );
  await saveButton.click();
  await browser.pause(3000);
});
Then(/^the patient's email should be updated successfully$/, async () => {
  const expectTitle =
    'Appointment Planner - Syncfusion Angular Components Showcase App';
  await expect(browser).toHaveTitle(expectTitle);
});

Given(/^doctor on page$/, async () => {
  await browser.url(
    'https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/patients'
  );
  await browser.pause(3000);
});

When(/^doctor search for a patient named "Adams"$/, async () => {
  const patientName = $('span.patient-name*=Adams');
  patientName.click();
});

Then(/^should see the details of the patient named "Adams"$/, async () => {
  const element = await $('div#grid_1627125836_1_dialogEdit_wrapper_title');
  const text = await element.getText();
  await expect(text).toContain('Patient Details');
  await browser.pause(6000);
});
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
  await $("//button[text()='Edit']").click();

  const input = await $('input#PatientName');

  await input.clearValue();
  await input.setValue('Laura');
  await $("//li[text()='Laura']").click();
  await browser.pause(3000);
  const saveButton = await $(
    '.e-schedule-dialog.e-control.e-btn.e-lib.e-primary.e-event-save.e-flat'
  );
  await saveButton.click();
  await browser.pause(3000);
});
Then(
  /^the patient's name should be updated in the appointment details$/,
  async () => {
    const appointmentDetails = await $("div[data-id='Appointment_1002']");
    await expect(appointmentDetails).toHaveTextContaining('Laura');
  }
);
