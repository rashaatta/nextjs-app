const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

type PostProps = {
	postId: string;
};

export default async function Post({ postId }: PostProps) {
	await delay(2000); 

	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${postId}`,
		{
			next: {
				revalidate: 60,
			},
		},
	);

	if (!response.ok) {
		return <p style={{ color: "red" }}>Failed to load post.</p>;
	}

	const post = await response.json();

	const cardStyle: React.CSSProperties = {
		width: "100%",
		padding: "10px",
		borderRadius: "10px",
		color: "black",
		marginTop: "20px",
		background: "white",
	};

	return (
		<div style={cardStyle}>
			<p>{post.title}</p>
			<hr />
			<p>{post.body}</p>
		</div>
	);
}
