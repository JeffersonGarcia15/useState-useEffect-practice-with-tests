import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import React from "react";

import { Cat } from "../index.jsx";

const CAT_IMAGE_API = "https://cataas.com/cat/says";

const server = setupServer(
	rest.get("https://catfact.ninja/fact", (req, res, ctx) => {
		return res(ctx.json({ fact: "Some random cat fact" }));
	}),
	rest.get("https://cataas.com/cat/says/:param", (req, res, ctx) => {
		const param = req.params.param;

		return res(ctx.json({ url: `https://cataas.com/cat/says/${param}` }));
	})
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Cat Component", () => {
	test("renders cat fact and image", async () => {
		render(<Cat />);
		const factElement = await screen.findByText(/Some random cat fact/);
		const imageElement = await screen.findByAltText(
			/Extracted using the first word for Some random cat fact/
		);
		expect(factElement).toBeInTheDocument();
		expect(imageElement).toBeInTheDocument();
		const firstWordOfFact = factElement.textContent.split(" ")[0];
		const expectedSrc = `${CAT_IMAGE_API}/${firstWordOfFact}`;
		expect(imageElement).toHaveAttribute("src", expect.stringContaining(expectedSrc));
	});
});
