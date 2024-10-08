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
	Stack,
	AsideUI,
	Title,
	TagsInput,
	Button,
	Dialog,
	Link,
	Text,
	Drawer,
	MediaQuery,
} from "../packages/core/components";
import {
	IconAt,
	IconBell,
	IconBookmark,
	IconBox,
	IconChevronDown,
	IconDeviceAnalytics,
	IconHome,
	IconSearch,
	IconSettings,
	IconShoppingCart,
	IconStack,
	IconUsers,
	IconStar,
	IconCircleCheckFilled,
	IconPin,
	IconFileDescription,
	IconPencil,
	IconExclamationCircle,
} from "@tabler/icons-react";
import type { IAsideProps } from "../packages/core/components/Layout/appShell/appShell.config";
// import { NetworkStatusIndicator } from "../packages";

// import userAvatar from "../public/images/avatar.svg";

const App = () => {
	const [currentPage, setCurrentPage] = React.useState(1);
	const [open, setOpen] = React.useState(false);
	const totalPages = 10; // Total number of pages in your pagination

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
		// Perform any other actions you need to do when the page changes
	};

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
			<Group justify="spaceBetween" className="h-16 hidden sm:flex">
				<div>Header</div>
				<div>Header1</div>
			</Group>
		);
	};

	const FooterUI = () => {
		return <div className={"bg-red-300 w-full h-full"}>footer</div>;
	};

	const AsideNotificationsView = () => {
		return <AsideUI />;
	};

	const AsideBookmarksView = () => {
		return <>Bookmarks View</>;
	};

	const AsideMentionsView = () => {
		return <>Mentions View</>;
	};

	const AsideData: IAsideProps[] = [
		{
			id: "notifications",
			title: "Notifications",
			icon: <IconBell stroke={1.8} size={21} />,
			isOpenable: true,
			openedAsideComponent: <AsideNotificationsView />,
		},
		{
			id: "bookmarks",
			title: "Bookmarks",
			icon: <IconBookmark stroke={1.8} size={21} />,
			isOpenable: true,
			openedAsideComponent: <AsideBookmarksView />,
		},
		{
			id: "mentions",
			title: "Mentions",
			icon: <IconAt stroke={1.8} size={21} />,
			isOpenable: true,
			openedAsideComponent: <AsideMentionsView />,
		},
	];

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
				Aside={AsideData}
				layout="alt"
				variant="default"
				withBorder={true}
				className="bg-muted/40"
				shrinkedAside
			>
				<Container size={"xl"} fluid className="mb-32">

					{/* <NetworkStatusIndicator connectionOKJsx={<Text className="w-full text-center bg-green-500 text-white">Connection is Ok !</Text>} noConnectionJsx={<Text className="bg-red-500 text-white w-full text-center">No Internet Connection</Text>} /> */}

					<div className="h-16 w-full bg-secondary p-0  flex flex-row justify-end items-end">
						<Group
							className={"w-full h-full px-10 py-4 "}
							justify="spaceBetween"
						>
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
								<XbeshThemeSwitch size="md" />
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
								<Dialog open={open} onOpenChange={setOpen}>
									<Dialog.Trigger asChild>
										<IconSettings />
									</Dialog.Trigger>

									<Dialog.Content size="md">
										<Dialog.Header>
											<Dialog.Title>Create team</Dialog.Title>
											<Dialog.Description>
												Add a new team to manage products and customers.
											</Dialog.Description>
										</Dialog.Header>

										<Dialog.Footer>
											<Button variant="outline" onClick={() => console.log("")}>
												Cancel
											</Button>
											<Button type="submit">Continue</Button>
										</Dialog.Footer>
									</Dialog.Content>
								</Dialog>
							</Group>
						</Group>
					</div>
					<Avatar size="md" radius="sm" indicatorColor="bg-green-300" indicatorPosition="bottom-right" alt="madhav dutta" src="https://assets.circle.so/2y9v2ap5g826axie38knxfb76x9n"> </Avatar>

				</Container>
			</AppShell>
		</>
	);
};

export default App;
