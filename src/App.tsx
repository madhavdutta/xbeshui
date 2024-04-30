import React, { useState } from "react";

import {
  Stack,
  Input,
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
  Toast,
  Dialog,
  Select,
  MultiSelect,
  Command,
  Tooltip
} from "../packages/core/components";
import { IconBox, IconDeviceAnalytics, IconHome, IconSearch, IconSettings, IconShoppingCart, IconStack, IconUsers } from "@tabler/icons-react";

const App = () => {

  interface NavItemProps {
    link: string;
    title: string;
    icon: React.ReactNode;
  }
  const frameworks = [
    { value: "next.js", label: "Next.js" },
    { value: "sveltekit", label: "SvelteKit" },
    // ...
  ];
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
    }
  ];

  const HeaderUI = () => {
    return <Group className={"w-full h-full px-10 py-4"} justify="spaceBetween">

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
        <Input leftSection={<IconSearch size={16} stroke={.5} />} placeholder="Type here to search" width="full" />

        <DropdownMenu>
          <DropdownMenu.Trigger>
            <Avatar size="sm" radius="full" alt="madhav dutta" />

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
  }
  const FooterUI = () => {
    return <div className={"h-full w-full p-4"}>footer</div>
  }
  const Aside = () => {
    return <div className={"w-full pt-4 pr-4 pl-0"}>
      <Stack>


        <AsideUI />
      </Stack>
    </div>
  }

  return (
    <>
      <AppShell
        Navbar={<NavbarUI navItem={navItems} headerItem={<IconStack stroke={1.5} size={28} />} footerItem={<IconSettings stroke={1.5} size={22} />} />}
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
          <Alert variant="success" title="Success" message="This is a success alert." id={"2"}>
          <Alert.Title>Success</Alert.Title>
          <Alert.Description>This is a success alert.</Alert.Description>
        </Alert>
        </div>
        <Group className={" w-full px-10 flex lg:flex-row flex-col"} gap={"md"}>

          <Stack className={"w-full md:w-full xl:w-2/3 h-screen"}>
            <Group justify="spaceBetween" gap="md">

              <Card>
                <Card.Header>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Description>Card Description</Card.Description>
                </Card.Header>
                <Card.Content>
                  <Tabs defaultValue="account" className="w-[400px]">
                    <Tabs.TabsList className="grid w-full grid-cols-2">
                      <Tabs.TabsTrigger value="account">Account</Tabs.TabsTrigger>
                      <Tabs.TabsTrigger value="password">Password</Tabs.TabsTrigger>
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
                <Card.Footer>
                  {/* Card footer */}
                </Card.Footer>
              </Card>

              <Card>
                <Card.Header>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Description>Card Description</Card.Description>
                </Card.Header>
                <Card.Content>
                  <Select>
                    <Select.Trigger>
                      <Select.Value placeholder="Select an option" />
                    </Select.Trigger>
                    <Select.Content>
                      <Select.Group>
                        <Select.Label>Group Label</Select.Label>
                        <Select.Item value="option1">Option 1</Select.Item>
                        <Select.Item value="option2">Option 2</Select.Item>
                        <Select.Separator />
                        <Select.Item value="option3">Option 3</Select.Item>
                      </Select.Group>
                    </Select.Content>
                  </Select>

                  <Command.Dialog>
                    <Command.Input placeholder="Search..." />
                    <Command.List>
                      <Command.Empty>No results found.</Command.Empty>
                      <Command.Group heading="Suggestions">
                        <Command.Item>
                          Suggestion 1
                          <Command.Shortcut>⌘ K</Command.Shortcut>
                        </Command.Item>
                        <Command.Item>
                          Suggestion 2
                          <Command.Shortcut>⌘ L</Command.Shortcut>
                        </Command.Item>
                      </Command.Group>
                      <Command.Separator />
                      <Command.Group heading="Commands">
                        <Command.Item>
                          Command 1
                          <Command.Shortcut>⌘ T</Command.Shortcut>
                        </Command.Item>
                        <Command.Item>
                          Command 2
                          <Command.Shortcut>⌘ O</Command.Shortcut>
                        </Command.Item>
                      </Command.Group>
                    </Command.List>
                  </Command.Dialog>
                  {/* <MultiSelect frameworks={frameworks} /> */}

                </Card.Content>
                <Card.Footer>
                  {/* Card footer */}
                </Card.Footer>
              </Card>
              <Toast>
                <Toast.Title>Toast Title</Toast.Title>
                <Toast.Description>Toast Description</Toast.Description>
                <Toast.Action altText="action">Action</Toast.Action>
                <Toast.Close />
              </Toast>
              <Dialog>
                <Dialog.Trigger>Open Dialog</Dialog.Trigger>
                <Dialog.Content>
                  <Dialog.Header>
                    <Dialog.Title>Dialog Title</Dialog.Title>
                    <Dialog.Description>Dialog Description</Dialog.Description>
                  </Dialog.Header>
                  <Dialog.Footer>
                    <Dialog.Close>Close</Dialog.Close>
                  </Dialog.Footer>
                </Dialog.Content>
              </Dialog>
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
