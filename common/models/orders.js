'use strict';

module.exports = function(Orders) {
  Orders.disableRemoteMethod('delete', true);
};
