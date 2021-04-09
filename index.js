export default function pIf(condition, doIf, doElse) {
	return async value => {
		const chooseFunction = boolean => boolean === true ? doIf(value) : (doElse ? doElse(value) : value);

		if (typeof condition === 'function') {
			const conditionResult = await condition(value);
			return chooseFunction(conditionResult);
		}

		return chooseFunction(condition);
	};
}
