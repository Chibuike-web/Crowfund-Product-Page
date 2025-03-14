import { BookmarkIcon } from "./Icons";

export function Button({ text, className = "" }) {
	return (
		<button type="button" className={className}>
			{text}
		</button>
	);
}

export function BookmarkButton() {
	return (
		<button
			type="button"
			className="flex gap-[10px] items-center font-bold text-dark-gray w-[176px] h-[3.5rem] bg-[rgba(122,122,122,0.1)] rounded-full"
		>
			<BookmarkIcon /> Bookmark
		</button>
	);
}
