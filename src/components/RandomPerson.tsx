type RandomPersonProps = {
	person: {
		name: {
			first: string;
			last: string;
		};
		email: string;
		picture: {
			medium: string;
		};
	};
};

function RandomPerson({ person }: RandomPersonProps) {
	return (
		<figure className="DisplayPerson">
			<img src={person.picture.medium} alt={person.name.first} />
			<figcaption>
				<strong>
					{person.name.first} {person.name.last}
				</strong>
				{person.email}
			</figcaption>
		</figure>
	);
}

export default RandomPerson;
