export default function descriptionFilter(text) {
	let formatted = text.length > 40 ? text.substring(0, 40) + "..." : text;
	return formatted;
}
