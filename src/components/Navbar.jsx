import { useState } from "react";
import { Cancel, Harmburger } from "./Icons";

export default function Navbar() {
	return (
		<nav className="w-full py-12 max-md:px-6">
			<header className="mx-auto w-full max-w-[69.1875rem] flex justify-between relative">
				<img src="/logo.svg" alt="Crowfund Logo" />
				<ul className="flex gap-8 text-white text-[0.875rem] max-md:hidden">
					<li>About</li>
					<li>Discover</li>
					<li>Get Started</li>
				</ul>
				<MobileNav />
			</header>
		</nav>
	);
}

const MobileNav = () => {
	const [mobileNav, setMobileNav] = useState(false);

	return (
		<>
			<div onClick={() => setMobileNav(!mobileNav)} className="hidden max-md:block cursor-pointer">
				{!mobileNav ? <Harmburger /> : <Cancel />}
			</div>
			{mobileNav && (
				<ul className="flex flex-col w-full top-[4.25rem] rounded-2xl bg-red-500 text-[1rem] absolute text-dark-gray">
					<li className="border-b-1">
						<span className="p-8 block">About</span>
					</li>
					<li className="border-b-1">
						<span className="p-8 block">Discover</span>
					</li>
					<li>
						<span className="p-8 block">Get Started</span>
					</li>
				</ul>
			)}
		</>
	);
};
