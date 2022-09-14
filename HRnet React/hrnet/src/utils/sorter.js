export const sorter = (a, b, orderBy) => {
	if (b[orderBy] < a[orderBy]) {
		return 1;
	}
	if (b[orderBy] > a[orderBy]) {
		return -1;
	}
	return 0;
};

export const getSorter = (order, orderBy) => {
	return order === "asc"
		? (a, b) => sorter(a, b, orderBy)
		: (a, b) => -sorter(a, b, orderBy);
};
