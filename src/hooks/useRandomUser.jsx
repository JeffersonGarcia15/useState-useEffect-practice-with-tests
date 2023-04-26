import { useEffect, useState } from "react";

const RANDOM_USER_API = "https://randomuser.me/api/";

/**
 * The useRandomUser fetches a random user.
 *
 * @returns {object} an object containing information about a random person.
 */
export function useRandomUser() {
	const [user, setUser] = useState();

	useEffect(() => {
		async function fetchUser() {
			const response = await fetch(RANDOM_USER_API);
			if (response.ok) {
				const data = await response.json();
				setUser(data.results[0]);
			}
		}
		fetchUser();
	}, []);

	return { user };
}
