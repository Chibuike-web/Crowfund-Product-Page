import React from "react";
import styles from "./CrowdfundPage.module.css";
import { Cancel } from "./Icons";

export default function BackProjectModal({ modal, setModal }) {
	const handleCancelButton = () => {
		setModal(false);
	};
	return (
		<div
			className="fixed bg-black/25 inset-0 z-50 justify-items-center content-center px-6"
			onClick={handleCancelButton}
		>
			<article
				className="relative text-black bg-white w-full max-w-[730px] px-12 py-12 rounded-[8px]"
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<button
					type="button"
					className="absolute right-[40px] top-[32px] cursor-pointer"
					onClick={handleCancelButton}
				>
					<Cancel fill="#7A7A7A" />
				</button>
				<h1 className="text-[24px] font-bold">Back this project</h1>
				<p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
				<PledgeCards />
			</article>
		</div>
	);
}

const pledgeRewards = [
	{
		id: 1,
		name: "Pledge with no reward",
		description: `You get an ergonomic stand made of natural bamboo. You’ve helped us launch our promotional campaign, and you’ll be added to a special Backer member list.`,
		pledgeAmount: 25,
		remainingStock: 101,
	},
	{
		id: 2,
		name: "Bamboo Stand",
		description: `You get an ergonomic stand made of natural bamboo. You’ve helped us launch our promotional campaign, and you’ll be added to a special Backer member list.`,
		pledgeAmount: 25,
		remainingStock: 101,
	},
	{
		id: 3,
		name: "Black Edition Stand",
		description: `You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.`,
		pledgeAmount: 75,
		remainingStock: 64,
	},
	{
		id: 4,
		name: "Mahogany Special Edition",
		description: `You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.`,
		pledgeAmount: 200,
		remainingStock: 0,
	},
];

const PledgeCards = () => {
	return (
		<form action="">
			{pledgeRewards.map(({ id, name, description, pledgeAmount, remainingStock }) => (
				<PledgeCard
					key={id}
					id={id}
					name={name}
					description={description}
					pledgeAmount={pledgeAmount}
					remainingStock={remainingStock}
				/>
			))}
		</form>
	);
};

const PledgeCard = ({ id, name, description, pledgeAmount, remainingStock }) => {
	return (
		<label
			htmlFor={`pledge-${id}`}
			className="flex w-full justify-between pl-4 pr-8 py-6 rounded-[12px] gap-[46px] cursor-pointer"
		>
			<input type="radio" name="pledge" id={`pledge-${id}`} className={`${styles.radio}`} />
			<article>
				<h2 className="font-bold leading-[20px] mb-[12px] ">{name}</h2>
				<p className="text-[14px]">{description}</p>
			</article>
		</label>
	);
};
