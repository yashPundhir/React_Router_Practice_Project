function HeroHome({ title, link, btnText }) {
	return (
		<div className="hero h-[250px] ">
			<div className="hero-content text-center">
				<div className="max-w-md">
					<h1 className="text-5xl font-bold">Hello There</h1>
					<p className="py-6 w-[470px]">
						This component belongs to Hero Section of the {title}
					</p>
					<a href={link}>
						<button className="btn btn-primary">{btnText}</button>
					</a>
				</div>
			</div>
		</div>
	);
}
export default HeroHome;
