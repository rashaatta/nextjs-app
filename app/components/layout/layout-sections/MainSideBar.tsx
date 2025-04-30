"use client";

import Link from "next/link";
import React, { useContext } from "react";
import {
	AiOutlineHome,
	AiOutlineUsergroupDelete,
	AiOutlineUnorderedList,
} from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { FaCheck, FaCheckDouble, FaAngleRight } from "react-icons/fa";
import { SiHelpscout, SiSinglestore } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";
import { MenuContext } from "../../../context/MenuContext";
import { AiOutlineClose } from "react-icons/ai";

const MainSideBar = () => {
	const context = useContext(MenuContext);

	if (!context) {
		throw new Error("SideBar must be used within a MenuContextProvider");
	}
	const { open, toggle } = context;

	const closeSideBArHandle = () => {
		toggle();
	};

	return (
		<aside
			className={`fixed  h-[calc(100vh)]  left-0 z-50 w-60 bg-white p-4 shadow-sm rounded-lg     transition-all duration-200 
    ${open ? "block" : "hidden"} 
    lg:block   overflow-y-auto`}
		>
			<ul>
				<li className="flex justify-end items-center lg:hidden ">
					<AiOutlineClose
						onClick={closeSideBArHandle}
						className="text-red-500 hover:text-red-800 cursor-pointer"
					/>
				</li>

				<li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
					<AiOutlineHome className="mr-2" />
					<Link href="/" onClick={closeSideBArHandle}>
						Home
					</Link>
				</li>

				<li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
					<AiOutlineUsergroupDelete className="mr-2" />
					<Link href="/users" onClick={closeSideBArHandle} className="flex-1">
						Users
					</Link>
					<FaAngleRight />
				</li>

				<li className="flex items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
					<AiOutlineUnorderedList className="mr-2" />
					<Link href="/posts" onClick={closeSideBArHandle} className="flex-1">
						Posts
					</Link>
					<FaAngleRight />
				</li>

				<li className="flex items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
					<GrProjects className="mr-2" />
					<h3 className="flex-1">Projects</h3>
					<FaAngleRight />
				</li>

				<li className="flex flex-col justify-start items-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
					<div className="w-full flex flex-row justify-start items-center">
						<FaCheck className="mr-2" />
						<h3 className="flex-1">Singular</h3>
						<FaAngleRight />
					</div>
					<ul className="ml-8 mt-4">
						<li className="flex justify-center items-center gap-3">
							<SiSinglestore />
							<Link href="/singuler/selectbox" onClick={closeSideBArHandle}>
								Select Box
							</Link>
						</li>
					</ul>
				</li>

				<li className="flex flex-col justify-start items-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
					<div className="w-full flex flex-row justify-start items-center">
						<FaCheckDouble className="mr-2" />
						<h3 className="flex-1">Complex</h3>
						<FaAngleRight />
					</div>
					<ul className="ml-8 mt-4">
						<li className="flex justify-center items-center gap-3">
							<SiSinglestore />
							<Link
								href="/complex/horizontal-scrollbar"
								onClick={closeSideBArHandle}
							>
								Ho-Scrollbar
							</Link>
						</li>
					</ul>
				</li>
				<li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
					<SiHelpscout className="mr-2" />
					<Link href="/about-us" onClick={closeSideBArHandle}>
						About us
					</Link>
				</li>

				<li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
					<FiPhoneCall className="mr-2" />
					<Link href="/contact-us" onClick={closeSideBArHandle}>
						Contact us
					</Link>
				</li>
			</ul>
		</aside>
	);
};

export default MainSideBar;
