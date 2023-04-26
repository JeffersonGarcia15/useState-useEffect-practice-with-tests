import { useCatFact } from "../../hooks/useCatFact.jsx";
import { useCatImg } from "../../hooks/useCatImg.jsx";

// const CAT_FACT_API = "https://catfact.ninja/fact";
// const CAT_IMAGE_API = "https://cataas.com/cat/says";

/**
 * The Cat component.
 *
 * @returns {JSX.Element} the Cat component that renders a random cat fact and a cat image that depends on the first word of the cat fact.
 */
export function Cat() {
	const { catFact } = useCatFact();
	const { catImg } = useCatImg(catFact);
	/* 
	NO COSTUME HOOK!
	// const [catFact, setCatFact] = useState();
	// const [catImg, setCatImg] = useState();

	// useEffect(() => {
	// 	async function fetchCatFact() {
	// 		const response = await fetch(CAT_FACT_API);
	// 		if (response.ok) {
	// 			const data = await response.json();
	// 			setCatFact(data.fact);
	// 		}
	// 	}
	// 	fetchCatFact();
	// }, []);

	// useEffect(() => {
	// 	async function fetchCatImg() {
	// 		if (!catFact) {
	// 			return;
	// 		}
	// 		const { url } = await fetch(`${CAT_IMAGE_API}/${catFact.split(" ")[0]}`);
	// 		setCatImg(url);
	// 	}
	// 	fetchCatImg();
	// }, [catFact]);
	*/

	return (
		<>
			<h1>{catFact}</h1>
			{catImg && <img src={catImg} alt="Extracted using the first word for Some random cat fact" />}
		</>
	);
}
