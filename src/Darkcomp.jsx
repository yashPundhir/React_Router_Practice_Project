import "./darkmode.css";
import { useState } from "react";

function Darkcomp() {
	const [isDarkMode, setDarkMode] = useState(false);
	function toggleDarkMode() {
		setDarkMode((prevValue) => !prevValue);
	}
	return (
		// <div className={isDarkMode ? "dark-mode" : ""}>
		// <div className="dark-mode font-semibold"> //line 11 and line 12 are same
		// <div className={"dark-mode font-semibold"}>
		<div className={`font-medium mt-5 ${isDarkMode ? "dark-mode" : ""}`}>
			<div id="darkcomp">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
				qui, molestiae maxime porro ut numquam officia illo doloremque
				repudiandae pariatur quas aperiam eum voluptate quisquam placeat rem,
				tempora repellat fuga natus nobis neque iure? Vitae, illum. Praesentium
				sequi, animi tempora enim officiis aliquam deserunt eos.
			</div>
			<button id="dark" onClick={toggleDarkMode}>
				Activate Dark Mode
			</button>
		</div>
	);
}
export default Darkcomp;
