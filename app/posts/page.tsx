import Link from "next/link";

import React from "react";

type PostParams = {
	id: string;
	title: string;
	body: string;
};

export const metadata = {
	title: "Posts page",
};

export default async function Posts() {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
		next: {
			revalidate: 120,
		},
	});

	const posts = await response.json();

	const postsJSX = posts.map((post: PostParams) => {
		return (
			<Link href={`/posts/${post.id}`} key={post.id}>
				<div
					style={{
						width: "70%",
						padding: "10px",
						borderRadius: "10px",
						color: "black",
						marginTop: "20px",
						background: "white",
					}}
					key={post.id}
				>
					<h1>{post.title}</h1>
					<small>{post.body}</small>
				</div>
			</Link>
		);
	});

	return (
		<div>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignContent: "center",
					flexDirection: "column",
				}}
			>
				{postsJSX}
			</div>
		</div>
	);
}
