module.exports = {
	rend : function(params){
		var template = require('./menu.ejs');
		let html = template(params);
		const elem = document.createElement('div');
		elem.innerHTML = html;
		return elem;
	}
};