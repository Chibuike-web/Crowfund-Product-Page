import React from "react";
import Navbar from "./Navbar";
import styles from "./CrowdfundPage.module.css";
import ProductSection from "./ProductSection";
import Stats from "./Stats";

export default function CrowdfundPage() {
	return (
		<main className="flex flex-col items-center bg-[#FAFAFA]">
			<section className={styles.hero}>
				<Navbar />
			</section>
			<ProductSection />
			<Stats />
		</main>
	);
}
