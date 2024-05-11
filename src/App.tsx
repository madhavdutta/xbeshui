// biome-ignore lint/style/useImportType: <explanation>
import React from "react";
import {
	TextInput,
	Group,
	XbeshThemeSwitch,
	AppShell,
	Breadcrumb,
	DropdownMenu,
	Avatar,
	NavbarUI,
	Container,
	Button,
	Sheet,
	Stack,
	AsideUI,
} from "../packages/core/components";
import {
	IconBox,
	IconDeviceAnalytics,
	IconHome,
	IconSearch,
	IconSettings,
	IconShoppingCart,
	IconStack,
	IconUsers,
} from "@tabler/icons-react";
import Navmenu from "../packages/core/components/Navigation/navMenu/navMenu";
import { motion } from "framer-motion";

const App = () => {
	interface NavItemProps {
		link: string;
		title: string;
		icon: React.ReactNode;
	}

	const navItems: NavItemProps[] = [
		{
			link: "/dashboard",
			title: "Dashboard",
			icon: <IconHome stroke={1.8} size={21} />,
		},
		{
			link: "/orders",
			title: "Orders",
			icon: <IconShoppingCart stroke={1.8} size={21} />,
		},
		{
			link: "/products",
			title: "Products",
			icon: <IconBox stroke={1.8} size={21} />,
		},
		{
			link: "/customers",
			title: "Customers",
			icon: <IconUsers stroke={1.8} size={21} />,
		},
		{
			link: "/analytics",
			title: "Analytics",
			icon: <IconDeviceAnalytics stroke={1.8} size={21} />,
		},
	];

	const HeaderUI = () => {
		return (
			<Group className={"w-full h-full px-10 py-4 "} justify="spaceBetween">
				<Breadcrumb>
					<Breadcrumb.List>
						<Breadcrumb.Item>
							<Breadcrumb.Link href="/">Home</Breadcrumb.Link>
						</Breadcrumb.Item>
						<Breadcrumb.Separator />
						<Breadcrumb.Item>
							<Breadcrumb.Link href="/category">Category</Breadcrumb.Link>
						</Breadcrumb.Item>
						<Breadcrumb.Separator />
						<Breadcrumb.Item>
							<Breadcrumb.Page>Current Page</Breadcrumb.Page>
						</Breadcrumb.Item>
					</Breadcrumb.List>
				</Breadcrumb>

				<Group className="w-96">
					<XbeshThemeSwitch />
					<TextInput
						leftSection={<IconSearch size={16} stroke={0.5} />}
						placeholder="Type here to search"
						width="full"
					/>

					<DropdownMenu>
						<DropdownMenu.Trigger>
							<Avatar size="sm" radius="default" alt="madhav dutta" />
						</DropdownMenu.Trigger>
						<DropdownMenu.Content>
							<DropdownMenu.Label>My Account</DropdownMenu.Label>
							<DropdownMenu.Separator />
							<DropdownMenu.Item>Profile</DropdownMenu.Item>
							<DropdownMenu.Item>Billing</DropdownMenu.Item>
							<DropdownMenu.Item>Team</DropdownMenu.Item>
							<DropdownMenu.Item>Subscription</DropdownMenu.Item>
						</DropdownMenu.Content>
					</DropdownMenu>
				</Group>
			</Group>
		);
	};

	const FooterUI = () => {
		return <div className={"h-ful p-4"}>footer</div>;
	};

	const Aside = () => {
		return (

			<AsideUI />
		);
	};

	return (
		<>
			<AppShell
				Navbar={
					<NavbarUI
						navItem={navItems}
						headerItem={<IconStack stroke={1.5} size={28} />}
						footerItem={<IconSettings stroke={1.5} size={22} />}
					/>
				}
				Header={<HeaderUI />}
				Footer={<FooterUI />}
				Aside={<Aside />}
				layout="alt"
				variant="default"
				withBorder={true}
				className="bg-muted/40"
				fixedHeader={true}
				shrinkedAside
			>
				<Container size={"xl"} fluid className="">
					<div className="h-16 w-full bg-secondary p-4  flex flex-row justify-end items-end">
						Hello world!
					</div>
				</Container>
				
			</AppShell>
		</>
	);
};

export default App;