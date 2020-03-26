require('jsdom-global')(undefined, {url: 'https://localhost'});
require('dotenv').config({path: '.env.test'});

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinonChai = require('sinon-chai');
const Vue = require('vue');
const Vuetify = require('vuetify');

chai.config.includeStack = false;
chai.config.showDiff = true;
chai.use(chaiAsPromised);
chai.use(sinonChai);

global.expect = chai.expect;
global.localStorage = window.localStorage;
global.sessionStorage = window.sessionStorage;
window.Date = Date;

Vue.config.devtools = false;
Vue.config.productionTip = false;
Vue.use(Vuetify);
