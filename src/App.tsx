import React, { useEffect, useState } from "react";
import {
  Stack,
  TextInput,
  Group,
  XbeshThemeSwitch,
  AppShell,
  Breadcrumb,
  DropdownMenu,
  Avatar,
  NavbarUI,
  AsideUI,
  Card,
  Tabs,
  Accordion,
  Alert,
  Button,
  Toast,
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

import CommandMenuDialog from "../packages/core/ui/utilities/cmdk/cmdk";
import { DocsConfig, docsConfig } from "../packages/core/ui/utilities/cmdk/docs";
import NotionEditor from "../packages/core/ui/utilities/editor/editor";

const App = () => {
  const [goal, setGoal] = React.useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  interface Command {
    title: string;
    icon: string;
    shortcut: string;
    onSelect: () => void;
    group?: string;
    subgroup?: string;
    tags?: string[];
  }

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

  const Aside = () => {
    return (
      <div className={"w-full pt-4 pr-4 pl-0"}>
        <Stack>
          <AsideUI />
        </Stack>
      </div>
    );
  };


  const createCommandsFromDocsConfig = (docsConfig: DocsConfig): Command[] => {
    const commands: Command[] = [];

    // Add commands from mainNav
    docsConfig.mainNav.forEach((item) => {
      const command: Command = {
        title: item.title,
        icon: item.icon || "",
        shortcut: "",
        onSelect: () => {
          window.location.href = item.href;
        },
        group: "Main Navigation",
        tags: item.tags,
      };
      commands.push(command);
    });

    // Add commands from sidebarNav
    docsConfig.sidebarNav.forEach((section) => {
      section.items.forEach((item) => {
        const command: Command = {
          title: item.title,
          icon: item.icon || "",
          shortcut: "",
          onSelect: () => {
            window.location.href = item.href;
          },
          group: section.title,
          subgroup: "",
          tags: item.tags,
        };
        commands.push(command);
      });
    });

    return commands;
  };

  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSearchTerm("");
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const allCommands = createCommandsFromDocsConfig(docsConfig);

  const initialSections = ["Introduction", "Components"];

  const filteredCommands = searchTerm
    ? allCommands.filter((command) => {
      const searchTermLowerCase = searchTerm.toLowerCase();
      const titleMatch = command.title.toLowerCase().includes(searchTermLowerCase);
      const tagsMatch = command.tags?.some((tag) =>
        tag.toLowerCase().includes(searchTermLowerCase)
      );
      return titleMatch || tagsMatch;
    })
    : allCommands;


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
        <div className="px-10 py-6 z-10">
          <Alert
            variant="success"
            title="Success"
            message="This is a success alert."
            id={"2"}
          >
            <Alert.Title>Success</Alert.Title>
            <Alert.Description>This is a success alert.</Alert.Description>
          </Alert>
        </div>
        <Group className={" w-full px-10 flex lg:flex-row flex-col"} gap={"md"}>
          <Stack className={"w-full md:w-full xl:w-2/3 h-screen"}>
            <Group justify="spaceBetween" gap="md">
              {/* <Card>
                <Card.Header>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Description>Card Description</Card.Description>
                </Card.Header>
                <Card.Content>
                  <Tabs defaultValue="account" className="w-[400px]">
                    <Tabs.TabsList className="grid w-full grid-cols-2">
                      <Tabs.TabsTrigger value="account">
                        Account
                      </Tabs.TabsTrigger>
                      <Tabs.TabsTrigger value="password">
                        Password
                      </Tabs.TabsTrigger>
                    </Tabs.TabsList>
                    <Tabs.TabsContent value="account">
                      <Accordion type={"single"}>
                        <Accordion.Item value="1">
                          <Accordion.Trigger>Accordion 1</Accordion.Trigger>
                          <Accordion.Content>
                            Content for Accordion 1
                          </Accordion.Content>
                        </Accordion.Item>

                        <Accordion.Item value="2">
                          <Accordion.Trigger>Accordion 2</Accordion.Trigger>
                          <Accordion.Content>
                            Content for Accordion 2
                          </Accordion.Content>
                        </Accordion.Item>

                        <Accordion.Item value="3">
                          <Accordion.Trigger>Accordion 3</Accordion.Trigger>
                          <Accordion.Content>
                            Content for Accordion 3
                          </Accordion.Content>
                        </Accordion.Item>
                      </Accordion>
                    </Tabs.TabsContent>
                    <Tabs.TabsContent value="password">
                      werwrwerew
                    </Tabs.TabsContent>
                  </Tabs>
                </Card.Content>
              </Card> */}

              {/* <Card>
                <Card.Header>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Description>Card Description</Card.Description>
                </Card.Header>
                <Card.Content>


                </Card.Content>
              </Card> */}
              {/* <Toast>
                <Toast.Title>Toast Title</Toast.Title>
                <Toast.Description>Toast Description</Toast.Description>
                <Toast.Action altText="action">Action</Toast.Action>
                <Toast.Close />
              </Toast> */}

              <Button onClick={handleOpen}>Open Command Menu</Button>
              <CommandMenuDialog
                open={isOpen}
                onClose={handleClose}
                commands={filteredCommands}
                onSearch={handleSearch}
                docsConfig={docsConfig} // Pass the docsConfig prop
                initialSections={initialSections} // Pass the initialSections prop
              /> 

              {/* <Popover>
                <Popover.Trigger>
                  Open Popover
                </Popover.Trigger>
                <Popover.Content>
                  <div>Popover Content</div>
                </Popover.Content>
              </Popover> */}

              {/* <Menubar>
                <Menubar.Menu>
                  <Menubar.Trigger>File</Menubar.Trigger>
                  <Menubar.Portal>
                    <Menubar.Content>
                      <Menubar.Item>New File</Menubar.Item>
                      <Menubar.Item>Open File</Menubar.Item>
                      <Menubar.Separator />
                      <Menubar.Sub>
                        <Menubar.SubTrigger>Open Recent</Menubar.SubTrigger>
                        <Menubar.SubContent>
                          <Menubar.Item>File 1</Menubar.Item>
                          <Menubar.Item>File 2</Menubar.Item>
                        </Menubar.SubContent>
                      </Menubar.Sub>
                    </Menubar.Content>
                  </Menubar.Portal>
                </Menubar.Menu>
                
              </Menubar> */}

              {/* <ContextMenu>
                <ContextMenu.Trigger>Open Context Menu</ContextMenu.Trigger>
                <ContextMenu.Content menuConfig={menuConfig}>
                  asdsddasd
                </ContextMenu.Content>
              </ContextMenu> */}

              {/* <NotionEditor width="w-[800px]" minHeight="min-h[500px]" minWidth="min-w-800px" height="h-[500px]" /> */}
            </Group>
          </Stack>
          <Stack className={"w-full md:w-full xl:w-1/3 h-screen"}>
            {/* <AsideUI /> */}
          </Stack>
        </Group>
      </AppShell>
    </>
  );
};

export default App;