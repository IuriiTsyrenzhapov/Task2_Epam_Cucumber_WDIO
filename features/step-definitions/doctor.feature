Feature: Functionality APPOINTMENT PLANNER

Scenario: Edit phone number of a doctor
  Given User on the doctors page
  When they search for a doctor named "Nembo Lukeni"
  And edit the phone number of the doctor
  Then the phone number of the doctor should be updated successfully


  Scenario: Add a new doctor
Given User on the doctors page
When they click on the "Add Doctor" button
And fill in the required details for the new doctor
And submit the form
Then the new doctor should be added successfully


Scenario: Change patient's email on the patients page
Given User on the patients page
When doctor search for a patient named Laura
And edit the symptom
Then the patient's email should be updated successfully

Scenario: Find a patient named Adams on the patients page
Given User on the patients page
When doctor search for a patient named Adams
Then should see the details of the patient named Adams

Scenario: Change patient's name in the calendar
Given User on the calendar page
When they select a patient's appointment
And change the patient's name
Then the patient's name should be updated in the appointment details