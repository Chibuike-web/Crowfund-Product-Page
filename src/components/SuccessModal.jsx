import React from "react";

export default function SuccessModal() {
	return (
		<div className="fixed bg-black/25 inset-0 z-50 justify-items-center content-center px-6">
			<article
				className="bg-white w-full max-w-[730px] px-12 py-12 rounded-[8px] max-md:px-8 max-md:py-8"
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<h1 className="text-[24px] font-bold">Back this project</h1>
				<p className="text-dark-gray font-medium mt-4 mb-8">
					Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
				</p>
			</article>
		</div>
	);
}
