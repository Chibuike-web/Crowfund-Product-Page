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

export const Cancel = ({ className = "", fill = "white" }) => {
	return (
		<svg
			className={className}
			width="14"
			height="15"
			viewBox="0 0 14 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_2021_45)">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M2.40325 0.781982L13.7173 12.096L11.5953 14.218L0.28125 2.90398L2.40325 0.781982Z"
					fill={fill}
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M0.28125 12.096L11.5953 0.781982L13.7173 2.90398L2.40325 14.218L0.28125 12.096Z"
					fill={fill}
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

export const CheckIcon = ({ className = "" }) => {
	return (
		<svg
			className={className}
			width="89"
			height="88"
			viewBox="0 0 89 88"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_2075_287)">
				<path
					d="M44.5 88C68.8005 88 88.5 68.3005 88.5 44C88.5 19.6995 68.8005 0 44.5 0C20.1995 0 0.5 19.6995 0.5 44C0.5 68.3005 20.1995 88 44.5 88Z"
					fill="#3CB3AB"
				/>
				<path d="M28 43.8075L39.1279 55L61 33" stroke="white" strokeWidth="6.875" />
			</g>
			<defs>
				<clipPath id="clip0_2075_287">
					<rect width="88" height="88" fill="white" transform="translate(0.5)" />
				</clipPath>
			</defs>
		</svg>
	);
};
