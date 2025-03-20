export default function SuccessModal() {
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 px-6">
			<section
				role="dialog"
				aria-labelledby="modal-title"
				aria-modal="true"
				className="bg-white w-full max-w-[45.625rem] p-12 rounded-lg max-md:p-8"
				onClick={(e) => e.stopPropagation()}
			>
				<h1 id="modal-title" className="text-2xl font-bold">
					Back this project
				</h1>
				<p className="text-dark-gray font-medium mt-4 mb-8">
					Want to support us in bringing Mastercraft Bamboo Monitor Riser out into the world?
				</p>
			</section>
		</div>
	);
}
