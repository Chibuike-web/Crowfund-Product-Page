import React, { useState } from "react";
import styles from "./CrowdfundPage.module.css";
import { Button } from "./Button";

const pledgeRewards = [
	{
		id: 1,
		name: "Pledge with no reward",
		description: `Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.`,
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

export default function PledgeCards() {
	const [activeCard, setActiveCard] = useState(0);
	const handleActiveCard = (id) => {
		setActiveCard(id);
	};
	return (
		<form className="flex flex-col gap-8">
			{pledgeRewards.map(({ id, name, description, pledgeAmount, remainingStock }) => (
				<PledgeCard
					key={id}
					id={id}
					name={name}
					description={description}
					pledgeAmount={pledgeAmount}
					remainingStock={remainingStock}
					activeCard={activeCard}
					handleActiveCard={handleActiveCard}
				/>
			))}
		</form>
	);
}

const PledgeCard = ({
	id,
	name,
	description,
	pledgeAmount,
	remainingStock,
	activeCard,
	handleActiveCard,
}) => {
	const disabledStyle = remainingStock === 0 ? { opacity: 0.5, pointerEvents: "none" } : {};
	return (
		<section
			className={`flex flex-col w-full justify-between rounded-[8px] cursor-pointer border-[1px] ${
				activeCard === id ? "border-moderate-cyan" : "border-dark-gray/15"
			}`}
			style={disabledStyle}
			onClick={() => {
				handleActiveCard(id);
			}}
		>
			<label
				htmlFor={`pledge-${id}`}
				className="flex w-full justify-between rounded-[8px] gap-8 cursor-pointer px-8 py-8 "
			>
				<input type="radio" name="pledge" id={`pledge-${id}`} className={`${styles.radio}`} />
				<article>
					<header className="flex justify-between mb-4">
						<h3 className="font-bold">
							{name}{" "}
							{id !== 1 && (
								<span className="text-moderate-cyan ml-4">Pledge ${pledgeAmount} or more</span>
							)}
						</h3>
						<h2 className="font-bold text-[18px]">
							{id !== 1 && (
								<>
									{remainingStock} <span className="font-medium text-dark-gray ml-[6px]">left</span>
								</>
							)}
						</h2>
					</header>
					<p className="text-[14px]">{description}</p>
				</article>
			</label>
			{activeCard === id && <EnterPledge />}
		</section>
	);
};

const EnterPledge = () => {
	return (
		<div className="px-8 py-6 border-t-[1px] border-dark-gray/15 flex justify-between">
			<p>Enter your pledge</p>
			<div>
				<input type="text" name="" id="" />
				<Button />
			</div>
		</div>
	);
};
