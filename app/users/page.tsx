import React from "react";
import Link from "next/link";

type User = {
	id: number;
	name: string;
	email: string;
	phone: string;
	website: string;
	company: {
		name: string;
	};
};

async function UsersPage() {
	const response = await fetch("https://jsonplaceholder.typicode.com/users", {
		next: {
			revalidate: 60,
		},
	});

	const users = await response.json();
	const usersJSX = users.map((user: User) => {
		return (
			<tr key={user.id}>
				<td>{user.id}</td>
				<td>
					<Link href={`/users/${user.id}`} key={user.id}>
						{user.name}
					</Link>
				</td>

				<td>{user.email}</td>
				<td>{user.phone}</td>
				<td>{user.website}</td>
				<td>{user?.company?.name}</td>
			</tr>
		);
	});
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignContent: "center",
				flexDirection: "column",
				backgroundColor: "white",
			}}
		>
			<table style={{ width: "100%", textAlign: "center" }}>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Email</th>
						<th>Phone</th>
						<th>Website</th>
						<th>Company</th>
					</tr>
				</thead>
				<tbody>{usersJSX}</tbody>
			</table>
		</div>
	);
}

export default UsersPage;
