/* global require */
/* global module */

module.exports = {
	rend : function(params){
		const template = require('./game.ejs');
		let html = template(params);
		const elem = document.createElement('div');
		elem.innerHTML = html;
		return elem;
	},

	resizeInit : function() {
		document.getElementById('game').width = document.body.clientWidth - 100;		
		document.getElementById('game').height = document.getElementById('game').width / 16 * 8;
	},

	resize : function() {
		this.resizeInit();
		window.onresize = this.resizeInit;
	}
};
