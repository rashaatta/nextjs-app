type UserParams = {
	id: string;
};

type User = {
	id: string;
	name: string;
	email: string;
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
};

async function UserDetails({ params }: { params: UserParams }) {
	const { id } = params;
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/users/${id}`,
		{
			next: {
				revalidate: 60,
			},
		},
	);

	const user: User = await response.json();

	return (
		<div>
			<p>
				<strong>Name:</strong> {user.name}
			</p>
			<p>
				<strong>Email:</strong> {user.email}
			</p>
			<p>
				<strong>Phone:</strong> {user.phone}
			</p>
			<p>
				<strong>Website:</strong> {user.website}
			</p>
			<p>
				<strong>Company:</strong> {user.company.name}
			</p>
		</div>
	);
}

export default UserDetails;
