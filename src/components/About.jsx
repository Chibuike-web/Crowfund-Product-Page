import RewardCard from "./RewardCard";

export default function About() {
	return (
		<section
			className="bg-white flex flex-col mt-[26px] w-full max-w-[45.625rem] py-10 px-12 border border-gray-200 rounded-[0.5rem] gap-[30px]"
			aria-label="About Project"
		>
			<h3 className="font-bold text-black text-[20px]">About this project</h3>
			<p className="text-dark-gray">
				The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your
				screen to a more comfortable viewing height. Placing your monitor at eye level has the
				potential to improve your posture and make you more comfortable while at work, helping you
				stay focused on the task at hand. <br /> <br />
				Featuring artisan craftsmanship, the simplicity of design creates extra desk space below
				your computer to allow notepads, pens and USB sticks to be stored under the stand.
			</p>
			<div className="flex flex-col gap-[40px]">
				{Array.from({ length: 3 }).map((_) => (
					<RewardCard />
				))}
			</div>
		</section>
	);
}
