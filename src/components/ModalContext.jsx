import { useState } from "react";
import { createContext } from "react";
export const ModalContext = createContext();

export default function ModalProvider({ children }) {
	const [modal, setModal] = useState(false);
	const [successModal, setSuccessModal] = useState(false);
	return (
		<ModalContext.Provider value={{ modal, setModal, successModal, setSuccessModal }}>
			{children}
		</ModalContext.Provider>
	);
}
