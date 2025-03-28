import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
export const Context = createContext();

export default function Provider({ children }) {
	const [modal, setModal] = useState(false);
	const [successModal, setSuccessModal] = useState(false);
	const [activeCard, setActiveCard] = useState(0);
	const [reward, setReward] = useState("");
	const initialProgress = (89914 / 100000) * 100;
	const [progress, setProgress] = useState(initialProgress);
	const [pledges, setPledges] = useState(() => {
		const storedRewards = localStorage.getItem("pledges");
		return (
			JSON.parse(storedRewards) || [
				{
					id: 1,
					name: "Pledge with no reward",
					description: `Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.`,
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
			]
		);
	});

	useEffect(() => {
		localStorage.setItem("pledges", JSON.stringify(pledges));
	}, [pledges]);

	const [totalBackers, setTotalBackers] = useState(() => {
		return Number(localStorage.getItem("totalBackers")) || 5007;
	});
	const [totalAmount, setTotalAmount] = useState(() => {
		return Number(localStorage.getItem("totalAmount")) || 89914;
	});

	useEffect(() => {
		localStorage.setItem("totalBackers", totalBackers);
	}, [totalBackers]);

	useEffect(() => {
		localStorage.setItem("totalAmount", totalAmount);
	}, [totalAmount]);

	return (
		<Context.Provider
			value={{
				modal,
				setModal,
				successModal,
				setSuccessModal,
				activeCard,
				setActiveCard,
				reward,
				setReward,
				pledges,
				setPledges,
				totalAmount,
				setTotalAmount,
				totalBackers,
				setTotalBackers,
				progress,
				setProgress,
			}}
		>
			{children}
		</Context.Provider>
	);
}
