import { useState } from "react";
import { Cancel, Harmburger } from "./Icons";

export default function Navbar() {
	return (
		<nav className="w-full py-12 max-md:p-6 max-lg:px-6">
			<header className="mx-auto w-full max-w-[69.1875rem] flex justify-between relative max-md:hidden">
				<img src="/logo.svg" alt="Crowfund Logo" />
				<ul className="flex gap-8 text-white text-[0.875rem] ">
					<li>About</li>
					<li>Discover</li>
					<li>Get Started</li>
				</ul>
			</header>
			<div className="hidden max-md:block">
				<MobileNav />
			</div>
		</nav>
	);
}

const MobileNav = () => {
	const [mobileNav, setMobileNav] = useState(false);

	return (
		<>
			<div className="flex justify-between relative z-50">
				<img src="/logo.svg" alt="Crowfund Logo" />
				<div
					onClick={() => setMobileNav(!mobileNav)}
					className="hidden max-md:block cursor-pointer"
				>
					{!mobileNav ? <Harmburger /> : <Cancel />}
				</div>
			</div>
			{mobileNav && (
				<div
					className="fixed bg-black/25 z-20 inset-0 px-6 pt-[68px]"
					onClick={() => {
						setMobileNav(false);
					}}
				>
					<ul
						className="flex flex-col w-full top-[3.5rem] rounded-[0.5rem] bg-white text-[1rem] text-black font-medium"
						onClick={(e) => e.stopPropagation()}
					>
						<li className="border-b border-dark-gray/50">
							<span className="p-6 block">About</span>
						</li>
						<li className="border-b border-dark-gray/50">
							<span className="p-6 block">Discover</span>
						</li>
						<li>
							<span className="p-6 block">Get Started</span>
						</li>
					</ul>
				</div>
			)}
		</>
	);
};
