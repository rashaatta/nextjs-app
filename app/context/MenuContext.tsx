"use client";

import { createContext, useState, type ReactNode } from "react";

export const MenuContext = createContext<{
	open: boolean;
	toggle: () => void;
} | null>(null);

const MenuContextProvider = ({ children }: { children: ReactNode }) => {
	const [open, setOpen] = useState(false);

	const toggle = () => {
		setOpen((prev) => !prev);
	};

	return (
		<MenuContext.Provider value={{ open, toggle }}>
			{children}
		</MenuContext.Provider>
	);
};

export default MenuContextProvider;
