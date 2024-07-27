import Image from "next/image";
import React, { FC } from "react";

const Avatar: FC<{ imageUrl?: string }> = ({ imageUrl }) => {
	return (
		<div className="w-8 h-8  sm:w-10 sm:h-10 rounded-full relative overflow-hidden">
			{imageUrl ? (
				<Image
					src={imageUrl}
					alt="avatar"
					layout="fill"
					objectFit="cover"
				/>
			) : (
				<div className="gradient-bg w-full font-medium text-white cursor-pointer h-full rounded-full flex items-center justify-center bg-transparent">
					JM
				</div>
			)}
		</div>
	);
};

export default Avatar;
