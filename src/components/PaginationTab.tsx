import React, { Dispatch, FC, SetStateAction } from "react";
import { Button } from "./ui/button";

const PaginationTab: FC<{
	page: number;
	setPage: Dispatch<SetStateAction<number>>;
	isLoading: boolean;
	isRefetching: boolean;
	metaData: {
		currentPage: number;
		nextPage: number;
		offset: number;
		totalPages: number;
		pageLimit: number;
		prevPage: number;
	};
}> = ({ page, setPage, metaData, isLoading, isRefetching }) => {
	return (
		<div className="w-full mt-5 flex items-center justify-between md:justify-end gap-5">
			<Button
				className="bg-[#7e89c8] hover:bg-[#7e89c8]/90 disabled:bg-[#7e89c8]/50"
				onClick={() => {
					if (page > 1) {
						setPage(page - 1);
					}
				}}
				disabled={page === 1 || isLoading || isRefetching}
			>
				Previous
			</Button>
			<div>
				Page {metaData?.currentPage} / {metaData?.totalPages}
			</div>
			<Button
				className="bg-[#7e89c8] hover:bg-[#7e89c8]/90 disabled:bg-[#7e89c8]/50"
				onClick={() => {
					setPage(page + 1);
				}}
				disabled={
					metaData?.currentPage === metaData?.totalPages ||
					isLoading ||
					isRefetching
				}
			>
				Next
			</Button>
		</div>
	);
};

export default PaginationTab;
