import { CircleX } from "lucide-react";
import React, { FC } from "react";

const SelectedFilter: FC<{ label: string; handleOnclick: () => void }> = ({
	label,
	handleOnclick,
}) => {
	return (
		<div className="bg-[#7e89c8] py-1 px-2 text-white text-sm flex items-center gap-2 rounded-[200px]">
			{label}
			<CircleX
				onClick={handleOnclick}
				size={15}
				className="cursor-pointer"
			/>
		</div>
	);
};

export default SelectedFilter;
