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
				element: <HeroHome />,
			},
			{
				path: "/about",
				element: <HeroAbout />,
			},
			{
				path: "/contact",
				element: <HeroContact />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={appRouter} />
	</React.StrictMode>
);
