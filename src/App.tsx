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
  Title,
  Text,
  Accordion,
  Code,
  Tabs,
  Card,
  Label,
  Toggle,
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
  const [currentPage, setCurrentPage] = React.useState(1);
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
    return <div className={"h-ful p-4"}>footer</div>;
  };

  const Aside = () => {
    return <AsideUI />;
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
        <Container size={"xl"} fluid className="p-4">
          <div className="h-16 w-full bg-secondary p-4  flex flex-row justify-end items-end">
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
          </div>
          <Title order="h1" className="bg-green-300 dark:bg-red-400">
            Accordion
          </Title>
          {/* <Code language="typescript">
						{`
							import React from "react";
							import { Text } from "@tabler/react";
								<Text className="text-lg font-bold">
									This is a generated text component!
								</Text>
						`}
					</Code> */}
			<Tabs defaultValue="account" className="w-[400px] bg-white p-8">
          <Tabs.TabsList variant={"outline"} className="grid w-full grid-cols-2">
            <Tabs.TabsTrigger variant={"outline"} value="account">
              Account
            </Tabs.TabsTrigger>
            <Tabs.TabsTrigger variant={"outline"} value="password">
              Password
            </Tabs.TabsTrigger>
          </Tabs.TabsList>
          <Tabs.TabsContent value="account">
            <Card className="p-4">
              <Card.Header>
                <Card.Title>Account</Card.Title>
                <Card.Description>
                  Make changes to your account here. Click save when you're
                  done.
                </Card.Description>
              </Card.Header>
              <Card.Content className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <TextInput id="name" defaultValue="Pedro Duarte" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <TextInput id="username" defaultValue="@peduarte" />
                </div>
              </Card.Content>
              <Card.Footer>
                <Button>Save changes</Button>
              </Card.Footer>
            </Card>
          </Tabs.TabsContent>
          <Tabs.TabsContent value="password">
            <Card className="p-4">
              <Card.Header>
                <Card.Title>Password</Card.Title>
                <Card.Description>
                  Change your password here. After saving, you'll be logged out.
                </Card.Description>
              </Card.Header>
              <Card.Content className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Current password</Label>
                  <TextInput id="current" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">New password</Label>
                  <TextInput id="new" type="password" />
                </div>
              </Card.Content>
              <Card.Footer>
                <Button>Save password</Button>
              </Card.Footer>
            </Card>
          </Tabs.TabsContent>
        </Tabs>
          
        </Container>
      </AppShell>
    </>
  );
};

export default App;
