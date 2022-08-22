// Take a date, and return how long ago it was in human readable form
export const getTimeSince = (date: string) => {
	const now = new Date();
	const then = new Date(date);
	const diff = now.getTime() - then.getTime();
	const days = Math.floor(diff / (1000 * 60 * 60 * 24));
	const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((diff % (1000 * 60)) / 1000);

	// return the time in years if the difference is greater than a year
	if (days > 365) {
		return `${Math.floor(days / 365)} years ago`;
	}

	// return the time in months if the difference is greater than a month
	if (days > 30) {
		return `${Math.floor(days / 30)} months ago`;
	}

	// return the time in days if the difference is greater than a day
	if (days > 0) {
		return `${days} days ago`;
	}

	// return the time in hours if the difference is greater than an hour
	if (hours > 0) {
		return `${hours} hours ago`;
	}

	// return the time in minutes if the difference is greater than a minute
	if (minutes > 0) {
		return `${minutes} minutes ago`;
	}

	return `${seconds} seconds ago`;
};
