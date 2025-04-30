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
				<td className="border border-slate-300">{user.id}</td>
				<td className="border border-slate-300">
					<Link href={`/users/${user.id}`} key={user.id}>
						{user.name}
					</Link>
				</td>

				<td className="border border-slate-300">{user.email}</td>
				<td className="border border-slate-300">{user.phone}</td>
				<td className="border border-slate-300">{user.website}</td>
				<td className="border border-slate-300">{user?.company?.name}</td>
			</tr>
		);
	});
	return (
		<div className="bg-white rounded-lg max-4 p-4">
			<table className="border-separate border-spacing-2 border border-slate-400">
				<thead>
					<tr>
						<th className="border border-slate-300">ID</th>
						<th className="border border-slate-300">Name</th>
						<th className="border border-slate-300">Email</th>
						<th className="border border-slate-300">Phone</th>
						<th className="border border-slate-300">Website</th>
						<th className="border border-slate-300">Company</th>
					</tr>
				</thead>
				<tbody>{usersJSX}</tbody>
			</table>
		</div>
	);
}

export default UsersPage;
