import { useState } from "react";
import { BookmarkIcon } from "./Icons";

export function Button({ text, className = "" }) {
	return (
		<button type="button" className={className}>
			{text}
		</button>
	);
}

export function BookmarkButton({ text }) {
	const [bookmark, setBookmark] = useState(false);

	return (
		<button
			type="button"
			className={`flex gap-[10px] max-md:w-max items-center font-bold text-dark-gray w-max pr-6 max-md:pr-0 h-[3.5rem] ${
				bookmark ? "bg-moderate-cyan/10" : "bg-[rgba(122,122,122,0.1)]"
			} rounded-full cursor-pointer`}
			onClick={() => setBookmark(!bookmark)}
		>
			<BookmarkIcon
				outerColor={bookmark ? "fill-dark-cyan" : "fill-[#B1B1B1]"}
				innerColor={bookmark ? " fill-white" : "fill-[#2F2F2F]"}
				className="transition-all duration-300 ease-in-out"
			/>{" "}
			<p
				className={`max-md:hidden ${
					bookmark ? "text-dark-cyan" : "text-dark-gray"
				}  transition-all duration-300 ease-in-out`}
			>
				{bookmark ? "Bookmarked" : text}
			</p>
		</button>
	);
}
