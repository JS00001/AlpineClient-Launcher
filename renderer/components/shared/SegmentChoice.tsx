import cn from 'classnames';

export interface SegmentChoiceItem {
	first: boolean;
	last: boolean;
	label: string;
	active: boolean;
	onClick: () => void;
}

const SegmentChoiceItem: React.FC<SegmentChoiceItem> = ({
	first,
	last,
	label,
	active,
	onClick,
}) => {
	const statefulClass = cn(
		'text-xs py-3 ',
		'hover:bg-secondary-100 hover:text-white',
		active && 'bg-secondary-300 text-white font-medium',
		!active && 'bg-primary-200 text-primary-100',
		first && 'rounded-l-lg',
		last && 'rounded-r-lg'
	);

	return (
		<button onClick={onClick} className={statefulClass}>
			{label}
		</button>
	);
};

export interface SegmentChoiceProps {
	options: string[];
	selected: string;
	onSelect: (value: string) => void;
}

const SegmentChoice: React.FC<SegmentChoiceProps> = ({ options, selected, onSelect }) => {
	return (
		<div
			className='grid'
			style={{ gridTemplateColumns: `repeat(${options.length},minmax(0,1fr))` }}
		>
			{options.map((option, index) => (
				<SegmentChoiceItem
					key={index}
					label={option}
					first={index === 0}
					active={option === selected}
					onClick={() => onSelect(option)}
					last={index === options.length - 1}
				/>
			))}
		</div>
	);
};

export default SegmentChoice;
