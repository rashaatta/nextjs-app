import type React from "react";
import { useState } from "react";

type TabItem = {
	title: string;
	content: React.ReactNode;
};

const TabsComponent = ({ items }: { items: TabItem[] }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<div className="bg-sky-100 flex justify-center items-center py-12">
			<div className="max-w-md flex flex-col gap-y-2 w-full">
				<div className="flex bg-blue-400 p-1 rounded">
					{items.map((item, index) => (
						<button
							key={item.title}
							onClick={() => setActiveIndex(index)}
							className={`px-4 py-2 text-white rounded transition ${
								index === activeIndex
									? "bg-blue-600"
									: "bg-blue-400 hover:bg-blue-500"
							}`}
						>
							{item.title}
						</button>
					))}
				</div>

				<div
					className=" border border-blue-300
                min-h-30  bg-white p-4 rounded-xl shadow"
				>
					{items[activeIndex].content}
				</div>
			</div>
		</div>
	);
};

export default TabsComponent;
