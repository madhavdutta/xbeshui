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
	Alert,
	Stack,
	Pagination,
	ColorInput,
	Accordion,
	Badge,
	Button,
	Tabs,
	Card,
	Label,
	ContextMenu,
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

// import XBEditor from "../packages/core/ui/xbEditor/xbEditor";

const App = () => {
	// const [goal, setGoal] = React.useState(350);

	// function onClick(adjustment: number) {
	//   setGoal(Math.max(200, Math.min(400, goal + adjustment)));
	// }

	// interface Command {
	//   title: string;
	//   icon: string;
	//   shortcut: string;
	//   onSelect: () => void;
	//   group?: string;
	//   subgroup?: string;
	//   tags?: string[];
	// }

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
			<Group className={"w-full h-full px-10 py-4"} justify="spaceBetween">
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
		return <div className={"h-full w-full p-4"}>footer</div>;
	};

	// const Aside = () => {
	//   return (
	//     <div className={"w-full pt-4 pr-4 pl-0"}>
	//       <Stack>
	//         <AsideUI />
	//       </Stack>
	//     </div>
	//   );
	// };

	// const createCommandsFromDocsConfig = (docsConfig: DocsConfig): Command[] => {
	//   const commands: Command[] = [];

	//   // Add commands from mainNav
	//   docsConfig.mainNav.forEach((item) => {
	//     const command: Command = {
	//       title: item.title,
	//       icon: item.icon || "",
	//       shortcut: "",
	//       onSelect: () => {
	//         window.location.href = item.href;
	//       },
	//       group: "Main Navigation",
	//       tags: item.tags,
	//     };
	//     commands.push(command);
	//   });

	//   // Add commands from sidebarNav
	//   docsConfig.sidebarNav.forEach((section) => {
	//     section.items.forEach((item) => {
	//       const command: Command = {
	//         title: item.title,
	//         icon: item.icon || "",
	//         shortcut: "",
	//         onSelect: () => {
	//           window.location.href = item.href;
	//         },
	//         group: section.title,
	//         subgroup: "",
	//         tags: item.tags,
	//       };
	//       commands.push(command);
	//     });
	//   });

	//   return commands;
	// };

	// const [isOpen, setIsOpen] = useState(false);
	// const [searchTerm, setSearchTerm] = useState("");

	// const handleOpen = () => {
	//   setIsOpen(true);
	// };

	// const handleClose = () => {
	//   setIsOpen(false);
	//   setSearchTerm("");
	// };

	// const handleSearch = (term: string) => {
	//   setSearchTerm(term);
	// };

	// const allCommands = createCommandsFromDocsConfig(docsConfig);

	// const initialSections = ["Introduction", "Components"];

	// const filteredCommands = searchTerm
	//   ? allCommands.filter((command) => {
	//     const searchTermLowerCase = searchTerm.toLowerCase();
	//     const titleMatch = command.title.toLowerCase().includes(searchTermLowerCase);
	//     const tagsMatch = command.tags?.some((tag) =>
	//       tag.toLowerCase().includes(searchTermLowerCase)
	//     );
	//     return titleMatch || tagsMatch;
	//   })
	//   : allCommands;

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
				// Aside={<AsideUI />}
				layout="default"
				variant="default"
				withBorder={false}
				className="bg-muted/40"
				fixedHeader={false}
			>
				<Container size={"xl"} className="dark:bg-red-300">
					
					
					
				</Container>
			</AppShell>
		</>
	);
};

export default App;