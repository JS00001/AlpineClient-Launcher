import cn from 'classnames';
import { useEffect, useState } from 'react';
import { Range, getTrackBackground } from 'react-range';

export interface SliderProps {
	step: number;
	min: number;
	max: number;
	startingMin: number;
	startingMax: number;
	label?: string;
	trackClassName?: string;
	thumbClassName?: string;
}

const Slider: React.FC<SliderProps> = ({
	step,
	min,
	max,
	startingMin,
	startingMax,
	label = '',
	trackClassName,
	thumbClassName,
}) => {
	const [value, setValue] = useState<number[]>([startingMin, startingMax]);
	const [trackBackground, setTrackBackground] = useState<string>('transparent');

	// Whenever value changes, update the track background
	useEffect(() => {
		if (typeof window !== 'undefined') {
			// Creates a gradient track background, filling in the range between the min and max values
			const background = getTrackBackground({
				min,
				max,
				values: value,
				colors: [
					window.getComputedStyle(document.documentElement).getPropertyValue('--primary-200'),
					window.getComputedStyle(document.documentElement).getPropertyValue('--secondary-300'),
					window.getComputedStyle(document.documentElement).getPropertyValue('--primary-200'),
				],
			});

			setTrackBackground(background);
		}
	}, [value]);

	const trackClasses = cn(
		'h-2 rounded-full bg-primary-200 cursor-pointer',
		trackClassName ? trackClassName : 'w-full'
	);

	const thumbClasses = cn(
		'h-5 w-5 rounded-full bg-primary-100 hover:bg-secondary-200 focus:outline-none',
		thumbClassName
	);

	return (
		<div className='flex w-full items-center justify-end gap-x-5'>
			<p className='text-sm text-white'>
				{value[0]}-{value[1]}
				{label}
			</p>
			<Range
				step={step}
				min={min}
				max={max}
				values={value}
				onChange={(values) => setValue(values)}
				renderTrack={({ props, children }) => (
					<div {...props} style={{ background: trackBackground }} className={trackClasses}>
						{children}
					</div>
				)}
				renderThumb={({ props }) => <div {...props} className={thumbClasses} />}
			/>
		</div>
	);
};

export default Slider;
