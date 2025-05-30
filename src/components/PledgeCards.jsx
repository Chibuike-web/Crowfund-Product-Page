import React, { useState } from "react";
import styles from "./CrowdfundPage.module.css";
import { Button } from "./Button";
import { useContext } from "react";
import { Context } from "./Context";
import { useMediaQuery } from "react-responsive";
import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function PledgeCards() {
	const { pledges, activeCard, setActiveCard } = useContext(Context);
	const handleActiveCard = (id) => setActiveCard(id);
	return (
		<fieldset className="border-none flex flex-col gap-8">
			<legend className="sr-only">Select a pledge</legend>
			{pledges.map(({ id, name, description, pledgeAmount, remainingStock }) => (
				<PledgeCard
					key={id}
					id={id}
					name={name}
					description={description}
					pledgeAmount={pledgeAmount}
					remainingStock={remainingStock}
					activeCard={activeCard}
					handleActiveCard={() => handleActiveCard(id)}
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
	const [hover, setHover] = useState(false);
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
				<AnimatePresence initial={false}>
					{activeCard === id && (
						<motion.div
							className="overflow-hidden"
							key={`enter-pledge-${id}`}
							initial={{ height: 0, opacity: 0 }}
							animate={{ height: "auto", opacity: 1 }}
							exit={{ height: 0, opacity: 0 }}
							transition={{ duration: 0.3, ease: "easeInOut" }}
						>
							<EnterPledge pledgeAmount={pledgeAmount} id={id} />
						</motion.div>
					)}
				</AnimatePresence>
			</article>
		);
	}

	// Desktop
	return (
		<article
			className={`flex flex-col w-full justify-between rounded-[0.5rem] cursor-pointer border-[0.0625rem] ${
				styles["pledge-container"]
			} 
 ${activeCard === id ? "border-moderate-cyan" : "border-dark-gray/15"} ${
				remainingStock === 0 ? styles.disabled : ""
			}`}
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
				<input
					type="radio"
					name="pledge"
					id={`pledge-${id}`}
					className={`${styles.radio} ${hover && activeCard !== id ? styles.hovered : ""}`}
				/>
				<div>
					<header className="flex justify-between mb-4">
						<h3 id={`pledge-title-${id}`} className="font-bold">
							<span
								className={activeCard === id ? "" : styles["pledge-name"]}
								onMouseEnter={() => setHover(true)}
								onMouseLeave={() => setHover(false)}
							>
								{name}
							</span>
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
			<AnimatePresence initial={false}>
				{activeCard === id && (
					<motion.div
						className="overflow-hidden"
						key={`enter-pledge-${id}`}
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
					>
						<EnterPledge pledgeAmount={pledgeAmount} id={id} />
					</motion.div>
				)}
			</AnimatePresence>
		</article>
	);
};

const EnterPledge = ({ id, pledgeAmount }) => {
	const [inputValue, setInputValue] = useState(pledgeAmount);
	const [focus, setFocus] = useState(null);
	const inputRef = useRef(null);
	const {
		setSuccessModal,
		setModal,
		pledges,
		setPledges,
		setReward,
		activeCard,
		setActiveCard,
		totalAmount,
		setTotalAmount,
		setTotalBackers,
		progress,
		setProgress,
	} = useContext(Context);

	useEffect(() => {
		if (activeCard === id && inputRef.current) {
			setTimeout(() => {
				inputRef.current.focus();
			}, 0);
		}
	}, [activeCard, id]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setSuccessModal(true);
		setModal(false);
		pledges.map((item) => (activeCard === item.id ? setReward(item.name) : ""));
		setActiveCard(0);
		setTotalAmount((prev) => prev + Number(inputValue));
		const newPledges = pledges.map((item) =>
			item.id === activeCard ? { ...item, remainingStock: item.remainingStock - 1 } : item
		);
		setPledges(newPledges);
		setTotalBackers((prev) => prev + 1);
		setProgress((prev) => prev + (inputValue / 100000) * 100);
	};

	return (
		<form
			className="px-8 py-6 border-t-[0.0625rem] border-dark-gray/15 flex justify-between items-center max-md:flex-col max-md:px-4 max-md:gap-4"
			onSubmit={handleSubmit}
		>
			<label htmlFor={`pledgeInput-${id}`} className="text-dark-gray">
				Enter your pledge
			</label>
			<div className="flex gap-5 max-md:w-full max-md:gap-3">
				<div
					className={`border-[0.0625rem] border-dark-gray/50 ${
						focus ? "border-moderate-cyan" : ""
					} w-full max-w-[6rem] rounded-full flex items-center px-4 gap-2 max-md:max-w-full`}
				>
					<span className="font-bold text-dark-gray/50">$</span>
					<input
						type="number"
						name="pledgeInput"
						id={`pledgeInput-${id}`}
						value={inputValue}
						className="w-full font-bold text-[0.875rem] leading-[0rem]"
						onChange={(e) => setInputValue(e.target.value)}
						onFocus={() => setFocus(id)}
						onBlur={(e) => (!e.target.value.trim() && focus === id ? setFocus(null) : setFocus(id))}
						ref={inputRef}
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
