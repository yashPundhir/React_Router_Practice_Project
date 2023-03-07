import Card from "./Card";
import hitesh from "../assets/hitesh.jfif";
import anurag from "../assets/anurag.jfif";
import anirudh from "../assets/anirudh.png";

function CardComp() {
	return (
		<div className="flex justify-center items-center gap-20">
			<Card
				src={hitesh}
				name="Hitesh Choudhary Sir"
				link="https://www.youtube.com/@HiteshChoudharydotcom"
			/>
			<Card
				src={anurag}
				name="Anurag Tiwari Sir"
				link="https://www.youtube.com/@anuragtiwarime"
			/>
			<Card
				src={anirudh}
				name="Anirudh Jwala Sir"
				link="https://github.com/jwala-anirudh"
			/>
		</div>
	);
}
export default CardComp;
