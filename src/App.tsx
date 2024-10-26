import { useState } from "react";
import "./App.css";
import RandomPerson from "./components/RandomPerson";

const samplePerson = {
	name: {
		first: "Bob",
		last: "Maurice",
	},
	email: "bob.maurice@example.com",
	picture: {
		medium: "https://randomuser.me/api/portraits/med/men/30.jpg",
	},
};

function App() {
	const [person, setPerson] = useState(samplePerson);
	const getPerson = () => {
		fetch("https://randomuser.me/api?nat=en")
			.then((response) => response.json())
			.then((data) => {
				setPerson(data.results[0]);
			});
	};
	return (
		<div className="App">
			<RandomPerson person={person} />
			<button type="button" onClick={getPerson}>
				Get person
			</button>
		</div>
	);
}
export default App;
