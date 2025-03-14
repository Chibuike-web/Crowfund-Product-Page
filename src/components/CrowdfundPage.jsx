import React from "react";
import Navbar from "./Navbar";
import styles from "./CrowdfundPage.module.css";
import ProductSection from "./ProductSection";
import Stats from "./Stats";
import About from "./About";

export default function CrowdfundPage() {
	return (
		<main className="flex flex-col items-center bg-[#FAFAFA]">
			<section className={styles.hero}>
				<Navbar />
			</section>
			<div className=" max-md:px-6">
				<ProductSection />
				<Stats />
				<About />
			</div>
		</main>
	);
}
