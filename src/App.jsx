import Darkcomp from "./Darkcomp";
import "./app.css";
import Navbar from "./Components/Navbar";
import HeroHome from "./Components/HeroHome";
import CardComp from "./Components/CardComp";
import Footer from "./Components/Footer";

function App() {
	return (
		<>
			<Navbar />
			<HeroHome />
			<CardComp />
			<Footer />
		</>
	);
}

export default App;
