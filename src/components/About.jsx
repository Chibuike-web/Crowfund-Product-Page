import RewardCard from "./RewardCard";
import { useContext } from "react";
import { Context } from "./Context";

export default function About() {
	const { pledges } = useContext(Context);
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
				{pledges.map(
					({ id, name, description, pledgeAmount, remainingStock }) =>
						id !== 1 && (
							<RewardCard
								key={`pledge${id}`}
								name={name}
								id={id}
								description={description}
								pledgeAmount={pledgeAmount}
								remainingStock={remainingStock}
							/>
						)
				)}
			</div>
		</section>
	);
}
