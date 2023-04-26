import { useEffect, useState } from "react";

const CAT_IMAGE_API = "https://cataas.com/cat/says";

/**
 * The useCatImg fetches a cat img that will have whatever text you pass after the /says
 *
 * @param {string} catFact the fact that we got from the random cat fact API.
 * @returns {string} the catImg that will be used in the img tag.
 */
export function useCatImg(catFact) {
	const [catImg, setCatImg] = useState();
	useEffect(() => {
		async function fetchCatImg() {
			if (!catFact) {
				return;
			}
			const { url } = await fetch(`${CAT_IMAGE_API}/${catFact.split(" ")[0]}`);
			setCatImg(url);
		}
		fetchCatImg();
	}, [catFact]);

	return { catImg };
}
