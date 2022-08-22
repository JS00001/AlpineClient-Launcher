import { ipcRenderer } from 'electron';
import { RiSubtractLine, RiCloseLine } from 'react-icons/ri';

const Taskbar = () => {
	// When the - is clicked, minimize the window
	const minimizeWindow = () => {
		ipcRenderer.send('minimize-window');
	};

	// When the x is clicked, close the window
	const closeWindow = () => {
		ipcRenderer.send('close-window');
	};

	return (
		<div className='fixed left-0 right-0 top-0 z-50 bg-primary-400'>
			<div className='titlebar flex items-center justify-between p-5'>
				<div>
					<h1 className='pl-4 text-primary-100'>Alpine Client Launcher v1.0.0</h1>
				</div>
				<div className='titlebar-button flex hover:cursor-pointer'>
					<div
						className='rounded-l-lg bg-primary-300 px-2 py-0.5 hover:bg-primary-200'
						onClick={minimizeWindow}
					>
						<RiSubtractLine className='text-primary-100' size='30' />
					</div>
					<div
						className='rounded-r-lg bg-red-400 bg-opacity-30 px-2 py-0.5 hover:bg-opacity-20'
						onClick={closeWindow}
					>
						<RiCloseLine className='text-primary-100' size='30' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Taskbar;
