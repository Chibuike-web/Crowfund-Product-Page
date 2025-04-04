import { Button } from "./Button";
import { useContext } from "react";
import { Context } from "./Context";

export default function RewardCard({ id, name, description, pledgeAmount, remainingStock }) {
	const { setModal, setActiveCard } = useContext(Context);
	const handleButtonClick = (itemId) => {
		setModal(true);
		itemId === id ? setActiveCard(id) : "";
	};
	return (
		<article
			className={`flex flex-col gap-6 w-full p-8 max-md:p-6 border border-dark-gray/50 rounded-lg ${
				remainingStock === 0 ? "opacity-50 cursor-not-allowed" : ""
			}`}
		>
			<div className="flex justify-between max-md:flex-col">
				<h3 className="text-black font-bold text-[1.25rem] max-sm:text-[1rem]">{name}</h3>
				<p className="text-moderate-cyan font-medium max-sm:text-[0.85rem]">
					Pledge ${pledgeAmount} or more
				</p>
			</div>
			<p className="text-dark-gray max-sm:text-[0.9rem]">{description}</p>
			<div className="flex justify-between max-md:flex-col max-md:gap-4">
				<div className="flex gap-2 items-center">
					<h1 className="text-[2rem] font-bold text-black">{remainingStock}</h1>
					<span className="text-dark-gray">left</span>
				</div>
				{remainingStock !== 0 ? (
					<Button
						text="Select Reward"
						className="bg-moderate-cyan w-[9.75rem] h-12 rounded-full text-white hover:bg-dark-cyan transition-colors duration-300 cursor-pointer"
						handleButtonClick={() => handleButtonClick(id)}
					/>
				) : (
					<Button
						text="Out of Stock"
						className="bg-dark-gray w-[9.75rem] h-12 rounded-full text-white"
					/>
				)}
			</div>
		</article>
	);
}
