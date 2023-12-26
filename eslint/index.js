/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

const configSettings = require('./config/myconfig');
const allRules = require('./rules');

module.exports = {
	rules: allRules,
	configs: {
		customRules: configSettings,
	},
};
