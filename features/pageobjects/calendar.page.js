const BasePage = require('./base.page');

class CalendarPage extends BasePage {
  async changePatientName(appointmentId, newName) {
    await $("div[data-id='Appointment_" + appointmentId + "']").click();
    await $("//button[text()='Edit']").click();

    const input = await $('input#PatientName');
    await input.clearValue();
    await input.setValue(newName);
    await $("//li[text()='" + newName + "']").click();

    const saveButton = await $('.e-schedule-dialog .e-event-save');
    await saveButton.click();
    await browser.pause(3000);
  }

  async verifyPatientNameUpdated(appointmentId, newName) {
    const appointmentDetails = await $(
      "div[data-id='Appointment_" + appointmentId + "']"
    );
    await expect(appointmentDetails).toHaveTextContaining(newName);
  }
}

module.exports = new CalendarPage();
