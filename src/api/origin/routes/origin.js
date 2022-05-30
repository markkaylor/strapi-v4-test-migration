'use strict';

/**
 * origin router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::origin.origin');
