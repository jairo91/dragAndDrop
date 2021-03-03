/* eslint-disable new-cap */
const { Before } = require('cucumber');
const reporter = require('@wdio/allure-reporter').default;
const logger = require('wdio-lettuce/lib/Utils/logger');

Before(function(scenario) {
  console.debug('Before Hook for Test Manager, scenario %o\n%o', scenario, reporter);
  try {
    reporter.addEnvironment('_session', JSON.stringify({
      sessionId: browser.sessionId,
      tags: scenario.pickle.tags.map(tag => tag.name),
      scenario: `${scenario.sourceLocation.uri}:${scenario.sourceLocation.line}`
    }));

    reporter.addEnvironment('_context', JSON.stringify({
      browserName: browser.capabilities.browserName,
      platform: browser.capabilities.platform,
      browserVersion: browser.capabilities.version
    }));

    // To add a new attachment and view it in the test manager dashboard use this line:
    // reporter.addAttachment('someAttachment', JSON.stringify({}), 'application/json');
  } catch (err) {
    console.error(err);
  }
});
