import React from "react";
import { Cancel } from "./Icons";

export default function BackProjectModal({ modal, setModal }) {
	const handleCancelButton = () => {
		setModal(false);
	};
	return (
		<div
			className="fixed bg-black/25 inset-0 justify-items-center content-center px-6"
			onClick={handleCancelButton}
		>
			<div
				className="relative text-black z-50 bg-white w-full max-w-[730px] px-12 py-12"
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<figure
					className="absolute right-[40px] top-[32px] cursor-pointer"
					onClick={handleCancelButton}
				>
					<Cancel fill="#7A7A7A" />
				</figure>
				<h1 className="text-[24px] font-bold">Back this project</h1>
				<p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
			</div>
		</div>
	);
}
