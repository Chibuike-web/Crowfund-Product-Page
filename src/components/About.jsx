import RewardCard from "./RewardCard";

const pledgeRewards = [
	{
		name: "Bamboo Stand",
		description: `You get an ergonomic stand made of natural bamboo. You’ve helped us launch our promotional campaign, and you’ll be added to a special Backer member list.`,
		pledgeAmount: 25,
		remainingStock: 101,
	},
	{
		name: "Black Edition Stand",
		description: `You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.`,
		pledgeAmount: 75,
		remainingStock: 64,
	},
	{
		name: "Mahogany Special Edition",
		description: `You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.`,
		pledgeAmount: 200,
		remainingStock: 0,
	},
];

export default function About() {
	return (
		<section
			className="bg-white flex flex-col mt-[26px] w-full max-w-[45.625rem] py-10 px-12 max-md:px-6 border border-gray-200 rounded-[0.5rem] gap-[30px]"
			aria-label="About Project"
		>
			<h3 className="font-bold text-black text-[1.75rem] max-sm:text-[1.4rem]">
				About this project
			</h3>
			<p className="text-dark-gray max-sm:text-[0.85rem]">
				The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your
				screen to a more comfortable viewing height. Placing your monitor at eye level has the
				potential to improve your posture and make you more comfortable while at work, helping you
				stay focused on the task at hand. <br /> <br />
				Featuring artisan craftsmanship, the simplicity of design creates extra desk space below
				your computer to allow notepads, pens and USB sticks to be stored under the stand.
			</p>
			<div className="flex flex-col gap-[40px]">
				{pledgeRewards.map(({ name, description, pledgeAmount, remainingStock }) => (
					<RewardCard
						key={name}
						name={name}
						description={description}
						pledgeAmount={pledgeAmount}
						remainingStock={remainingStock}
					/>
				))}
			</div>
		</section>
	);
}
