import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import HeroHome from "./Components/HeroHome";
import HeroAbout from "./Components/HeroAbout";
import HeroContact from "./Components/HeroContact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// const appRouter = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <App />,
// 	},
// 	{
// 		path: "/about",
// 		element: <HeroAbout />,
// 	},
// 	{
// 		path: "/contact",
// 		element: <HeroContact />,
// 	},
// ]);

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: (
					<HeroHome
						title="Homepage"
						link="https://www.svgrepo.com/"
						btnText="A nice resource for icons & graphics"
					/>
				),
			},
			{
				path: "/about",
				element: (
					<HeroHome
						title="About Us"
						link="https://www.youtube.com/watch?v=MusIvEKjqsc"
						btnText="Free Alternatives of Heroku"
					/>
				),
			},
			{
				path: "/contact",
				element: (
					<HeroHome
						title="Contact Us"
						link="https://pixlr.com/e/"
						btnText="Awesome & Free Photo Editing Resource"
					/>
				),
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={appRouter} />
	</React.StrictMode>
);
