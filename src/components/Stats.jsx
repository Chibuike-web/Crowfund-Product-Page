import React from "react";

export default function Stats() {
	return (
		<section
			className="bg-white flex flex-col mt-[26px] w-full max-w-[45.625rem] py-10 px-12 border border-gray-200 rounded-[0.5rem] gap-[30px]"
			aria-label="Project Statistics"
		>
			<div className="flex w-full max-w-[514px] justify-between">
				<article className="flex flex-col">
					<strong className="block text-[2rem] font-bold">$89,914</strong>
					<p className="text-gray-500">of $100,000 backed</p>
				</article>
				<span className="block w-[1px] min-h-[100%] bg-dark-gray/50 "></span>
				<article className="flex flex-col">
					<strong className="block text-[2rem] font-bold">5,007</strong>
					<p className="text-gray-500">total backers</p>
				</article>
				<span className="block w-[1px] min-h-[100%] bg-dark-gray/50 "></span>
				<article className="flex flex-col">
					<strong className="block text-[2rem] font-bold">56</strong>
					<p className="text-gray-500">days left</p>
				</article>
			</div>
			<div className="block bg-dark-gray/10 w-full h-[12px] rounded-full">
				<span className="block bg-moderate-cyan w-[50%] min-h-full rounded-full"></span>
			</div>
		</section>
	);
}
