import React, { useState } from "react";
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
  Toast,
  Select,
  Command,
  List,
  Button,
  Drawer,
  Container,
  ContextMenu,
  ContextMenuItemConfig,
  Dialog,
} from "../packages/core/components";
import {
  IconBox,
  IconDeviceAnalytics,
  IconHome,
  IconMinus,
  IconPlus,
  IconSearch,
  IconSettings,
  IconShoppingCart,
  IconStack,
  IconUsers,
} from "@tabler/icons-react";

import {CommandMenu} from "../packages/core/ui/utilities/cmdk";

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
}

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
    },
  ];

  const data = [
    {
      goal: 400,
    },
    {
      goal: 300,
    },
    {
      goal: 200,
    },
    {
      goal: 300,
    },
    {
      goal: 200,
    },
    {
      goal: 278,
    },
    {
      goal: 189,
    },
    {
      goal: 239,
    },
    {
      goal: 300,
    },
    {
      goal: 200,
    },
    {
      goal: 278,
    },
    {
      goal: 189,
    },
    {
      goal: 349,
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
  const [showCommandMenu, setShowCommandMenu] = useState(false);

  const commands: Command[] = [
    {
      title: 'Open File',
      icon: '📁',
      shortcut: 'Ctrl+O',
      onSelect: () => console.log('Open File'),
      group: 'File',
      subgroup: 'General',
    },
    {
      title: 'Search Projects',
      icon: '🔍',
      shortcut: 'Ctrl+K',
      onSelect: () =>  console.log('Open File'),
      group: 'Projects',
      subgroup: 'Search',
    },
    {
      title: 'Create New Team',
      icon: '👥',
      shortcut: 'Ctrl+N',
      onSelect: () =>  console.log('Open File'),
      group: 'Teams',
      subgroup: 'Management',
    },
    // Add more commands as needed
  ];
  const toggleCommandMenu = () => {
    setShowCommandMenu(!showCommandMenu);
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
              <Card>
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
                <Card.Footer>{/* Card footer */}</Card.Footer>
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
                        <Select.Item value="option1">
                          Option 1 Option 1 Option 1 Option 1{" "}
                        </Select.Item>
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
                          Suggestion 1<Command.Shortcut>⌘ K</Command.Shortcut>
                        </Command.Item>
                        <Command.Item>
                          Suggestion 2<Command.Shortcut>⌘ L</Command.Shortcut>
                        </Command.Item>
                      </Command.Group>
                      <Command.Separator />
                      <Command.Group heading="Commands">
                        <Command.Item>
                          Command 1<Command.Shortcut>⌘ T</Command.Shortcut>
                        </Command.Item>
                        <Command.Item>
                          Command 2<Command.Shortcut>⌘ O</Command.Shortcut>
                        </Command.Item>
                      </Command.Group>
                    </Command.List>
                  </Command.Dialog>
                  {/* <MultiSelect frameworks={frameworks} /> */}
                </Card.Content>
                <Card.Footer>{/* Card footer */}</Card.Footer>
              </Card>
              <Toast>
                <Toast.Title>Toast Title</Toast.Title>
                <Toast.Description>Toast Description</Toast.Description>
                <Toast.Action altText="action">Action</Toast.Action>
                <Toast.Close />
              </Toast>
              {/* <Dialog>
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
              </Dialog> */}
              {/* <List type={"decimal"}>
                <List.Item>List Item 1</List.Item>
                <List.Item>List Item 2</List.Item>
                <List.Item>List Item 3</List.Item>
              </List> */}
               <div >
      {/* Your app content */}
      {showCommandMenu && (
        <CommandMenu commands={commands} onClose={toggleCommandMenu} />
      )}
      <button onClick={toggleCommandMenu}>Open Command Menu</button>
    </div>
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

              <Drawer>
                <Drawer.Trigger asChild>
                  <Button variant="outline">Open Drawer</Button>
                </Drawer.Trigger>
                <Drawer.Content>
                  <div className="mx-auto w-full max-w-sm">
                    <Drawer.Header>
                      <Drawer.Title>Move Goal</Drawer.Title>
                      <Drawer.Description>
                        Set your daily activity goal.
                      </Drawer.Description>
                    </Drawer.Header>
                    <div className="p-4 pb-0">
                      <div className="flex items-center justify-center space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 shrink-0 rounded-full"
                          onClick={() => onClick(-10)}
                          disabled={goal <= 200}
                        >
                          <IconMinus className="h-4 w-4" />
                          <span className="sr-only">Decrease</span>
                        </Button>
                        <div className="flex-1 text-center">
                          <div className="text-7xl font-bold tracking-tighter">
                            {goal}
                          </div>
                          <div className="text-[0.70rem] uppercase text-muted-foreground">
                            Calories/day
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 shrink-0 rounded-full"
                          onClick={() => onClick(10)}
                          disabled={goal >= 400}
                        >
                          <IconPlus className="h-4 w-4" />
                          <span className="sr-only">Increase</span>
                        </Button>
                      </div>
                      <div className="mt-3 h-[120px]">
                        <Container fluid></Container>
                      </div>
                    </div>
                    <Drawer.Footer>
                      <Button>Submit</Button>
                      <Drawer.Close asChild>
                        <Button variant="outline">Cancel</Button>
                      </Drawer.Close>
                    </Drawer.Footer>
                  </div>
                </Drawer.Content>
              </Drawer>

              {/* <ContextMenu>
                <ContextMenu.Trigger>Open Context Menu</ContextMenu.Trigger>
                <ContextMenu.Content menuConfig={menuConfig}>
                  asdsddasd
                </ContextMenu.Content>
              </ContextMenu> */}
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