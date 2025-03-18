import "./App.css";
import CrowdfundPage from "./components/CrowdfundPage";
import ModalProvider from "./components/ModalContext";

function App() {
	return (
		<ModalProvider>
			<CrowdfundPage />
		</ModalProvider>
	);
}

export default App;
