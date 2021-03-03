const { Given, When, Then } = require('cucumber');
const dragAndDropPage = require('../../pageobjects/dragAndDrop/dragAndDrop');

Given(/^User test drag and drop action$/, function () {
	dragAndDropPage.test();
});