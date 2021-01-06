export default function dateFilter(date) {
	const monthNames = [
		"Январь",
		"Февраль",
		"Март",
		"Апрель",
		"Май",
		"Июнь",
		"Июль",
		"Август",
		"Сентябрь",
		"Октябрь",
		"Ноябрь",
		"Декабрь",
	];
	const dateObj = new Date(date);
	const month = monthNames[dateObj.getMonth()];
	const day = String(dateObj.getDate()).padStart(2, "0");
	const year = dateObj.getFullYear();
	const output = month + "\n" + day + ", " + year;

	return output;
}
