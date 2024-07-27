import React, { Dispatch, FC, SetStateAction } from "react";
import { Button } from "./ui/button";
import { ListFilter } from "lucide-react";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "./ui/sheet";

const PageTitle: FC<{
	header: string;
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ header, setIsOpen, isOpen }) => {
	return (
		<>
			<div className="flex items-center justify-between">
				<h1 className="font-semibold text-[#7e89c8] text-2xl lg:text-3xl">
					{header}
				</h1>

				<Button
					variant={"outline"}
					className="px-5 gap-3 py-5 text-base hover:bg-gray-50 font-medium"
					onClick={() => setIsOpen(true)}
				>
					<ListFilter size={18} />
					Filter
				</Button>
			</div>
		</>
	);
};

export default PageTitle;
