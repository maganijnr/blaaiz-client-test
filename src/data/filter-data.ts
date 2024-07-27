import { CurrencyEnum, StatusEnum, TransactionEnum } from "../../types";

export const currencyData = [
	{ label: "USD", value: CurrencyEnum.USD },
	{ label: "CAD", value: CurrencyEnum.CAD },
	{ label: "GBP", value: CurrencyEnum.GBP },
	{ label: "NGN", value: CurrencyEnum.NGN },
	{ label: "KES", value: CurrencyEnum.KES },
];

export const transactionTypeData = [
	{ label: TransactionEnum.FAMILY, value: TransactionEnum.FAMILY },
	{ label: TransactionEnum.SHOPPING, value: TransactionEnum.SHOPPING },
	{ label: TransactionEnum.TRANSFER, value: TransactionEnum.TRANSFER },
	{ label: TransactionEnum.SERVICE, value: TransactionEnum.SERVICE },
	{ label: TransactionEnum.INSURANCE, value: TransactionEnum.INSURANCE },
	{ label: TransactionEnum.FOOD, value: TransactionEnum.FOOD },
	{ label: TransactionEnum.MUSIC, value: TransactionEnum.MUSIC },
	{ label: TransactionEnum.OTHERS, value: TransactionEnum.OTHERS },
];

export const statusData = [
	{ label: StatusEnum.PENDING, value: StatusEnum.PENDING },
	{ label: StatusEnum.COMPLETED, value: StatusEnum.COMPLETED },
	{ label: StatusEnum.FAILED, value: StatusEnum.FAILED },
];

export const dateFilterOptions: {
	label: string;
	value:
		| "Today"
		| "Last 7 days"
		| "Last 2 weeks"
		| "Last 1 month"
		| "Last 3 months"
		| "Last 1 year"
		| "Last 2 years";
}[] = [
	{ label: "Today", value: "Today" },
	{ label: "Last 7 days", value: "Last 7 days" },
	{ label: "Last 2 weeks", value: "Last 2 weeks" },
	{ label: "Last 1 month", value: "Last 1 month" },
	{ label: "Last 3 months", value: "Last 3 months" },
	{ label: "Last 1 year", value: "Last 1 year" },
	{ label: "Last 2 years", value: "Last 2 years" },
];
