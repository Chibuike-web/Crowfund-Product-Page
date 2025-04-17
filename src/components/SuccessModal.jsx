import { useContext } from "react";
import { Context } from "./Context";
import { CheckIcon } from "./Icons";
import { Button } from "./Button";
import { motion } from "motion/react";

export default function SuccessModal() {
	const { setSuccessModal, reward } = useContext(Context);

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 px-6"
			onClick={() => setSuccessModal(false)}
		>
			<motion.section
				initial={{ opactiy: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.35, ease: "easeOut" }}
				role="dialog"
				aria-labelledby="modal-title"
				aria-modal="true"
				className="bg-white w-full max-w-[33.81rem] flex flex-col items-center p-10 rounded-lg max-md:p-8"
				onClick={(e) => e.stopPropagation()}
			>
				<CheckIcon />
				<h1 id="modal-title" className="text-[1.5rem] font-bold text-center mt-6">
					Thanks for your support
				</h1>
				<p className="text-dark-gray font-medium mt-4 mb-8 text-center">
					Your pledge brings us one step closer to sharing {reward} worldwide. You will get an email
					once our campaign is completed.
				</p>
				<Button
					text="Got it"
					className="h-12 bg-moderate-cyan w-[6.75rem] rounded-full text-white cursor-pointer hover:bg-dark-cyan transition-colors duration-300"
					handleButtonClick={() => setSuccessModal(false)}
				/>
			</motion.section>
		</div>
	);
}
