import { app, ipcMain } from 'electron';
import serve from 'electron-serve';
import { createWindow } from './helpers';

const isProd: boolean = process.env.NODE_ENV === 'production';

if (isProd) {
	serve({ directory: 'app' });
} else {
	app.setPath('userData', `${app.getPath('userData')} (development)`);
}

(async () => {
	await app.whenReady();

	const mainWindow = createWindow('main', {
		width: 1280,
		height: 720,
		autoHideMenuBar: true,
		resizable: false,
		frame: false,
		show: false,
	});

	mainWindow.on('ready-to-show', () => {
		mainWindow.show();
	});

	ipcMain.on('minimize-window', () => {
		mainWindow.minimize();
	});

	ipcMain.on('close-window', () => {
		mainWindow.close();
	});

	if (isProd) {
		await mainWindow.loadURL('app://./home.html');
	} else {
		const port = process.argv[2];
		await mainWindow.loadURL(`http://localhost:${port}/home`);
	}
})();

app.on('window-all-closed', () => {
	app.quit();
});
