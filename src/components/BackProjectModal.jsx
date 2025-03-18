import React from "react";
import { Cancel } from "./Icons";
import PledgeCards from "./PledgeCards";

export default function BackProjectModal({ modal, setModal }) {
	const handleCancelButton = () => {
		setModal(false);
	};
	return (
		<div
			className="fixed bg-black/25 inset-0 z-50 justify-items-center content-center px-6"
			onClick={handleCancelButton}
		>
			<article
				className="relative bg-white w-full max-w-[730px] px-12 py-12 rounded-[8px]"
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<button
					type="button"
					className="absolute right-[40px] top-[32px] cursor-pointer"
					onClick={handleCancelButton}
				>
					<Cancel fill="#7A7A7A" />
				</button>
				<h1 className="text-[24px] font-bold">Back this project</h1>
				<p className="text-dark-gray font-medium mt-4 mb-8">
					Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
				</p>
				<PledgeCards />
			</article>
		</div>
	);
}
