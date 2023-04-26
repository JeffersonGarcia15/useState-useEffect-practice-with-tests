import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";

import { Cat } from "../../Cat/index.jsx";
import { User } from "../../User/index.jsx";
import { NotFound } from "../index.jsx";

describe("The NotFound component", () => {
	test("renders and h1 with the text Page Not Found.", () => {
		render(
			<MemoryRouter initialEntries={["/somewhere-unknown"]}>
				<Route exact path="/">
					<User />
				</Route>
				<Route path="/cat">
					<Cat />
				</Route>
				<Route>
					<NotFound />
				</Route>
			</MemoryRouter>
		);
		const heading = screen.getByRole("heading", { name: "Page Not Found." });
		expect(heading).toBeInTheDocument();
		expect(heading.textContent).toBe("Page Not Found.");
	});
});
