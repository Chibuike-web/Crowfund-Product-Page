import React from "react";

export default function Stats() {
	return (
		<section
			className="bg-white flex flex-col mt-[26px] w-full max-w-[45.625rem] py-10 px-12 max-md:px-6 border border-gray-200 rounded-[0.5rem] gap-[30px]"
			aria-label="Project Statistics"
		>
			<div className="flex w-full max-w-[514px] justify-between max-md:flex-col max-md:gap-6 max-md:items-center max-md:max-w-full">
				<article className="flex flex-col">
					<strong className="block text-[2rem] font-bold max-md:text-center max-md:text-[1.75rem]">
						$89,914
					</strong>
					<p className="text-dark-gray font-medium max-md:text-[0.75rem]">of $100,000 backed</p>
				</article>
				<span className="block w-[1px] min-h-[100%] bg-dark-gray/50 max-md:h-[1px] max-md:w-[35%]"></span>
				<article className="flex flex-col">
					<strong className="block text-[2rem] font-bold max-md:text-center max-md:text-[1.75rem]">
						5,007
					</strong>
					<p className="text-dark-gray font-medium max-md:text-[0.75rem]">total backers</p>
				</article>
				<span className="block w-[1px] min-h-[100%] bg-dark-gray/50 max-md:h-[1px] max-md:w-[35%]"></span>
				<article className="flex flex-col">
					<strong className="block text-[2rem] font-bold max-md:text-center max-md:text-[1.75rem]">
						56
					</strong>
					<p className="text-dark-gray font-medium max-md:text-[0.75rem]">days left</p>
				</article>
			</div>
			<div className="block bg-dark-gray/10 w-full h-[12px] rounded-full">
				<span className="block bg-moderate-cyan w-[50%] min-h-full rounded-full"></span>
			</div>
		</section>
	);
}
