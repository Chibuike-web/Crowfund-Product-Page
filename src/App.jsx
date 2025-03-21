import "./App.css";
import CrowdfundPage from "./components/CrowdfundPage";
import Provider from "./components/Context";

function App() {
	return (
		<Provider>
			<CrowdfundPage />
		</Provider>
	);
}

export default App;
