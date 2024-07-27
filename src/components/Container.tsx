import { cn } from "@/lib/utils";
import React, { FC, ReactNode } from "react";

const Container: FC<{ children: ReactNode; className?: string }> = ({
	children,
	className,
}) => {
	return (
		<div
			className={cn(
				`w-full px-5 mx-auto lg:w-[95%] lg:px-0 h-full bg-transparent`,
				className
			)}
		>
			{children}
		</div>
	);
};

export default Container;
