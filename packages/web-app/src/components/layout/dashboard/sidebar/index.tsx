import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router";

interface dataSidebarProps {
	link: string;
	name: string;
}

interface Menu {
	data: dataSidebarProps[];
	icon: React.ReactNode;
	name: string;
}

interface sidebarProps {
	title?: string;
	data: Menu[];
	isOpen?: boolean;
	onToggle?: () => void;
	className?: string;
}

export const Sidebar = ({
	data,
	className,
	onToggle,
	isOpen,
}: sidebarProps) => {
	const [indexMenu, setIndexMenu] = React.useState<string>("");

	const handleClick = (index: string) => {
		if (index === indexMenu) {
			setIndexMenu("");
		} else {
			setIndexMenu(index);
		}
	};

	return (
		<div
			className={`flex flex-col w-full bg-black justify-between items-center gap-10 h-screen bg-white ${className}`}>
			<div className='flex justify-start gap-2 items-center flex-col relative '>
				<button
					onClick={onToggle}
					className='absolute py-1 rounded-lg left-0 bg-purple-300 flex justify-center items-center'>
					<Icon
						style={{
							transform: "rotate(180deg)",
						}}
						icon='iconamoon:arrow-left-2-light'
						width='30'
						height='30'
					/>
				</button>
				<div className='py-3  flex justify-center items-center'>
					<img
						className='w-14 h-14'
						src='/images/Quixotic.png'
						alt='Logo-MicroPos'
					/>
				</div>
				<div className='text-lg uppercase'>MAIN</div>
				<div className='flex flex-col gap-2 justify-center items-center'>
					{data &&
						data.map((menu, index: number) => {
							return (
								<div
									key={index}
									className={`flex flex-col justify-center items-center ${index.toString() === indexMenu ? "" : ""}`}>
									<div className='flex flex-col gap-2 justify-center items-center'>
										<button
											onClick={() => {
												handleClick(index.toString());
											}}
											className={` flex justify-center items-center rounded-xl   ${index.toString() === indexMenu ? "hover:bg-purple-300 hover:text-white bg-purple-500 p-4 text-white " : " text-neutral-500 bg-transparent  hover:text-white hover:bg-purple-500 p-4"}`}>
											{menu.icon}
										</button>
									</div>
									{index.toString() === indexMenu && (
										<div className='w-full h-auto flex flex-col justify-start items-center relative'>
											<div className='bg-[#D9DBE9] h-[calc(100%-30px)] absolute  w-[3px]'></div>
											<div className='relative flex left-[125px] pt-4 flex-col gap-5  h-full'>
												<div className='h-auto p-1 flex flex-col gap-1 rounded-lg bg-white w-full'>
													{menu.data.map((data, index) => {
														return (
															<div
																key={index}
																className='relative w-full flex justify-center items-center'>
																<div
																	className='rounded-bl-xl '
																	style={{
																		position: "absolute",
																		top: "-2px",
																		left: "-45px",
																		width: "15px",
																		height: "15px",
																		borderLeft: "3px solid #D9DBE9", // Border di sisi kiri
																		borderBottom: "3px solid #D9DBE9", //
																	}}></div>

																<Link
																	className='bg-white rounded-md justify-start
															text-neutral-300 
															text-lg font-semibold 
															py-[2px] items-start text-start w-full
															no-underline hover:no-underline focus:no-underline
															pl-3 pr-14
															'
																	to={data.link}>
																	{data.name}
																</Link>
															</div>
														);
													})}
												</div>
											</div>
										</div>
									)}
								</div>
							);
						})}
				</div>
			</div>
			<div className='py-2 '>
				<button className='p-2 hover:bg-purple-300 hover:text-white flex justify-center items-center rounded-xl bg-purple-500 text-white'>
					<Icon icon='si:add-line' width='30' height='30' />
				</button>
			</div>
		</div>
	);
};
