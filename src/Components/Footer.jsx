import github from "../assets/github-svgrepo-com.svg";
import insta from "../assets/instagram-svgrepo-com.svg";
import twitter from "../assets/twitter-boxed-svgrepo-com.svg";
import linkedin from "../assets/linkedin-svgrepo-com.svg";

function Footer() {
	return (
		<footer className="text-gray-600 body-font mt-5">
			<div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
				<a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
					<svg
						width="36"
						height="36"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						fillRule="evenodd"
						clipRule="evenodd"
						className="fill-current mt-3 mr-2 text-gray-500 dark:text-gray-200"
					>
						<path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
					</svg>
				</a>
				<p className="text-sm text-gray-500  sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-2.5 mt-4">
					Copyright © 2023 - All right reserved
				</p>
				<span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
					<a
						className="text-gray-500 mt-1"
						href="https://github.com/yashPundhir"
					>
						<img
							className="w-7 h-7 bg-[#f0f0f0]"
							src={github}
							alt="GitHub-Logo"
						/>
					</a>
					<a
						className="ml-5 text-gray-500 "
						href="https://www.linkedin.com/in/yash-pundhir-785848250/"
					>
						<img
							className="w-9 h-9 bg-[#f0f0f0]"
							src={linkedin}
							alt="LinkedIn-Logo"
						/>
					</a>
					<a
						className="ml-3 text-gray-500 "
						href="https://www.instagram.com/yash.pundhir.prof/"
					>
						<img
							className="w-9 h-9 bg-[#f0f0f0]"
							src={insta}
							alt="Insta-Logo"
						/>
					</a>
					<a
						className="ml-4 text-gray-500 mt-[4.5px] "
						href="https://twitter.com/YashPundhirr"
					>
						<img
							className="w-7 h-7 bg-[#f0f0f0]"
							src={twitter}
							alt="Twitter-Logo"
						/>
					</a>
				</span>
			</div>
		</footer>
	);
}
export default Footer;
