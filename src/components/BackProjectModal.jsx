import { Cancel } from "./Icons";
import PledgeCards from "./PledgeCards";
import { useContext } from "react";
import { Context } from "./Context";
import { motion } from "motion/react";

export default function BackProjectModal() {
	const { setModal, setActiveCard } = useContext(Context);
	const handleCancelButton = () => {
		setModal(false);
		setActiveCard(0);
	};
	return (
		<div
			className="hide-scrollbar fixed inset-0 bg-black/25 z-50 justify-items-center py-20 content-center px-6 overflow-y-auto"
			onClick={handleCancelButton}
		>
			<motion.article
				initial={{ opactiy: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.35, ease: "easeOut" }}
				className="relative bg-white w-full max-w-[730px] px-12 py-12 rounded-[8px] max-md:px-8 max-md:py-8"
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<button
					type="button"
					className="absolute right-[40px] top-[32px] cursor-pointer"
					onClick={handleCancelButton}
				>
					<Cancel fill="#7A7A7A" />
				</button>
				<h1 className="text-[24px] font-bold">Back this project</h1>
				<p className="text-dark-gray font-medium mt-4 mb-8">
					Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
				</p>
				<PledgeCards />
			</motion.article>
		</div>
	);
}
