'use strict';

const View = require('../modules/view');
const Menu = require('./templates/menu/menu');
const Header = require('../views/templates/header/header');

class MenuView extends View {

	constructor() {
		super();
		if(MenuView._instance) {
			return MenuView._instance;
		}
		MenuView._instance = this;

		this.init();
	}

	init() {
		this.dom.insertDom(this.body, Header.rend({
			loggedin : this.user.isAuth(),
			score: this.user.getScore()
		}), 'Header');
		this.dom.insertDom(this.body, Menu.rend({
			'menuitems' : ['Play', 'About us (404)', 'Scores'],
			'links' : ['/play/', '/about/', '/scores/'],
		}), 'Menu');
		this.ListenLinks();
	}

	ConstructPage() {
		this.init();
		this.Show('Header');
		this.Show('Menu');
	}

	DestroyPage() {
		this.Hide('Header');
		this.Hide('Menu');
	}

}

module.exports = MenuView;