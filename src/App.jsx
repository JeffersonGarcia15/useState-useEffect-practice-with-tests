import "./App.css";

import React from "react";
import { Route, Switch } from "react-router-dom";

import { Cat } from "./components/Cat/index.jsx";
import { NotFound } from "./components/NotFound/index.jsx";
import { User } from "./components/User/index.jsx";

function App() {
	return (
		<Switch>
			<Route exact path="/">
				<User />
			</Route>
			<Route path="/cat">
				<Cat />
			</Route>
			<Route>
				<NotFound />
			</Route>
		</Switch>
	);
}

export default App;
