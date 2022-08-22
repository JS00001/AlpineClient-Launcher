import { getTimeSince } from '@/lib/dateUtil';
import { useEffect, useState } from 'react';

/* 
  Hook that returns the time since the date passed in.
  This avoids a hydration error, caused by directly using the getTimeSince function.
  Check https://github.com/vercel/next.js/discussions/38263 for more info
*/
export const useTime = (date: string) => {
	const [time, setTime] = useState(date);

	useEffect(() => {
		setTime(getTimeSince(date));
	}, [date]);

	return time;
};
