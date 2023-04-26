import { useRandomUser } from "../../hooks/useRandomUser.jsx";
// const RANDOM_USER_API = "https://randomuser.me/api/";

/**
 * The User component.
 *
 * @returns {JSX.Element} the full name, email and phone number of a randomly generated user.
 */
export function User() {
	const { user } = useRandomUser();
	/*
	NO COSTUME HOOK!
	// const [user, setUser] = useState();

	// useEffect(() => {
	// 	async function fetchUser() {
	// 		const response = await fetch(RANDOM_USER_API);
	// 		if (response.ok) {
	// 			const data = await response.json();
	// 			setUser(data.results[0]);
	// 		}
	// 	}
	// 	fetchUser();
	// }, []);
	
	*/

	if (!user) {
		return <h1>Loading...</h1>;
	}

	return (
		<>
			<h1>
				{user.name.first} {user.name.last}
			</h1>
			<h3>{user.email}</h3>
			<h3>{user.phone}</h3>
		</>
	);
}
