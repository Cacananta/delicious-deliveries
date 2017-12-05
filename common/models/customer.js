'use strict';

module.exports = function(Customer) {
  Customer.disableRemoteMethod('delete', true);
};
