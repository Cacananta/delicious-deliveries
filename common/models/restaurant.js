'use strict';

module.exports = function(Restaurant) {
  Restaurant.disableRemoteMethod('delete', true);
};
