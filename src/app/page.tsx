"use client";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import PageTitle from "@/components/PageTitle";
import TransactionTable from "@/components/TransactionTable";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
} from "@/components/ui/sheet";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useState } from "react";
import { CheckboxFilters, TransactionType } from "../../types";
import axios from "axios";
import { Toaster } from "@/components/ui/toaster";
import { Input } from "@/components/ui/input";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import CheckboxItem from "@/components/CheckboxItem";
import {
	currencyData,
	dateFilterOptions,
	statusData,
	transactionTypeData,
} from "@/data/filter-data";
import getStartEndDate from "@/helpers/getStartDate";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import PaginationTab from "@/components/PaginationTab";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_API;
export default function Home() {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [search, setSearch] = useState<string>("");
	const [fetchedData, setFetchedData] = useState<TransactionType[]>([]);
	const [selectedFilters, setSelectedFilters] = useState<CheckboxFilters>({
		currencyFilters: [],
		typeFilters: [],
		statusFilters: [],
	});
	const [dateFilter, setDateFilter] = useState<
		| "Today"
		| "Last 7 days"
		| "Last 2 weeks"
		| "Last 1 month"
		| "Last 3 months"
		| "Last 1 year"
		| "Last 2 years"
		| ""
	>("");
	const [minAmount, setMinAmount] = useState<string>("");
	const [maxAmount, setMaxAmount] = useState<string>("");
	const [minFee, setMinFee] = useState<string>("");
	const [maxFee, setMaxFee] = useState<string>("");

	const { startDate, endDate } = getStartEndDate(dateFilter);

	const { isLoading, data, isRefetching } = useQuery({
		queryKey: [
			"transactionList",
			search,
			selectedFilters,
			startDate,
			endDate,
			minAmount,
			maxAmount,
			currentPage,
		],
		queryFn: async () => {
			const response = axios.get(
				`${BASE_URL}/transactions/user-transactions?currentPage=${Number(
					currentPage
				)}&limit=${Number(
					10
				)}&search=${search}&currency=${selectedFilters?.currencyFilters?.toString()}&type=${selectedFilters?.typeFilters?.toString()}&status=${selectedFilters?.statusFilters?.toString()}&start_date=${startDate}&end_date=${endDate}&maximum_amount=${
					Number(maxAmount) !== 0 ? Number(maxAmount) : ``
				}&minimum_amount=${
					Number(minAmount) !== 0 ? Number(minAmount) : ``
				}`
			);

			return response;
		},
	});

	const handleCheckboxChange = useCallback(
		(filterType: keyof CheckboxFilters, id: string) => {
			setSelectedFilters((prevState) => {
				const updatedFilters = prevState[filterType].includes(id)
					? prevState[filterType].filter((item) => item !== id)
					: [...prevState[filterType], id];

				return {
					...prevState,
					[filterType]: updatedFilters,
				};
			});
		},
		[]
	);

	useEffect(() => {
		if (data?.data?.data && !isLoading && !isRefetching) {
			setFetchedData(data?.data?.data);
		}
	}, [fetchedData, isLoading, isRefetching]);

	console.log(data?.data);

	return (
		<main className="w-full bg-gray-50 min-h-screen relative">
			<PageHeader />
			<section className=" mt-5 sm:mt-8 lg:mt-10">
				<Container>
					<PageTitle
						header="Transactions"
						isOpen={isOpen}
						setIsOpen={setIsOpen}
					/>
					<TransactionTable
						data={fetchedData}
						isLoading={isLoading}
						isRefetching={isRefetching}
					/>
					<PaginationTab
						page={currentPage}
						setPage={setCurrentPage}
						metaData={data?.data?.meta}
						isLoading={isLoading}
						isRefetching={isRefetching}
					/>
				</Container>
				<Sheet
					open={isOpen}
					onOpenChange={() => {
						setIsOpen(false);
					}}
				>
					<SheetContent className="overflow-y-scroll">
						<SheetHeader>
							<SheetTitle>Filter data by:</SheetTitle>
						</SheetHeader>

						<div className="w-full flex flex-col mt-5 gap-5">
							<Input
								value={search}
								onChange={(e) => setSearch(e.target.value)}
								placeholder="Search by name"
								className="h-12"
							/>

							<Accordion
								className="w-full space-y-2 mt-5"
								defaultValue={[
									"currency-filter",
									"type-filter",
									"status-filter",
								]}
								type="multiple"
							>
								<AccordionItem value="currency-filter">
									<AccordionTrigger className="rounded-lg bg-gray-50 p-2 no-underline">
										Currency
									</AccordionTrigger>
									<AccordionContent className="space-y-2 p-2">
										{currencyData?.map((currency) => (
											<CheckboxItem
												key={currency?.value}
												id={currency?.value}
												label={currency?.label}
												isChecked={
													selectedFilters.currencyFilters.includes(
														currency.value
													)
														? true
														: false
												}
												onChange={() =>
													handleCheckboxChange(
														"currencyFilters",
														currency?.value
													)
												}
											/>
										))}
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="type-filter">
									<AccordionTrigger className="rounded-lg bg-gray-50 p-2 no-underline">
										Type
									</AccordionTrigger>
									<AccordionContent className="space-y-2 p-2">
										{transactionTypeData?.map((type) => (
											<CheckboxItem
												key={type?.value}
												id={type?.value}
												label={type?.label}
												isChecked={
													selectedFilters.typeFilters.includes(
														type.value
													)
														? true
														: false
												}
												onChange={() =>
													handleCheckboxChange(
														"typeFilters",
														type?.value
													)
												}
											/>
										))}
									</AccordionContent>
								</AccordionItem>

								<AccordionItem value="status-filter">
									<AccordionTrigger className="rounded-lg bg-gray-50 p-2 no-underline">
										Status
									</AccordionTrigger>
									<AccordionContent className="space-y-2 p-2">
										{statusData?.map((status) => (
											<CheckboxItem
												key={status?.value}
												id={status?.value}
												label={status?.label}
												isChecked={
													selectedFilters.statusFilters.includes(
														status.value
													)
														? true
														: false
												}
												onChange={() =>
													handleCheckboxChange(
														"statusFilters",
														status?.value
													)
												}
											/>
										))}
									</AccordionContent>
								</AccordionItem>
							</Accordion>

							<Select
								onValueChange={(
									value:
										| "Today"
										| "Last 7 days"
										| "Last 2 weeks"
										| "Last 1 month"
										| "Last 3 months"
										| "Last 1 year"
										| "Last 2 years"
								) => setDateFilter(value)}
							>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Select date" />
								</SelectTrigger>
								<SelectContent>
									{dateFilterOptions?.map((date) => (
										<SelectItem value={date?.value}>
											{date?.label}
										</SelectItem>
									))}
								</SelectContent>
							</Select>

							<div className="flex flex-col md:flex-row gap-5 items-center justify-between">
								<div className="w-full max-w-[150px]">
									<Label>Min amount</Label>
									<Input
										placeholder="0"
										value={minAmount}
										onChange={(e) => setMinAmount(e.target.value)}
									/>
								</div>

								<div className="w-full max-w-[150px]">
									<Label>Max amount</Label>
									<Input
										placeholder="100,000"
										value={maxAmount}
										onChange={(e) => setMaxAmount(e.target.value)}
									/>
								</div>
							</div>

							<div className="flex flex-col md:flex-row gap-5 items-center justify-between">
								<div className="w-full max-w-[150px]">
									<Label>Min fee</Label>
									<Input
										placeholder="0"
										value={minFee}
										onChange={(e) => setMinFee(e.target.value)}
									/>
								</div>

								<div className="w-full max-w-[150px]">
									<Label>Max fee</Label>
									<Input
										placeholder="10"
										value={maxFee}
										onChange={(e) => setMaxFee(e.target.value)}
									/>
								</div>
							</div>
						</div>
					</SheetContent>
				</Sheet>
			</section>
			<Toaster />
		</main>
	);
}
