'use strict';

module.exports = function(Owner) {
  Owner.disableRemoteMethod('delete', true);
};
