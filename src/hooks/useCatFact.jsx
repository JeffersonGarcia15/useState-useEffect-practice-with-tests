import { useEffect, useState } from "react";

const CAT_FACT_API = "https://catfact.ninja/fact";

/**
 * The useCatFact fetches a random fact about cats.
 *
 * @returns {object} the random fact that we got from the API.
 */
export function useCatFact() {
	const [catFact, setCatFact] = useState();

	useEffect(() => {
		async function fetchCatFact() {
			const response = await fetch(CAT_FACT_API);
			if (response.ok) {
				const data = await response.json();
				setCatFact(data.fact);
			}
		}
		fetchCatFact();
	}, []);

	return { catFact };
}
