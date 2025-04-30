"use client";

import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { MenuContext } from "../../../context/MenuContext";
import UseAreaSelectBox from "./UserAreaSelectBox";
import LanguageSelectBox from "./LanguageSelectBox";

const MainHeader = () => {
	const context = useContext(MenuContext);

	if (!context) {
		throw new Error("MainHeader must be used within a MenuContextProvider");
	}

	const { toggle } = context;

	return (
		<div className="bg-white flex justify-between items-center px-4 h-12 mb-4">
			<div>Brand</div>
			<div className="flex items-center gap-4">
				<LanguageSelectBox />
				<FaBars
					className="cursor-pointer lg:top-4 lg:right-4 lg:hidden"
					onClick={toggle}
				/>
				<UseAreaSelectBox />
			</div>
		</div>
	);
};

export default MainHeader;
