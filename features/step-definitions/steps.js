const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals');

const LoginPage = require('../pageobjects/login.page');

const pages = {
  login: LoginPage,
};

Given(/^the user is on the (\w+) page$/, async (page) => {
  await pages[page].open();
});

When(/^the user enter valid (.+) and (.+)$/, async (username, password) => {
  await LoginPage.login(username, password);
});

Then(/^Page title should be "My Dashboard \| Syncfusion"$/, async () => {
  const expectedTitle = 'My Dashboard | Syncfusion';
  await expect(browser).toHaveTitle(expectedTitle);
});
