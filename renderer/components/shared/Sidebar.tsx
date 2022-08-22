import React from 'react';
import cn from 'classnames';
import { IconType } from 'react-icons';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import {
	RiBarChartFill,
	RiHandHeartFill,
	RiInformationFill,
	RiNewspaperFill,
	RiSettings3Fill,
	RiShoppingCart2Fill,
	RiArrowDropUpLine,
	RiPlayFill,
} from 'react-icons/ri';

export const SidebarItems = [
	{
		icon: RiNewspaperFill,
		label: 'News',
		path: '/home',
		disabled: false,
	},
	{
		icon: RiSettings3Fill,
		label: 'Settings',
		path: '/settings',
		disabled: false,
	},
	{
		icon: RiBarChartFill,
		label: 'Statistics',
		path: '/statistics',
		disabled: false,
	},
	{
		icon: RiHandHeartFill,
		label: 'Partners',
		path: '/partners',
		disabled: false,
	},
	{
		icon: RiShoppingCart2Fill,
		label: 'Store',
		path: '/store',
		disabled: false,
	},
	{
		icon: RiInformationFill,
		label: 'About',
		path: '/about',
		disabled: false,
	},
];

const calculateYPos = (index: number) => {
	return index * 60;
};

export interface SidebarItemProps {
	icon: IconType;
	label: string;
	path?: string;
	disabled?: boolean;
	yPos?: number;
	fromYPos?: number;
	active?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
	icon,
	label,
	active,
	disabled,
	path,
	yPos,
	fromYPos,
}) => {
	const Icon = icon;
	const router = useRouter();

	const classNames = cn(
		'flex cursor-pointer items-center gap-x-3 rounded-2xl py-3 px-6 z-10',
		active ? 'text-white ' : 'text-primary-100 hover:bg-primary-200 hover:text-white',
		disabled && 'text-gray-500 cursor-not-allowed hover:bg-transparent hover:text-gray-500'
	);

	const onClick = () => {
		if (path && !disabled) {
			// When clicked, add the referrer to the query string, so the animation comes from the correct place
			router.push(`${path}?referer=${router.pathname}`);
		}
	};

	return (
		<>
			{active && (
				<motion.div
					initial={{ y: fromYPos }}
					animate={{ y: yPos }}
					transition={{ duration: 0.25, ease: [0.42, 0, 0.58, 1] }}
					className='absolute h-[52px] w-[318px] rounded-2xl bg-primary-200 '
				/>
			)}
			<div className={classNames} onClick={onClick}>
				<Icon size={20} />
				<h1 className='text-lg'>{label}</h1>
			</div>
		</>
	);
};

export interface SidebarProps {
	activeItem?: typeof SidebarItems[number]['path'];
}

const Sidebar: React.FC<SidebarProps> = ({ activeItem }) => {
	const router = useRouter();

	/**
	 * Get the referer from the query string
	 * Find the old route in the list of items, and calculate what Y the animation should start at
	 */
	const oldItem = router.query.referer || '/home';
	const fromXPos = calculateYPos(SidebarItems.findIndex((item) => item.path === oldItem) || 0);

	return (
		<>
			<div className='fixed h-full w-96 pb-8 pl-8 pt-20'>
				<div className='flex h-full w-full flex-col border-r-2 border-primary-300 pr-8'>
					<div className='mb-5 flex items-center justify-center'>
						<div className='mr-4 w-20'>
							<img src='/logo.png' className='h-full w-full select-none' />
						</div>
						<div>
							<h1 className='text-2xl font-semibold uppercase leading-tight text-white'>
								Alpine
								<br />
								Client
							</h1>
						</div>
					</div>

					<div className='relative flex h-full flex-col justify-between'>
						<div className='flex flex-col justify-between gap-y-2 '>
							{SidebarItems.map((item, index) => (
								<SidebarItem
									key={index}
									fromYPos={fromXPos}
									yPos={calculateYPos(index)}
									active={activeItem === item.path}
									{...item}
								/>
							))}
						</div>

						<div>
							<div className='relative w-full cursor-pointer rounded-xl bg-secondary-200  text-white '>
								<div className='flex items-center justify-between rounded-xl py-5 px-0.5 hover:bg-secondary-100 '>
									<RiPlayFill size={30} />
									<div className='text-center'>
										<h1 className='text-lg font-medium leading-5 tracking-wide'>LAUNCH 1.19.1</h1>
										<h2 className='text-[10px]'>READY TO LAUNCH</h2>
									</div>
									<div />
								</div>
								<div className='absolute right-0 top-0 flex h-full items-center rounded-r-xl bg-secondary-100 hover:bg-secondary-200'>
									<RiArrowDropUpLine size={30} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Sidebar;
