'use strict';

/**
 * origin service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::origin.origin');
