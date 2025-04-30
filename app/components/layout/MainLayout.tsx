"use client";

import type React from "react";
import { useContext } from "react";
import MainHeader from "./layout-sections/MainHeader";
import MainSideBar from "./layout-sections/MainSideBar";
import { MenuContext } from "../../context/MenuContext";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
	const context = useContext(MenuContext);

	if (!context) {
		throw new Error("MainLayout must be used within a MenuContextProvider");
	}

	const { open } = context;

	return (
		<div className="h-screen flex bg-green-100 overflow-hidden">
			<MainSideBar />
			<div
				className={`flex flex-col flex-1 ${open ? "max-lg:blur-xl" : "blur-0"}`}
			>
				<MainHeader />
				<main className="flex-1 overflow-y-auto  rounded-xl ml-3 mr-3 bg-white lg:ml-64">
					{children}
				</main>
			</div>
		</div>
	);
};

export default MainLayout;
