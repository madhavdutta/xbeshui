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
  TagsInput,
  Tooltip,
} from "../packages/core/components";
import {
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
        <Container size={"xl"} fluid className="">
          {/* <div className="h-16 w-full bg-secondary p-4  flex flex-row justify-end items-end">
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
              </Group>
            </Group>
          </div> */}
          {/* <Title order="h1" className="bg-green-300 dark:bg-red-400">
            Accordion
          </Title> */}
          {/* <Code language="typescript">
						{`
							import React from "react";
							import { Text } from "@tabler/react";
								<Text className="text-lg font-bold">
									This is a generated text component!
								</Text>
						`}
					</Code> */}

<Group className="h-16 w-full bg-white border-b p-4 flex">
            <Stack gap="xs">
              <Group gap="xs">
                <Text size="base" fontWeight="semibold">
                  Madhav Dutta
                </Text>
                <IconChevronDown className="text-primary/90" width={16} />
                <Tooltip>
                  <Tooltip.Trigger asChild>
                    <Button size={"xs"} variant={"ghost"}>
                      <IconStar className="text-primary/40" width={16} />
                    </Button>
                  </Tooltip.Trigger>
                  <Tooltip.Content>
                    <p>Add to Favorites</p>
                  </Tooltip.Content>
                </Tooltip>
              </Group>
              <Group gap="xs">
                <IconCircleCheckFilled className="text-green-600" width={16} />
                <Text className="text-primary/60" size="xs">
                  online
                </Text>
                <Tooltip>
                  <Tooltip.Trigger asChild>
                    <Button size={"xs"} variant={"ghost"}>
                      <IconPin className="text-primary/40" width={16} />
                    </Button>
                  </Tooltip.Trigger>
                  <Tooltip.Content>
                    <p>Pinned messages</p>
                  </Tooltip.Content>
                </Tooltip>

                <Tooltip>
                  <Tooltip.Trigger asChild>
                    <Button size={"xs"} variant={"ghost"}>
                      <IconFileDescription
                        className="text-primary/40"
                        width={16}
                      />
                    </Button>
                  </Tooltip.Trigger>
                  <Tooltip.Content>
                    <p>Channel files</p>
                  </Tooltip.Content>
                </Tooltip>
                <Text className="text-primary/60" size="xs">
                  Add a channel header
                </Text>
                <IconPencil className="text-primary/40" width={14} />
              </Group>
            </Stack>
            <Group gap="xs" justify="right">
              <Button
                size={"sm"}
                variant={"ghost"}
                leftSection={<IconPencil width={16} />}
                className="text-blue-500"
              >
                Start call
              </Button>
              <Tooltip>
                <Tooltip.Trigger asChild>
                  <Button size={"sm"} variant={"ghost"}>
                    <IconExclamationCircle
                      className="text-primary/40"
                      width={16}
                    />
                  </Button>
                </Tooltip.Trigger>
                <Tooltip.Content>
                  <p>View Info</p>
                </Tooltip.Content>
              </Tooltip>
            </Group>
          </Group>
          <Stack gap={"lg"} className="py-10 w-96">
          <TextInput placeholder="Type here to search" label="Search" description="Search for anything" />
          <TagsInput clearable label={"Enter Tags"} description={"Enter Description"}  />
          </Stack>


		  
        </Container>
      </AppShell>
    </>
  );
};

export default App;
