import Darkcomp from "./Darkcomp";
import "./App.css";
import Navbar from "./Components/Navbar";
import HeroHome from "./Components/HeroHome";
import CardComp from "./Components/CardComp";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<>
			<Navbar />
			{/* <HeroHome /> */}
			<Outlet />
			<CardComp />
			<Footer />
		</>
	);
}

export default App;
