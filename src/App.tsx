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
  Badge,
  Tabs,
  Card,
  Label,
  Grid,
  Pagination,
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

          <div className="bg-white w-full p-4 space-y-5">
            <Title order="h3">Heading</Title>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />

            {/* <Grid gutter={5} grow>
              <Grid.Col span={3}>
                <div className="bg-muted text-black p-5">1</div>
              </Grid.Col>
              <Grid.Col span={3}>
                <div className="bg-muted text-black p-5">1</div>
              </Grid.Col>
              <Grid.Col span={3}>
                <div className="bg-muted text-black p-5">1</div>
              </Grid.Col>
			  <Grid.Col span={3}>
                <div className="bg-muted text-black p-5">1</div>
              </Grid.Col>
			  <Grid.Col span={3}>
                <div className="bg-muted text-black p-5">1</div>
              </Grid.Col>
			  <Grid.Col span={3}>
                <div className="bg-muted text-black p-5">1</div>
              </Grid.Col>
            </Grid> */}
          </div>
        </Container>
      </AppShell>
    </>
  );
};

export default App;
