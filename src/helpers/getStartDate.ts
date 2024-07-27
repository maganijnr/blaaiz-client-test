import { format } from "date-fns";

const getStartEndDate = (
	option:
		| "Today"
		| "Last 7 days"
		| "Last 2 weeks"
		| "Last 1 month"
		| "Last 3 months"
		| "Last 1 year"
		| "Last 2 years"
		| ""
): { startDate: string; endDate: string } => {
	if (option === "") return { startDate: "", endDate: "" };

	const currentDateTime = Date.now();
	const currentDate = new Date();
	const endDate = format(
		new Date(
			currentDate.getFullYear(),
			currentDate.getMonth(),
			currentDate.getDate()
		),
		"yyyy-MM-dd"
	);

	let startDateTime = currentDateTime;

	switch (option) {
		case "Last 2 years":
			startDateTime = currentDateTime - 2 * 365 * 86400000;
			break;
		case "Last 1 year":
			startDateTime = currentDateTime - 365 * 86400000;
			break;
		case "Last 3 months":
			startDateTime = currentDateTime - 90 * 86400000;
			break;
		case "Last 1 month":
			startDateTime = currentDateTime - 30 * 86400000;
			break;
		case "Last 2 weeks":
			startDateTime = currentDateTime - 14 * 86400000;
			break;
		case "Last 7 days":
			startDateTime = currentDateTime - 7 * 86400000;
			break;
		default:
			break;
	}

	let tempEndDate = new Date(startDateTime);
	const startDate =
		option === "Today"
			? endDate
			: format(
					new Date(
						tempEndDate.getFullYear(),
						tempEndDate.getMonth(),
						tempEndDate.getDate()
					),
					"yyyy-MM-dd"
			  );

	return {
		startDate,
		endDate,
	};
};

export default getStartEndDate;
