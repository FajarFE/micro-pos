import { Sidebar } from "@components/layout/dashboard/sidebar";

const data = [
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
];
export const DashboardPage = () => {
	return (
		<>
			<Sidebar data={data} />
		</>
	);
};
