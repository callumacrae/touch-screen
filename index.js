'use strict';

module.exports = function isTouchDevice() {
	return ('ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
};
