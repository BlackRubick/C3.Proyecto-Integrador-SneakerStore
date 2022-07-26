'use strict'
const {app, BrowserWindow}= require('electron');

app.on('ready',() => {

let win = new BrowserWindow({
	icon:'../IMAGENES/logo.jpg',
	webPreferences: {
			nodeIntegration:true,
			contextIsolation:false
		}
});

	win.loadFile('HTML/login.html')
	win.show()

	win.on('closed', () => {
		win= null;
		app.quit();

	});
});