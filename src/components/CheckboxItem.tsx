import React, { ReactNode } from "react";
import { Checkbox } from "@/components/ui/checkbox";

interface CheckboxItemProps {
	label: ReactNode;
	id: string;
	onChange?: (checked: boolean) => void;
	isChecked: boolean;
}

const CheckboxItem: React.FC<CheckboxItemProps> = ({
	label,
	id,
	onChange,
	isChecked,
}) => {
	return (
		<div className="flex items-center justify-between py-2">
			<label
				className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				htmlFor={id}
			>
				<div className="flex flex-row items-center gap-2">{label}</div>
			</label>
			<Checkbox id={id} checked={isChecked} onCheckedChange={onChange} />
		</div>
	);
};

export default CheckboxItem;
