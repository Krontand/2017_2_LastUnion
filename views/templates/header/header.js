/* global require */
/* global module */

module.exports = {
	rend : function(params){
		const template = require('./header.ejs');
		let html = template(params);
		const elem = document.createElement('div');
		elem.innerHTML = html;
		return elem;
	}
};
