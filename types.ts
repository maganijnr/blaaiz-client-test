import { Checkbox } from "@/components/ui/checkbox";
export enum CurrencyEnum {
	USD = "USD",
	CAD = "CAD",
	NGN = "NGN",
	GBP = "GBP",
	KES = "KES",
}

export enum StatusEnum {
	PENDING = "PENDING",
	COMPLETED = "COMPLETED",
	FAILED = "FAILED",
}

export enum TransactionEnum {
	FAMILY = "FAMILY",
	SHOPPING = "SHOPPING",
	TRANSFER = "TRANSFER",
	SERVICE = "SERVICE",
	INSURANCE = "INSURANCE",
	FOOD = "FOOD",
	MUSIC = "MUSIC",
	OTHERS = "OTHERS",
}

export type TransactionType = {
	id: string;
	first_name: string;
	last_name: string;
	amount: number;
	currency: CurrencyEnum;
	status: StatusEnum;
	transaction_fee: number;
	type: TransactionEnum;
	date: string;
	card: string;
	transaction_id: string;
};

export type CheckboxFilters = {
	currencyFilters: string[];
	typeFilters: string[];
	statusFilters: string[];
};
