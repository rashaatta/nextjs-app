"use client";

import type React from "react";

const HorizontalScrollBar = ({
	children,
	scrollbar = true,
}: { children: React.ReactNode; scrollbar?: boolean }) => {
	return (
		<div
			className={`flex overflow-x-auto items-center space-x-2 p-4 border-gray-300 border-2 my-4 ${
				scrollbar
					? "scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-slate-200"
					: "scrollbar-none"
			}`}
		>
			{children}
		</div>
	);
};

export default HorizontalScrollBar;
