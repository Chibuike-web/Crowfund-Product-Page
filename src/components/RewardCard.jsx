import { Button } from "./Button";

export default function RewardCard() {
	return (
		<article className="bg-white flex flex-col gap-6 w-full p-[2rem] border border-dark-gray/50 rounded-[0.5rem]">
			<div className="flex justify-between">
				<h3>Bamboo Stand</h3>
				<p className="text-moderate-cyan">Pledge $25 or more</p>
			</div>
			<p className="text-dark-gray">
				You get an ergonomic stand made of natural bamboo. You’ve helped us launch our promotional
				campaign, and you’ll be added to a special Backer member list
			</p>
			<div className="flex justify-between">
				<div className="flex gap-[8px] items-center">
					<h1 className="text-[2rem] font-bold text-black">101</h1>
					<span className="text-dark-gray">left</span>
				</div>
				<Button
					text="Select Reward"
					className="bg-moderate-cyan w-[156px] h-[3rem] rounded-full text-white"
				/>
			</div>
		</article>
	);
}
