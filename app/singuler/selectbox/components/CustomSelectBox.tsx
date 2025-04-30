"use client";

import React, { useState } from "react";
import { BsChevronExpand } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";

const cities = ["Giza", "Cairo", "October", "Haram", "Dokki"];

const CustomSelectBox = () => {
	const [selectedCity, setSelectedCity] = useState("Giza");
	const [open, setOpen] = useState(false);

	return (
		<>
			{open && (
				<div
					onClick={() => setOpen(false)}
					className="fixed inset-0 bg-black opacity-30 z-20"
				/>
			)}

			<div className="relative flex flex-col items-center w-fit z-30">
				{/* Select Box */}
				<div
					onClick={() => setOpen((prev) => !prev)}
					className="flex justify-between items-center bg-white w-48 p-2 rounded-lg cursor-pointer shadow-md"
				>
					<span>{selectedCity}</span>
					<BsChevronExpand
						className={`text-gray-400 transform transition-transform duration-200 ${
							open ? "rotate-180" : "rotate-0"
						}`}
					/>
				</div>

				{/* Dropdown List */}
				<div
					className={`absolute top-11 left-0 w-48 bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
						open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
					}`}
				>
					{cities.map((item) => (
						<div
							key={item}
							onClick={() => {
								setSelectedCity(item);
								setOpen(false);
							}}
							className={`flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-orange-100 ${
								selectedCity === item ? "bg-orange-100" : ""
							}`}
						>
							<AiOutlineCheck
								className={`text-orange-300 transition-opacity ${
									selectedCity === item ? "opacity-100" : "opacity-0"
								}`}
							/>
							<span>{item}</span>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default CustomSelectBox;
