import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import React from "react";

import { User } from "../User.jsx";

const mockUser = {
	name: {
		first: "John",
		last: "Doe",
	},
	email: "johndoe@example.com",
	phone: "123-456-7890",
};

const server = setupServer(
	rest.get("https://randomuser.me/api/", (req, res, ctx) => res(ctx.json({ results: [mockUser] })))
);

describe("User", () => {
	beforeAll(() => server.listen());
	afterEach(() => server.resetHandlers());
	afterAll(() => server.close());

	it("displays the user's name, email, and phone number", async () => {
		render(<User />);

		expect(screen.getByText("Loading...")).toBeInTheDocument();

		const name = await screen.findByText("John Doe");
		const email = screen.getByText("johndoe@example.com");
		const phone = screen.getByText("123-456-7890");

		expect(name).toBeInTheDocument();
		expect(email).toBeInTheDocument();
		expect(phone).toBeInTheDocument();
	});
});
