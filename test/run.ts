const Jasmine = require('jasmine');
const runner = new Jasmine();

process.env.IS_OFFLINE = '1';
runner.loadConfigFile('test/support/jasmine.json');
runner.execute();
