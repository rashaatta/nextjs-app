import { Suspense } from "react";
import Post from "@/app/components/Post";

type PostParams = {
	postId: string;
};

type Props = {
	params: PostParams;
};

const loadingFallback = <div>Loading ...</div>;

export default async function PostDetails({ params }: Props) {
	const { postId } = params;

	return (
		<div>
			<h1>Post Details</h1>
			<Suspense fallback={loadingFallback}>
				<Post postId={postId} />
			</Suspense>
		</div>
	);
}
