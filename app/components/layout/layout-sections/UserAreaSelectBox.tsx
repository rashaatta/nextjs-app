"use client";

import React, { useState } from "react";
import Link from "next/link";

const actions = [
	{ id: 1, label: "User Dashboard", route: "/profile/dashboard" },
	{ id: 2, label: "Transactions", route: "/profile/transactions" },
	{ id: 3, label: "Orders", route: "/profile/orders" },
	{ id: 4, label: "Logout", route: "/profile/logout" },
];

const UseAreaSelectBox = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			{open && (
				<div
					onClick={() => setOpen(false)}
					className="fixed inset-0 bg-black opacity-30 z-20"
				/>
			)}

			<div className="relative flex flex-col items-center z-30">
				<div
					onClick={() => setOpen((prev) => !prev)}
					className="p-2 cursor-pointer"
				>
					<span className="border-2 border-blue-600 p-1 rounded-lg">
						User Area
					</span>
				</div>

				<div
					className={`absolute top-12 right-0 w-40 bg-sky-200 rounded-lg shadow-md transition-all duration-200 overflow-hidden ${
						open ? "opacity-100 max-h-96" : "opacity-0 max-h-0"
					}`}
				>
					{actions.map((item) => (
						<Link
							href={item.route}
							key={item.id}
							className="block px-4 py-2 hover:bg-sky-300 text-left"
							onClick={() => setOpen(false)}
						>
							{item.label}
						</Link>
					))}
				</div>
			</div>
		</>
	);
};

export default UseAreaSelectBox;
