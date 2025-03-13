export default function Navbar() {
	return (
		<nav className="mx-auto w-full max-w-[1107px] bg-dark-gray py-12 flex justify-between">
			<img src="/logo.svg" alt="Crowfund Logo" />
			<ul className="flex gap-8 text-white text-[0.875rem]">
				<li>About</li>
				<li>Discover</li>
				<li>Get Started</li>
			</ul>
		</nav>
	);
}
