import os from 'os';
import path from 'path';

const useOs = () => {
	// Get total memory in MB, rounded to nearest integer
	const totalMem = Math.round(os.totalmem() / (1024 * 1024));

	// Get the appdata directory.
	const sysRoot =
		process.env.APPDATA ||
		(process.platform === 'darwin'
			? process.env.HOME + '/Library/Application Support'
			: process.env.HOME);
	const clientDir = path.join(sysRoot, process.env.APPDATA ? '.minecraft' : 'minecraft');

	return {
		totalMem,
		clientDir,
	};
};

export default useOs;
