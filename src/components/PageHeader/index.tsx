import React from "react";
import Container from "../Container";
import { Bell } from "lucide-react";
import Avatar from "../Avatar";

const PageHeader = () => {
	return (
		<header className="w-full h-[70px] sticky top-0 right-0 left-0 z-50 bg-white">
			<Container className="flex items-center h-full justify-between">
				<h2 className="gradient-text font-bold text-2xl">Blaaiz Test</h2>

				<div className="flex items-center justify-end gap-5">
					<div className="w-8 h-8  sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 duration-200 ease-in-out transition-all cursor-pointer">
						<Bell />
					</div>

					<Avatar />
				</div>
			</Container>
		</header>
	);
};

export default PageHeader;
