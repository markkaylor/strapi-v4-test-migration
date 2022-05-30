'use strict';

/**
 * `middleware-test` middleware.
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In middleware-test middleware.');

    await next();
  };
};
