import React, { FC } from "react";
import { TransactionEnum } from "../../types";
import { cn } from "@/lib/utils";
import {
	Activity,
	ArrowRightLeft,
	Handshake,
	Music4,
	Pizza,
	ShieldBan,
	ShoppingBag,
	UsersRound,
} from "lucide-react";

const TransactionPurpose: FC<{ transactionType: TransactionEnum }> = ({
	transactionType,
}) => {
	return (
		<div className={cn(`flex items-center justify-start gap-2`)}>
			{transactionType === TransactionEnum.FAMILY && (
				<UsersRound size={18} />
			)}
			{transactionType === TransactionEnum.SHOPPING && (
				<ShoppingBag size={18} />
			)}
			{transactionType === TransactionEnum.SERVICE && (
				<Handshake size={18} />
			)}
			{transactionType === TransactionEnum.TRANSFER && (
				<ArrowRightLeft size={18} />
			)}
			{transactionType === TransactionEnum.INSURANCE && (
				<ShieldBan size={18} />
			)}
			{transactionType === TransactionEnum.FOOD && <Pizza size={18} />}
			{transactionType === TransactionEnum.MUSIC && <Music4 size={18} />}
			{transactionType === TransactionEnum.OTHERS && <Activity size={18} />}

			<p>{transactionType}</p>
		</div>
	);
};

export default TransactionPurpose;
