"use client";

import React, { FC } from "react";
import { CurrencyEnum, TransactionType } from "../../types";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "./ui/table";
import TransactionPurpose from "./TransactionPurpose";
import { Copy } from "lucide-react";
import useCopyToClipboard from "@/hooks/useCopyToClipboard";
import { InfinitySpin } from "react-loader-spinner";
import { format } from "date-fns";

const TransactionTable: FC<{
	data: TransactionType[];
	isLoading: boolean;
	isRefetching: boolean;
}> = ({ data, isLoading, isRefetching }) => {
	const { copyToClipboard } = useCopyToClipboard();
	function decimalNumberWithCommas(number: number) {
		const options = {
			minimumFractionDigits: 1,
			maximumFractionDigits: 2,
		};
		const formattedWithOptions = number.toLocaleString("en-US", options);

		return formattedWithOptions;
	}

	const sliceWord = (str: string, n: number) => {
		return str.length >= n ? str.slice(0, 5) + "..." + str.slice(20, n) : str;
	};

	function currencyCode(curency: CurrencyEnum) {
		switch (curency) {
			case CurrencyEnum.USD:
				return "USD";
			case CurrencyEnum.CAD:
				return "USD";
			case CurrencyEnum.GBP:
				return "GBP";
			case CurrencyEnum.NGN:
				return "NGN";
			case CurrencyEnum.KES:
				return "KES";

			default:
				return "NGN";
		}
	}

	return (
		<div className="bg-white overflow-hidden mt-5 rounded-lg">
			<Table className="rounded-t-lg overflow-hidden">
				<TableHeader className="h-[60px] bg-[#7e89c8]/20">
					<TableRow>
						<TableHead className="max-w-[120px]">Full name</TableHead>
						<TableHead className="max-w-[90px] min-w-[70px]">
							Currency
						</TableHead>
						<TableHead className="max-w-[70px] min-w-[70px]">
							Amount
						</TableHead>
						<TableHead className="max-w-[100px] min-w-[100px]">
							Transaction Fee
						</TableHead>

						<TableHead className="max-w-[90px] min-w-[70px]">
							Type
						</TableHead>
						<TableHead className="max-w-[70px] min-w-[70px]">
							Status
						</TableHead>
						<TableHead className="max-w-[70px] min-w-[70px]">
							Transaction Id
						</TableHead>
						<TableHead>Date</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody className="w-full">
					{data?.length !== 0 && !isLoading && !isRefetching && (
						<>
							{data?.map((transaction: TransactionType) => (
								<TableRow
									key={transaction?.transaction_id}
									className="h-[60px] cursor-pointer hover:bg-white"
								>
									<TableCell className="hover:bg-white">
										<div className="min-w-[150px]">
											{" "}
											{transaction?.first_name +
												" " +
												transaction?.last_name}
										</div>
									</TableCell>
									<TableCell className="hover:bg-white">
										{transaction?.currency}
									</TableCell>
									<TableCell className="hover:bg-white  max-w-[100px]">
										<h2>
											{decimalNumberWithCommas(transaction?.amount)}{" "}
											<strong className=" text-xs text-[#7e89c8]">
												{currencyCode(transaction?.currency)}
											</strong>
										</h2>
									</TableCell>
									<TableCell className="hover:bg-white">
										<div className="min-w-[120px] md:min-w-0">
											<h2>
												{decimalNumberWithCommas(
													transaction?.transaction_fee
												)}{" "}
												<strong className=" text-xs text-[#7e89c8]">
													{currencyCode(transaction?.currency)}
												</strong>
											</h2>
										</div>
									</TableCell>
									<TableCell>
										<TransactionPurpose
											transactionType={transaction?.type}
										/>
									</TableCell>
									<TableCell>{transaction?.status}</TableCell>
									<TableCell>
										<div className="flex items-center justify-start gap-2">
											{sliceWord(
												transaction?.transaction_id,
												transaction?.transaction_id.length
											)}

											<button
												className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-50 hover:bg-gray-100"
												onClick={() => {
													copyToClipboard(
														transaction?.transaction_id
													);
												}}
											>
												<Copy size={14} />
											</button>
										</div>
									</TableCell>
									<TableCell>
										<div className="min-w-[80px] max-w-[80px]">
											{format(transaction?.date, "MM/dd/yyyy")}
										</div>
									</TableCell>
								</TableRow>
							))}
						</>
					)}
				</TableBody>
			</Table>
			{data?.length === 0 && !isLoading && !isRefetching && (
				<div className="min-h-[50dvh] w-full flex items-center justify-center rounded-b-lg">
					Empty
				</div>
			)}

			{(isLoading || isRefetching) && (
				<div className="min-h-[50dvh] w-full bg-white flex items-center justify-center rounded-b-lg">
					<InfinitySpin width="200" color="#7e89c8" />
				</div>
			)}
		</div>
	);
};

export default TransactionTable;
