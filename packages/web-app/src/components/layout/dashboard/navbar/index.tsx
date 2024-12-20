import { Icon } from "@iconify/react";
import { Input, Popover, Whisper } from "rsuite";

export const Navbar = () => {
	return (
		<div className='w-full h-full flex flex-row justify-between items-center'>
			<div className='pl-10 text-2xl font-semibold'>All Products</div>
			<div className='py-4 w-[600px] relative'>
				<Input className='w-full h-10 border-none focus:outline:none bg-neutral-200 my-1 mx-2' />
			</div>
			<div className='pr-6     flex flex-row gap-5'>
				<button className='bg-transparent hover:bg-transparent flex justify-center items-center'>
					<Icon icon='si:moon-line' width='20' height='20' />
				</button>
				<button className='bg-transparent hover:bg-transparent flex justify-center items-center'>
					<svg
						width='20'
						height='20'
						viewBox='0 0 20 20'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M10 5.36658V8.14158'
							stroke='#444750'
							stroke-width='1.25'
							stroke-miterlimit='10'
							stroke-linecap='round'
						/>
						<path
							d='M10.0166 1.66663C6.94992 1.66663 4.46658 4.14996 4.46658 7.21663V8.96663C4.46658 9.53329 4.23325 10.3833 3.94158 10.8666L2.88325 12.6333C2.23325 13.725 2.68325 14.9416 3.88325 15.3416C7.86658 16.6666 12.1749 16.6666 16.1582 15.3416C17.2832 14.9666 17.7666 13.65 17.1582 12.6333L16.0999 10.8666C15.8082 10.3833 15.5749 9.52496 15.5749 8.96663V7.21663C15.5666 4.16663 13.0666 1.66663 10.0166 1.66663Z'
							stroke='#444750'
							stroke-width='1.25'
							stroke-miterlimit='10'
							stroke-linecap='round'
						/>
						<path
							d='M12.7751 15.6833C12.7751 17.2083 11.5251 18.4583 10.0001 18.4583C9.24176 18.4583 8.54176 18.1417 8.04176 17.6417C7.54176 17.1417 7.2251 16.4417 7.2251 15.6833'
							stroke='#444750'
							stroke-width='1.25'
							stroke-miterlimit='10'
						/>
						<rect
							x='11.6668'
							y='0.833333'
							width='7.5'
							height='7.5'
							rx='3.75'
							fill='#AB73F2'
						/>
						<rect
							x='11.6668'
							y='0.833333'
							width='7.5'
							height='7.5'
							rx='3.75'
							stroke='white'
							stroke-width='1.66667'
						/>
					</svg>
				</button>
				<div>
					<Whisper
						trigger='click'
						placement='bottomStart'
						controlId={`control-id-bottom`}
						speaker={
							<Popover>
								content="Hover me to see the popover content"
								<i className='rs-icon-user'></i>
							</Popover>
						}>
						<div className='flex flex-row gap-2 flex justify-center items-center'>
							<div className='w-14 h-14 bg-slate-200 rounded-full'>
								<i className='rs-icon-bell'></i>
							</div>
							<div className='flex flex-col'>
								<div className='text-lg font-semibold'>Staff Satu</div>
								<div>Staffsatu@gmail.com</div>
							</div>
							<div className='flex justify-center items-center'>
								<Icon
									icon='iconamoon:arrow-down-2'
									width='35'
									height='35'></Icon>
							</div>
						</div>
					</Whisper>
				</div>
			</div>
		</div>
	);
};
