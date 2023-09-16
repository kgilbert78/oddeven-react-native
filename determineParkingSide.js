export const isOddDay = (date) => date.getDate() % 2 === 1;

export const determineParkingSide = () => {
	const today = new Date();
	const yesterday = new Date();
	yesterday.setDate(today.getDate() - 1);

	const isFoolsDay = isOddDay(today) && isOddDay(yesterday);

	const isAfterSwitch = today.getHours() >= 18;
	const isBeforeSwitch = today.getHours() < 18;

	if (
		(isOddDay(today) && isAfterSwitch) ||
		(isFoolsDay && isBeforeSwitch) ||
		(!isOddDay(today) && isBeforeSwitch)
	) {
		//odd
		return false;
	} else {
		//even
		return true;
	}
};

export const calculateSwitchTime = () => {
	const today = new Date();

	const tomorrow = new Date();
	tomorrow.setDate(today.getDate() + 1);

	const isFoolsDay = isOddDay(today) && isOddDay(tomorrow);
	const isBeforeSwitch = today.getHours() < 18;
	const isAfterSwitch = today.getHours() >= 18;

	let switchTime = new Date();
	switchTime.setHours(18, 0, 0, 0);

	if (isFoolsDay) {
		if (isBeforeSwitch) {
			//switch to happen at 6pm today
			//no modifications to make to date
		} else if (isAfterSwitch) {
			//switch to happen next day at 6pm in two days
			switchTime.setDate(today.getDate() + 2);
		}
	} else {
		if (isBeforeSwitch) {
			//switch to happen at 6pm today
			//no modifications to make to date
		} else if (isAfterSwitch) {
			//switch to happen next day at 6pm
			//add one day to date
			switchTime.setDate(today.getDate() + 1);
		}
	}

	return switchTime;
};

export const isFoolsDay = () => {
	const tomorrow = new Date();
	tomorrow.setDate(tomorrow.getDate() + 1);

	return isOddDay(new Date()) && isOddDay(tomorrow);
};
