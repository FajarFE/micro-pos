import { Icon } from "@iconify/react";
import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";
import React from "react";

const data = [
	{
		icon: <Icon icon='basil:layout-outline' width='30' height='30' />,
		name: "main",
		data: [
			{
				link: "/dashboard",
				name: "Dashboard",
			},
			{
				link: "/dashboard",
				name: "Dashboard",
			},
			{
				link: "/dashboard",
				name: "Dashboard",
			},
			{
				link: "/dashboard",
				name: "Dashboard",
			},
			{
				link: "/dashboard",
				name: "Dashboard",
			},
		],
	},
	{
		icon: <Icon icon='basil:layout-outline' width='30' height='30' />,
		name: "main",
		data: [
			{
				link: "/dashboard",
				name: "Dashboard",
			},
			{
				link: "/dashboard",
				name: "Dashboard",
			},
			{
				link: "/dashboard",
				name: "Dashboard",
			},
			{
				link: "/dashboard",
				name: "Dashboard",
			},
			{
				link: "/dashboard",
				name: "Dashboard",
			},
		],
	},
];
export const DashboardLayout = () => {
	const [isOpen, setIsOpen] = React.useState<boolean>(false);

	const handleOpen = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div className='w-screen h-screen flex flex-row justify-start items-start'>
			<div className={`${isOpen ? "w-[20%]" : "w-[7%]"}`}>
				<Sidebar onToggle={handleOpen} data={data} />
			</div>
			<div
				className={`flex  h-full flex-col justify-start items-start ${isOpen ? "w-[80%]" : "w-[93%]"}`}>
				<div
					style={{
						borderBottom: "2px solid #D9DBE9",
					}}
					className='w-full flex border-b-2 border-black '>
					<Navbar />
				</div>
				<div className='flex w-full h-full bg-purple-100'>awodkao</div>
			</div>
		</div>
	);
};