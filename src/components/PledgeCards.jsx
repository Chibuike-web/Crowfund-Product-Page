import React, { useState } from "react";
import styles from "./CrowdfundPage.module.css";
import { Button } from "./Button";
import { useContext } from "react";
import { ModalContext } from "./ModalContext";
import { useMediaQuery } from "react-responsive";

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
	const handleActiveCard = (id) => setActiveCard(id);
	return (
		<fieldset className="border-none flex flex-col gap-8">
			<legend className="sr-only">Select a pledge</legend>
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
		</fieldset>
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
	const isMobile = useMediaQuery({ maxWidth: 767 });

	// Mobile
	if (isMobile) {
		return (
			<article
				className={`flex flex-col w-full justify-between rounded-[0.5rem] cursor-pointer border-[0.0625rem] ${
					activeCard === id ? "border-dark-cyan" : "border-dark-gray/15"
				} ${remainingStock === 0 ? styles.disabled : ""}`}
				onClick={() => handleActiveCard(id)}
				role="radio"
				aria-checked={activeCard === id}
				aria-labelledby={`pledge-title-${id}`}
				aria-describedby={`pledge-desc-${id}`}
				tabIndex="0"
			>
				<label
					htmlFor={`pledge-${id}`}
					className="flex flex-col rounded-[0.5rem] gap-4 cursor-pointer px-8 py-8 "
				>
					<div className="flex gap-6 items-center">
						<input type="radio" name="pledge" id={`pledge-${id}`} className={`${styles.radio}`} />
						<header className="flex flex-col justify-between mb-4">
							<h3 id={`pledge-title-${id}`} className="font-bold flex flex-col">
								{name}{" "}
								{id !== 1 && (
									<span className="text-moderate-cyan">Pledge ${pledgeAmount} or more</span>
								)}
							</h3>
						</header>
					</div>
					<p id={`pledge-desc-${id}`} className="text-[0.875rem] text-dark-gray">
						{description}
					</p>
					{id !== 1 && (
						<p className="font-bold text-[1.125rem]">
							{remainingStock} <span className="font-medium text-dark-gray">left</span>
						</p>
					)}
				</label>
				{activeCard === id && <EnterPledge pledgeAmount={pledgeAmount} id={id} />}
			</article>
		);
	}

	// Desktop
	return (
		<article
			className={`flex flex-col w-full justify-between rounded-[0.5rem] cursor-pointer border-[0.0625rem] ${
				activeCard === id ? "border-dark-cyan" : "border-dark-gray/15"
			} ${remainingStock === 0 ? styles.disabled : ""}`}
			onClick={() => handleActiveCard(id)}
			role="radio"
			aria-checked={activeCard === id}
			aria-labelledby={`pledge-title-${id}`}
			aria-describedby={`pledge-desc-${id}`}
			tabIndex="0"
		>
			<label
				htmlFor={`pledge-${id}`}
				className="flex w-full justify-between rounded-[0.5rem] gap-8 cursor-pointer px-8 py-8 "
			>
				<input type="radio" name="pledge" id={`pledge-${id}`} className={`${styles.radio}`} />
				<div>
					<header className="flex justify-between mb-4">
						<h3 id={`pledge-title-${id}`} className="font-bold">
							{name}{" "}
							{id !== 1 && (
								<span className="text-moderate-cyan ml-4">Pledge ${pledgeAmount} or more</span>
							)}
						</h3>

						{id !== 1 && (
							<p className="font-bold text-[1.125rem]">
								{remainingStock} <span className="font-medium text-dark-gray ml-[6px]">left</span>
							</p>
						)}
					</header>
					<p id={`pledge-desc-${id}`} className="text-[0.875rem] text-dark-gray">
						{description}
					</p>
				</div>
			</label>
			{activeCard === id && <EnterPledge pledgeAmount={pledgeAmount} id={id} />}
		</article>
	);
};

const EnterPledge = ({ id, pledgeAmount }) => {
	const [inputValue, setInputValue] = useState(pledgeAmount);
	const { setSuccessModal, setModal } = useContext(ModalContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		setSuccessModal(true);
		setModal(false);
	};
	return (
		<form
			className="px-8 py-6 border-t-[0.0625rem] border-dark-gray/15 flex justify-between items-center max-md:flex-col max-md:gap-4"
			onSubmit={handleSubmit}
		>
			<label htmlFor={`pledgeInput-${id}`} className="text-dark-gray">
				Enter your pledge
			</label>
			<div className="flex gap-5 max-md:w-full">
				<div className="border-[0.0625rem] border-dark-gray/50 w-full max-w-[6rem] rounded-full flex items-center px-4 gap-2 max-md:max-w-full">
					<span className="font-bold text-dark-gray/50">$</span>
					<input
						type="number"
						name="pledgeInput"
						id="pledgeInput"
						value={id !== 1 && inputValue}
						className="w-full font-bold text-[0.875rem] leading-[0rem]"
						onChange={(e) => setInputValue(e.target.value)}
					/>
				</div>
				<Button
					text="Continue"
					type="submit"
					className="bg-moderate-cyan hover:bg-dark-cyan text-white px-5 py-3 rounded-full font-medium text-[0.875rem] cursor-pointer w-max max-md:w-full"
				/>
			</div>
		</form>
	);
};
