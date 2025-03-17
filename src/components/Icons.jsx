export const Harmburger = ({ className = "" }) => {
	return (
		<svg
			width="16"
			height="15"
			viewBox="0 0 16 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<g clipPath="url(#clip0_2021_49)">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M0 0H16V3H0V0ZM0 6H16V9H0V6ZM0 12H16V15H0V12Z"
					fill="white"
				/>
			</g>
			<defs>
				<clipPath id="clip0_2021_49">
					<rect width="16" height="15" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};

export const Cancel = ({ className = "" }) => {
	return (
		<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0_2021_45)">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M2.40325 0.781982L13.7173 12.096L11.5953 14.218L0.28125 2.90398L2.40325 0.781982Z"
					fill="white"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M0.28125 12.096L11.5953 0.781982L13.7173 2.90398L2.40325 14.218L0.28125 12.096Z"
					fill="white"
				/>
			</g>
			<defs>
				<clipPath id="clip0_2021_45">
					<rect width="14" height="15" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};

export const BookmarkIcon = ({ className = "", outerColor = "", innerColor = "" }) => {
	return (
		<svg
			className={className}
			width="56"
			height="56"
			viewBox="0 0 56 56"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_2063_253)">
				<path
					d="M28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z"
					className={outerColor}
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M23 19V37L28 31.942L33 37V19H23Z"
					className={innerColor}
				/>
			</g>
			<defs>
				<clipPath id="clip0_2063_253">
					<rect width="56" height="56" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};
