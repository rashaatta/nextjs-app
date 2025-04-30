"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BsGlobeAmericas } from "react-icons/bs";

const languages = [
	{ id: 1, flag: "fi fi-us", route: "/en" },
	{ id: 2, flag: "fi fi-fr", route: "/ar" },
];

const LanguageSelectBox = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			{/* Overlay */}
			{open && (
				<div
					onClick={() => setOpen(false)}
					className="fixed inset-0 bg-black opacity-30 z-20"
				/>
			)}

			{/* Language Selector */}
			<div className="relative flex flex-col items-center z-30">
				{/* Globe Button */}
				<div
					onClick={() => setOpen((prev) => !prev)}
					className="p-2 cursor-pointer"
				>
					<span className="text-2xl">
						<BsGlobeAmericas />
					</span>
				</div>

				{/* Dropdown */}
				<div
					className={`absolute top-14 right-0 w-20 bg-orange-200 rounded-lg shadow-md transition-all duration-200 overflow-hidden ${
						open ? "opacity-100 max-h-40" : "opacity-0 max-h-0"
					}`}
				>
					{languages.map((item) => (
						<Link
							href={item.route}
							key={item.id}
							onClick={() => setOpen(false)}
							className="flex justify-center items-center px-4 py-2 cursor-pointer hover:bg-orange-300"
						>
							<span className={`${item.flag} text-xl`}> </span>
						</Link>
					))}
				</div>
			</div>
		</>
	);
};

export default LanguageSelectBox;
