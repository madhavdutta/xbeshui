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
    return <div className={"h-ful p-4"}>footer</div>;
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
      title: "NOTIFICATIONS",
      icon: <IconBell stroke={1.8} size={21} />,
      isOpenable: true,
      openedAsideComponent: <AsideNotificationsView />,
    },
    {
      id: "bookmarks",
      title: "BOOKMARKS",
      icon: <IconBookmark stroke={1.8} size={21} />,
      isOpenable: true,
      openedAsideComponent: <AsideBookmarksView />,
    },
    {
      id: "mentions",
      title: "MENTIONS",
      icon: <IconAt stroke={1.8} size={21} />,
      isOpenable: true,
      openedAsideComponent: <AsideMentionsView />,
    }
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
        fixedHeader={true}
        shrinkedAside
      >
        <Container size={"xl"} fluid className="">
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
          <Title order="h1" className="bg-green-300 dark:bg-red-400">
            Accordion
          </Title>
         
          <Stack gap={"lg"} className="py-10 w-96">
            <TextInput placeholder="Type here to search" label="Search" description="Search for anything" />
            <TagsInput clearable label={"Enter Tags"} description={"Enter Description"} />

            <Avatar size="md" alt="Madhav Dutta" />

            <Button variant="default" size="md" leftSection={<IconStack />} loading>
              Primary Button
            </Button>
          </Stack>

        
        </Container>
      </AppShell>
    </>
  );
};

export default App;
