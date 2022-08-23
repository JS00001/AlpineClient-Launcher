import ReactTooltip from 'react-tooltip';
import Sidebar, { SidebarItems } from './Sidebar';
import Taskbar from './Taskbar';

export interface LayoutProps {
	activeItem: typeof SidebarItems[number]['path'];
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ activeItem, children }) => {
	return (
		<>
			<ReactTooltip />
			<Taskbar />
			<Sidebar activeItem={activeItem} />

			<div className='ml-96  px-16 pb-20 pt-32'>{children}</div>
		</>
	);
};

export default Layout;
