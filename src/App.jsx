import Darkcomp from "./Darkcomp";
import "./App.css";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import HeroHome from "./Components/HeroHome";
import CardComp from "./Components/CardComp";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import light from "./assets/light-mode-svgrepo-com.svg";
import dark from "./assets/dark-mode-night-moon-svgrepo-com.svg";

function App() {
	const [myStyle, setMyStyle] = useState({
		backgroundColor: "#f0f0f0",
		color: "#101010",
	});

	const [themeIcon, setThemeIcon] = useState(light);

	const [iconStyle, setIconStyle] = useState("w-7");
	function toggleStyle() {
		if (myStyle.backgroundColor == "#f0f0f0") {
			setMyStyle({
				backgroundColor: "#151515",
				color: "#f0f0f0",
			});
			setThemeIcon(dark);
			setIconStyle("w-5");
		} else {
			setMyStyle({
				backgroundColor: "#f0f0f0",
				color: "#101010",
			});
			setThemeIcon(light);
			setIconStyle("w-7");
		}
	}
	return (
		<div style={myStyle}>
			<Navbar
				themeChanger={toggleStyle}
				icon={themeIcon}
				iconstyle={iconStyle}
			/>
			{/* <HeroHome /> */}
			<Outlet />
			<CardComp />
			<Footer />
		</div>
	);
}

export default App;
