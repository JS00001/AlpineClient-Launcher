import Option from '@/components/Settings/Option';
import Layout from '@/components/shared/Layout';
import SegmentChoice from '@/components/shared/SegmentChoice';
import Slider from '@/components/shared/Slider';
import { NextPage } from 'next';
import { useState } from 'react';

import { RiCheckFill, RiFolder3Fill, RiRefreshLine } from 'react-icons/ri';

const Settings: NextPage = () => {
	const [isFullScreen, setIsFullScreen] = useState(false);
	const [distributionBranch, setDistributionBranch] = useState<'Master' | 'Development'>('Master');
	const [launcherAction, setLauncherAction] = useState<'Keep Open' | 'Hide Launcher'>(
		'Hide Launcher'
	);

	const updateDistributionBranch = (value: 'Master' | 'Development') => {
		setDistributionBranch(value);
	};

	const updateLauncherAction = (value: 'Keep Open' | 'Hide Launcher') => {
		setLauncherAction(value);
	};

	const updateFullScreen = () => {
		setIsFullScreen(!isFullScreen);
	};

	return (
		<Layout activeItem='/settings'>
			<div className='flex flex-col gap-y-5'>
				<Option>
					<Option.Title>Memory</Option.Title>
					<Option.Description>
						The minimum amount of memory Alpine Client can allocate and use.
					</Option.Description>
					<Option.Content>
						<Slider
							step={1}
							min={2048}
							max={16000}
							startingMax={8000}
							startingMin={4000}
							label='MB'
							trackClassName='w-64'
						/>
					</Option.Content>
				</Option>

				<Option>
					<Option.Title>Distribution Branch</Option.Title>
					<Option.Description>
						The branch used to fetch updates for Alpine Client.
					</Option.Description>
					<Option.Content>
						<div className='grid w-full grid-cols-2 gap-x-2'>
							<input
								placeholder='Enter branch'
								className='rounded-lg bg-primary-200 px-2 py-1 italic text-primary-100'
							/>
							<SegmentChoice
								options={['Master', 'Development']}
								selected={distributionBranch}
								onSelect={updateDistributionBranch}
							/>
						</div>
					</Option.Content>
				</Option>

				<Option>
					<Option.Title>After Launch</Option.Title>
					<Option.Description>
						How should the launcher perform when the game is launched?
					</Option.Description>
					<Option.Content>
						<div className='grid w-full grid-cols-2 gap-x-2'>
							<div />
							<SegmentChoice
								options={['Keep Open', 'Hide Launcher']}
								selected={launcherAction}
								onSelect={updateLauncherAction}
							/>
						</div>
					</Option.Content>
				</Option>

				<Option>
					<Option.Title>Client Run Directory</Option.Title>
					<Option.Description>
						The directory used to contain all Minecraft-related files and folders.
					</Option.Description>
					<Option.Content>
						<div className='grid w-full grid-cols-2 gap-x-2'>
							<div className='flex justify-end gap-x-2 '>
								<div className='flex h-full cursor-pointer items-center justify-center rounded-lg bg-primary-200 p-2 text-primary-100 hover:bg-secondary-100 hover:text-white'>
									<RiRefreshLine size={24} />
								</div>
								<div className='flex h-full cursor-pointer items-center justify-center rounded-lg bg-primary-200 p-2 text-primary-100 hover:bg-secondary-100 hover:text-white'>
									<RiFolder3Fill size={24} />
								</div>
							</div>
							<div className='select-none rounded-lg bg-primary-200 p-2 italic text-primary-100'>
								C:\Users\Jack\Test
							</div>
						</div>
					</Option.Content>
				</Option>

				<Option>
					<Option.Title>Game Resolution</Option.Title>
					<Option.Description>
						What should the initial resolution of the game window be?
					</Option.Description>
					<Option.Content>
						<div className='grid w-full grid-cols-2 gap-x-2'>
							<div
								onClick={updateFullScreen}
								className='flex cursor-pointer select-none items-center justify-between rounded-lg bg-primary-200 p-2 text-primary-100 hover:opacity-80'
							>
								<p>Full Screen?</p>
								{isFullScreen ? (
									<div className='rounded-md border border-primary-200 bg-secondary-300 p-0.5'>
										<RiCheckFill size={20} className='text-white' />
									</div>
								) : (
									<div className='rounded-lg border border-secondary-300 p-0.5'>
										<RiCheckFill size={20} className='text-transparent' />
									</div>
								)}
							</div>
						</div>
					</Option.Content>
				</Option>
			</div>
		</Layout>
	);
};

export default Settings;
