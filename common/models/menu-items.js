'use strict';

module.exports = function(Menuitems) {
  Menuitems.disableRemoteMethod('delete', true);
};
