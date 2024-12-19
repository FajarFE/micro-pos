import { Link } from "react-router";

interface dataSidebarProps {
	link: string;
	name: string;
}

interface sidebarProps {
	title?: string;
	data: dataSidebarProps[];
	children?: React.ReactNode;
}

export const Sidebar = ({ data }: sidebarProps) => {
	return (
		<div className='flex flex-row w-screen h-screen'>
			<div className='flex flex-col w-10 justify-start items-center px-2 h-screen bg-white'>
				<div>Ada</div>
				<div className='w-[10%] h-auto flex flex-col justify-start items-center relative'>
					<div className='bg-[#D9DBE9] h-[calc(100%-30px)] absolute  w-[3px]'></div>
					<div className='relative flex left-[125px] pt-4 flex-col gap-5  h-full'>
						<div className='h-auto p-1 flex flex-col gap-1 rounded-lg bg-slate-200 w-full'>
							{data &&
								data.map((data, index) => {
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
			</div>
		</div>
	);
};
