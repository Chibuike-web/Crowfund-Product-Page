import { Button } from "./Button";
import { BookmarkButton } from "./Button";

export default function ProductSection() {
	return (
		<section className="relative mt-[-5.8125rem] bg-white w-full max-w-[45.625rem] border border-gray-200 rounded-[0.5rem] px-12">
			<figure className="absolute left-[50%] -translate-y-1/2 -translate-x-1/2">
				<img src="/logo-mastercraft.svg" alt="Logo Mastercraft" />
			</figure>
			<h1 className="mt-[3.5625rem] text-center font-bold text-[1.75rem] text-black">
				Mastercraft Bamboo Monitor Riser
			</h1>
			<p className="text-center text-dark-gray font-medium mt-4">
				A beautiful & handcrafted monitor stand to reduce neck and eye strain.
			</p>
			<div className="mt-10 mb-10 flex justify-between">
				<Button
					text="Back this project"
					className="w-[12.75rem] h-[3.5rem] bg-moderate-cyan text-white rounded-full font-bold"
				/>
				<BookmarkButton />
			</div>
		</section>
	);
}
