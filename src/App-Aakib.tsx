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
  Calendar,
  Carousel,
  ScrollArea,
  Separator,
  Title,
  Image,
  ScrollBar,
  Collapsible,
  ActionIcon,
  IfElse,
  Pagination,
  Menubar,
  Sheet,
  Tooltip,
  Popover,
  Label,
  HoverCard,
  ComboBox,
  Dialog,
  Text,
} from "../packages/core/components";
import {
  IconBox,
  IconBrandGithub,
  IconCalendar,
  IconCheck,
  IconCirclePlus,
  IconCloud,
  IconCreditCard,
  IconDeviceAnalytics,
  IconHome,
  IconKeyboard,
  IconLifebuoy,
  IconLogout,
  IconMail,
  IconMessage2,
  IconMinus,
  IconPlus,
  IconSearch,
  IconSelect,
  IconSelector,
  IconSettings,
  IconShoppingCart,
  IconStack,
  IconUser,
  IconUserPlus,
  IconUsers,
} from "@tabler/icons-react";

interface seletPropsType {
  value: string;
  label: string;
  image: string;
}

const AppAakib = () => {
  const [opened, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [selectedValue, setSelectedValue] = useState<seletPropsType>({
    value: "Origami",
    label: "Origami",
    image: "https://avatar.vercel.sh/$acme-inc.png",
  });
  const [showNewTeamDialog, setShowNewTeamDialog] = useState(false);
  const triggerRef = React.useRef<HTMLDivElement | null>(null);
  const frameworks = [
    {
      value: "Origami",
      label: "Origami",
      image: "https://avatar.vercel.sh/$acme-inc.png",
    },
    {
      value: "Achme Inc.",
      label: "Achme Inc.",
      image: "https://avatar.vercel.sh/$acme-inc.png",
    },
    {
      value: "Monster Inc.",
      label: "Monster Inc.",
      image: "https://avatar.vercel.sh/$acme-inc.png",
    },
  ];

  const closeAndFocusTrigger = () => {
    setOpen(false);
    setTimeout(() => {
      triggerRef.current?.focus();
    });
  };

  const handleChange = (framework: seletPropsType) => {
    setValue(framework.value);
    setSelectedValue({
      ...selectedValue,
      value: framework.value,
      label: framework.label,
      image: framework.image,
    });
    closeAndFocusTrigger();
  };
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = 10; // Total number of pages in your pagination

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Perform any other actions you need to do when the page changes
  };
  const [goal, setGoal] = React.useState(350);
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  type CarouselItemType = {
    type?: "image" | "text" | "video";
    content?: string;
  };
  const carouselData: CarouselItemType[] = [
    {
      type: "image",
      content: "https://source.unsplash.com/random/450x600/?city,skylinebsvss",
    },
    {
      type: "image",
      content: "https://source.unsplash.com/random/450x600/?city,skylinebsvsss",
    },
    {
      type: "image",
      content: "https://source.unsplash.com/random/450x600/?city,skylinebsv33",
    },
    {
      type: "image",
      content: "https://source.unsplash.com/random/450x600/?city,skylinebsv4",
    },
    {
      type: "image",
      content: "https://source.unsplash.com/random/450x600/?city,skylinebsv5",
    },
    {
      type: "image",
      content: "https://source.unsplash.com/random/450x600/?city,skylinebsv6",
    },
    {
      type: "image",
      content: "https://source.unsplash.com/random/450x600/?city,skylinebsv7",
    },
    {
      type: "image",
      content: "https://source.unsplash.com/random/450x600/?city,skylinebsv8",
    },
    {
      type: "image",
      content: "https://source.unsplash.com/random/450x600/?city,skylinebsv9",
    },
    {
      type: "image",
      content: "https://source.unsplash.com/random/450x600/?city,skylinebsv0",
    },
  ];

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  interface NavItemProps {
    link: string;
    title: string;
    icon: React.ReactNode;
  }
  interface Artwork {
    artist: string;
    art: string;
  }

  const works: Artwork[] = [
    {
      artist: "Ornella Binni",
      art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
    },
    {
      artist: "Tom Byrom",
      art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
    },
    {
      artist: "Vladimir Malyavko",
      art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
    },
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

  const menuConfig: ContextMenuItemConfig[] = [
    {
      type: "item",
      label: "Copy",
      shortcut: "Ctrl+C",
    },
    {
      type: "item",
      label: "Paste",
      shortcut: "Ctrl+V",
    },
    {
      type: "separator",
    },
    {
      type: "sub",
      label: "More Options",
      items: [
        {
          type: "item",
          label: "Option 1",
        },
        {
          type: "item",
          label: "Option 2",
        },
      ],
    },
    {
      type: "checkbox",
      label: "Checkbox",
      checked: true,
    },
    {
      type: "radio",
      label: "Radio Group",
      value: "option1",
      items: [
        {
          type: "radio",
          label: "Option 1",
          value: "option1",
        },
        {
          type: "radio",
          label: "Option 2",
          value: "option2",
        },
      ],
    },
  ];

  const comboBoxData = [
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
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
  const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  );

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
        <Group className="px-10 py-6 z-10">
          <Alert
            variant="success"
            title="Success"
            message="This is a success alert."
            id={"2"}
          >
            <Alert.Title>Success</Alert.Title>
            <Alert.Description>This is a success alert.</Alert.Description>
          </Alert>
        </Group>
        <br />
        <br />
        <Group justify="center">
          <Title order="h3">Calendar Examples</Title>
        </Group>
        <br />
        <br />
        <Group justify="spaceAround">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-sm border"
          />
        </Group>
        <br />
        <br />
        <Group justify="center">
          <Title order="h3">Carousel Examples</Title>
        </Group>
        <br />
        <br />
        <Group justify="spaceAround">
          <Carousel
            opts={{
              align: "start",
            }}
            variant="multiple"
            carouselData={carouselData}
          />
          <Carousel carouselData={carouselData} />
        </Group>
        <br />
        <br />
        <Group justify="center">
          <Title order="h3">Scroll Area Examples</Title>
        </Group>
        <br />
        <br />
        <Group justify="spaceAround">
          <ScrollArea type="hover" className="h-72 w-48 rounded-md border">
            <div className="p-4">
              <Title order="h6">Tags</Title>
              {tags.map((tag) => (
                <>
                  <div key={tag} className="text-sm">
                    {tag}
                  </div>
                  <Separator className="my-2" />
                </>
              ))}
            </div>
          </ScrollArea>
          <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
            <div className="flex w-max space-x-4 p-4">
              {works.map((artwork) => (
                <figure key={artwork.artist} className="shrink-0">
                  <div className="overflow-hidden rounded-md">
                    <Image
                      src={artwork.art}
                      alt={`Photo by ${artwork.artist}`}
                      className="aspect-[3/4] h-fit w-fit object-cover"
                      width={300}
                      height={400}
                    />
                  </div>
                  <figcaption className="pt-2 text-xs text-muted-foreground">
                    Photo by{" "}
                    <span className="font-semibold text-foreground">
                      {artwork.artist}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </Group>
        <br />
        <br />
        <Group justify="center">
          <Title order="h3">Sepratore Examples</Title>
        </Group>
        <br />
        <br />
        <Separator />
        <br />
        <br />
        <Separator label="right" labelPosition="right" />
        <br />
        <br />
        <Separator label="center" labelPosition="center" />
        <br />
        <br />
        <Separator label="left" labelPosition="left" />
        <br />
        <br />
        <Separator
          label={<Button variant={"outline"}>More</Button>}
          labelPosition="center"
        />
        <br />
        <br />
        <Group justify="center">
          <Title order="h3">Collapsible Examples</Title>
        </Group>
        <br />
        <br />
        <Group justify="spaceAround">
          <Collapsible
            data={{
              title: " @madhav starred 3 repositories",
              items: [
                " @xbeshui/primitives",
                " @xbeshui/colors",
                "@xbeshui/core",
                "@stitches/react",
              ],
            }}
            trigger={
              <ActionIcon size="xs" variant="outline">
                <IconSelect size={18} />
              </ActionIcon>
            }
          />
        </Group>
        <br />
        <br />
        <Group justify="center">
          <Title order="h3">If else Examples</Title>
        </Group>
        <br />
        <br />
        <Group justify="spaceAround">
          <IfElse condition={typeof menuConfig == "object"}>
            <Title key={1} order="h3">
              Aakib
            </Title>
            <Title key={2} order="h3">
              bikaA
            </Title>
          </IfElse>
        </Group>
        <br />
        <br />
        <Group justify="center">
          <Title order="h3">NavigationItem Examples</Title>
        </Group>
        <br />
        <br />
        <Group justify="spaceAround">
          <DropdownMenu>
            <DropdownMenu.Trigger asChild>
              <Button variant="outline">Dropdown menu Open</Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="w-56">
              <DropdownMenu.Label>My Account</DropdownMenu.Label>
              <DropdownMenu.Separator />
              <DropdownMenu.Group>
                <DropdownMenu.Item>
                  <IconUser className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                  <DropdownMenu.Shortcut>⇧⌘P</DropdownMenu.Shortcut>
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                  <IconCreditCard className="mr-2 h-4 w-4" />
                  <span>Billing</span>
                  <DropdownMenu.Shortcut>⌘B</DropdownMenu.Shortcut>
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                  <IconSettings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                  <DropdownMenu.Shortcut>⌘S</DropdownMenu.Shortcut>
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                  <IconKeyboard className="mr-2 h-4 w-4" />
                  <span>Keyboard shortcuts</span>
                  <DropdownMenu.Shortcut>⌘K</DropdownMenu.Shortcut>
                </DropdownMenu.Item>
              </DropdownMenu.Group>
              <DropdownMenu.Separator />
              <DropdownMenu.Group>
                <DropdownMenu.Item>
                  <IconUsers className="mr-2 h-4 w-4" />
                  <span>Team</span>
                </DropdownMenu.Item>
                <DropdownMenu.Sub>
                  <DropdownMenu.SubTrigger>
                    <IconUserPlus className="mr-2 h-4 w-4" />
                    <span>Invite users</span>
                  </DropdownMenu.SubTrigger>
                  <DropdownMenu.Portal>
                    <DropdownMenu.SubContent>
                      <DropdownMenu.Item>
                        <IconMail className="mr-2 h-4 w-4" />
                        <span>Email</span>
                      </DropdownMenu.Item>
                      <DropdownMenu.Item>
                        <IconMessage2 className="mr-2 h-4 w-4" />
                        <span>Message</span>
                      </DropdownMenu.Item>
                      <DropdownMenu.Separator />
                      <DropdownMenu.Item>
                        <IconCirclePlus className="mr-2 h-4 w-4" />
                        <span>More...</span>
                      </DropdownMenu.Item>
                    </DropdownMenu.SubContent>
                  </DropdownMenu.Portal>
                </DropdownMenu.Sub>
                <DropdownMenu.Item>
                  <IconPlus className="mr-2 h-4 w-4" />
                  <span>New Team</span>
                  <DropdownMenu.Shortcut>⌘+T</DropdownMenu.Shortcut>
                </DropdownMenu.Item>
              </DropdownMenu.Group>
              <DropdownMenu.Separator />
              <DropdownMenu.Item>
                <IconBrandGithub className="mr-2 h-4 w-4" />
                <span>GitHub</span>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <IconLifebuoy className="mr-2 h-4 w-4" />
                <span>Support</span>
              </DropdownMenu.Item>
              <DropdownMenu.Item disabled>
                <IconCloud className="mr-2 h-4 w-4" />
                <span>API</span>
              </DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item>
                <IconLogout className="mr-2 h-4 w-4" />
                <span>Log out</span>
                <DropdownMenu.Shortcut>⇧⌘Q</DropdownMenu.Shortcut>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>
        </Group>
        <br />
        <br />
        <Group justify="center">
          <Title order="h3">Menubar Examples</Title>
        </Group>
        <br />
        <br />
        <Group justify="spaceAround">
          <Menubar>
            <Menubar.Menu>
              <Menubar.Trigger>File</Menubar.Trigger>
              <Menubar.Content>
                <Menubar.Item>
                  New Tab <Menubar.Shortcut>⌘T</Menubar.Shortcut>
                </Menubar.Item>
                <Menubar.Item>
                  New Window <Menubar.Shortcut>⌘N</Menubar.Shortcut>
                </Menubar.Item>
                <Menubar.Item disabled>New Incognito Window</Menubar.Item>
                <Menubar.Separator />
                <Menubar.Sub>
                  <Menubar.SubTrigger>Share</Menubar.SubTrigger>
                  <Menubar.SubContent>
                    <Menubar.Item>Email link</Menubar.Item>
                    <Menubar.Item>Messages</Menubar.Item>
                    <Menubar.Item>Notes</Menubar.Item>
                  </Menubar.SubContent>
                </Menubar.Sub>
                <Menubar.Separator />
                <Menubar.Item>
                  Print... <Menubar.Shortcut>⌘P</Menubar.Shortcut>
                </Menubar.Item>
              </Menubar.Content>
            </Menubar.Menu>
            <Menubar.Menu>
              <Menubar.Trigger>Edit</Menubar.Trigger>
              <Menubar.Content>
                <Menubar.Item>
                  Undo <Menubar.Shortcut>⌘Z</Menubar.Shortcut>
                </Menubar.Item>
                <Menubar.Item>
                  Redo <Menubar.Shortcut>⇧⌘Z</Menubar.Shortcut>
                </Menubar.Item>
                <Menubar.Separator />
                <Menubar.Sub>
                  <Menubar.SubTrigger>Find</Menubar.SubTrigger>
                  <Menubar.SubContent>
                    <Menubar.Item>Search the web</Menubar.Item>
                    <Menubar.Separator />
                    <Menubar.Item>Find...</Menubar.Item>
                    <Menubar.Item>Find Next</Menubar.Item>
                    <Menubar.Item>Find Previous</Menubar.Item>
                  </Menubar.SubContent>
                </Menubar.Sub>
                <Menubar.Separator />
                <Menubar.Item>Cut</Menubar.Item>
                <Menubar.Item>Copy</Menubar.Item>
                <Menubar.Item>Paste</Menubar.Item>
              </Menubar.Content>
            </Menubar.Menu>
            <Menubar.Menu>
              <Menubar.Trigger>View</Menubar.Trigger>
              <Menubar.Content>
                <Menubar.CheckboxItem>
                  Always Show Bookmarks Bar
                </Menubar.CheckboxItem>
                <Menubar.CheckboxItem checked>
                  Always Show Full URLs
                </Menubar.CheckboxItem>
                <Menubar.Separator />
                <Menubar.Item inset>
                  Reload <Menubar.Shortcut>⌘R</Menubar.Shortcut>
                </Menubar.Item>
                <Menubar.Item disabled inset>
                  Force Reload <Menubar.Shortcut>⇧⌘R</Menubar.Shortcut>
                </Menubar.Item>
                <Menubar.Separator />
                <Menubar.Item inset>Toggle Fullscreen</Menubar.Item>
                <Menubar.Separator />
                <Menubar.Item inset>Hide Sidebar</Menubar.Item>
              </Menubar.Content>
            </Menubar.Menu>
            <Menubar.Menu>
              <Menubar.Trigger>Profiles</Menubar.Trigger>
              <Menubar.Content>
                <Menubar.RadioGroup value="benoit">
                  <Menubar.RadioItem value="andy">Andy</Menubar.RadioItem>
                  <Menubar.RadioItem value="benoit">Benoit</Menubar.RadioItem>
                  <Menubar.RadioItem value="Luis">Luis</Menubar.RadioItem>
                </Menubar.RadioGroup>
                <Menubar.Separator />
                <Menubar.Item inset>Edit...</Menubar.Item>
                <Menubar.Separator />
                <Menubar.Item inset>Add Profile...</Menubar.Item>
              </Menubar.Content>
            </Menubar.Menu>
          </Menubar>
        </Group>
        <br />
        <br />
        <Group justify="center">
          <Title order="h3">Sheet Examples</Title>
        </Group>
        <br />
        <br />
        <Group justify="spaceAround">
          <Sheet
            side="left"
            Trigger={<Button>Open sheet left</Button>}
            title="Sheet tiitle"
          >
            <h1>Sheet content</h1>
          </Sheet>
          <Sheet
            side="right"
            Trigger={<Button>Open sheet right</Button>}
            title="Sheet tiitle"
          >
            <h1>Sheet content</h1>
          </Sheet>
          <Sheet
            side="top"
            Trigger={<Button>Open sheet top</Button>}
            title="Sheet tiitle"
          >
            <h1>Sheet content</h1>
          </Sheet>
          <Sheet
            side="bottom"
            Trigger={<Button>Open sheet bottom</Button>}
            title="Sheet tiitle"
          >
            <h1>Sheet content</h1>
          </Sheet>
        </Group>
        <br />
        <br />
        <Group justify="center">
          <Title order="h3">tooltip Examples</Title>
        </Group>
        <br />
        <br />
        <Group justify="spaceAround">
          <Tooltip.Provider>
            <Tooltip>
              <Tooltip.Trigger asChild>
                <Button variant="outline">Tooltip</Button>
              </Tooltip.Trigger>
              <Tooltip.Content>
                <p>Add to library</p>
              </Tooltip.Content>
            </Tooltip>
          </Tooltip.Provider>
        </Group>

        <br />
        <br />
        <Group justify="center">
          <Title order="h3">Popover Examples</Title>
        </Group>
        <br />
        <br />

        <Group justify="spaceAround">
          <Popover>
            <Popover.Trigger asChild>
              <Button variant="outline">Open popover</Button>
            </Popover.Trigger>
            <Popover.Content className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Dimensions</h4>
                  <p className="text-sm text-muted-foreground">
                    Set the dimensions for the layer.
                  </p>
                </div>
                <div className="grid gap-2">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="width">Width</Label>
                    <TextInput
                      id="width"
                      defaultValue="100%"
                      className="col-span-2 h-8"
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="maxWidth">Max. width</Label>
                    <TextInput
                      id="maxWidth"
                      defaultValue="300px"
                      className="col-span-2 h-8"
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="height">Height</Label>
                    <TextInput
                      id="height"
                      defaultValue="25px"
                      className="col-span-2 h-8"
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="maxHeight">Max. height</Label>
                    <TextInput
                      id="maxHeight"
                      defaultValue="none"
                      className="col-span-2 h-8"
                    />
                  </div>
                </div>
              </div>
            </Popover.Content>
          </Popover>
        </Group>
        <br />
        <br />
        <Group justify="center">
          <Title order="h3">Hover Examples</Title>
        </Group>
        <br />
        <br />
        <Group justify="spaceAround">
          <HoverCard
            triggerContent={<button>hover card: hover me</button>}
            cardContent={
              <>
                <div className="flex justify-between space-x-4">
                  <Avatar src="https://github.com/vercel.png" />

                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">@nextjs</h4>
                    <p className="text-sm">
                      The React Framework – created and maintained by @vercel.
                    </p>
                    <div className="flex items-center pt-2">
                      <IconCalendar className="mr-2 h-4 w-4 opacity-70" />{" "}
                      <span className="text-xs text-muted-foreground">
                        Joined December 2021
                      </span>
                    </div>
                  </div>
                </div>
              </>
            }
          />
        </Group>
        <br />
        <br />
        <Group justify="center">
          <Title order="h3">Drawer Examples</Title>
        </Group>
        <br />
        <br />
        <Group justify="spaceAround">
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
        </Group>

        <br />
        <br />
        <Group justify="center">
          <Title order="h3">pagination Examples</Title>
        </Group>
        <br />
        <br />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
        <br />
        <br />
        <Group justify="center">
          <Title order="h3">ContextMenu Examples</Title>
        </Group>
        <br />
        <br />
        <Group justify="spaceAround">
          <ComboBox data={comboBoxData} />
        </Group>
        <br />
        <br />
        <Group justify="center">
          <Title order="h3">Project Switch</Title>
        </Group>
        <br />
        <br />

        <Group justify="spaceAround">
          <Dialog open={showNewTeamDialog} onOpenChange={setShowNewTeamDialog}>
            <Popover>
              <Popover.Trigger>
                <div
                  onClick={() => setOpen(!opened)}
                  className="w-[200px] flex p-2 rounded-sm justify-between bg-background border border-input"
                  ref={triggerRef}
                >
                  <Group gap={"xs"}>
                    <Group className="shrink-0 h-5 w-5">
                      <Image
                        src={selectedValue.image}
                        alt={selectedValue.label}
                        className="h-full w-full rounded-full object-cover grayscale"
                      />
                    </Group>
                    <Text size="sm" className="truncate max-w-xs">
                      {selectedValue.label}
                    </Text>
                  </Group>

                  <IconSelector className="ml-2 mt-0.5 h-4 w-4 shrink-0 opacity-50" />
                </div>
              </Popover.Trigger>
              <Popover.Content className="p-0 w-[200px]">
                <Command>
                  <Command.Input placeholder="Search..." />
                  <Command.List>
                    <Command.Empty>No results found.</Command.Empty>
                    <Command.Group heading="Personal Account">
                      <Command.Item className="flex justify-between">
                        <Group gap={"xs"}>
                          <Group className="shrink-0 h-5 w-5">
                            <Image
                              src={selectedValue.image}
                              alt={selectedValue.label}
                              className="h-full w-full rounded-full object-cover grayscale"
                            />
                          </Group>
                          <Text size="sm" className="truncate max-w-xs">
                            {selectedValue.label}
                          </Text>
                        </Group>
                      </Command.Item>
                    </Command.Group>
                    <Command.Group heading="Teams">
                      {frameworks.map((framework) => (
                        <Command.Item
                          key={framework.value}
                          onSelect={() => handleChange(framework)}
                          className="flex justify-between"
                        >
                          <Group gap={"xs"}>
                            <Group className="shrink-0 h-5 w-5">
                              <Image
                                src={framework.image}
                                alt={framework.label}
                                className="h-full w-full rounded-full object-cover grayscale"
                              />
                            </Group>
                            <Text size="sm" className="truncate max-w-xs">
                              {framework.label}
                            </Text>
                          </Group>

                          <IconCheck
                            className={`mr-2 h-4 w-4 ${
                              value !== framework.value && "text-transparent"
                            }`}
                          />
                        </Command.Item>
                      ))}
                    </Command.Group>
                    <Group justify="left" className="p-1 border-t w-full">
                      <Dialog.Trigger asChild>
                        <Button
                          variant="ghost"
                          className="w-full items-center justify-start"
                        >
                          + Create Team
                        </Button>
                      </Dialog.Trigger>
                    </Group>
                  </Command.List>
                </Command>
              </Popover.Content>
            </Popover>
            <Dialog.Content>
              <Dialog.Header>
                <Dialog.Title>Create team</Dialog.Title>
                <Dialog.Description>
                  Add a new team to manage products and customers.
                </Dialog.Description>
              </Dialog.Header>
              <div>
                <div className="space-y-4 py-2 pb-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Team name</Label>
                    <TextInput id="name" placeholder="Acme Inc." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="plan">Subscription plan</Label>
                    <Select>
                      <Select.Trigger>
                        <Select.Value placeholder="Select a plan" />
                      </Select.Trigger>
                      <Select.Content>
                        <Select.Item value="free">
                          <span className="font-medium">Free</span> -{" "}
                          <span className="text-muted-foreground">
                            Trial for two weeks
                          </span>
                        </Select.Item>
                        <Select.Item value="pro">
                          <span className="font-medium">Pro</span> -{" "}
                          <span className="text-muted-foreground">
                            $9/month per user
                          </span>
                        </Select.Item>
                      </Select.Content>
                    </Select>
                  </div>
                </div>
              </div>
              <Dialog.Footer>
                <Button
                  variant="outline"
                  onClick={() => setShowNewTeamDialog(false)}
                >
                  Cancel
                </Button>
                <Button type="submit">Continue</Button>
              </Dialog.Footer>
            </Dialog.Content>
          </Dialog>
        </Group>

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
              <List type={"decimal"}>
                <List.Item>List Item 1</List.Item>
                <List.Item>List Item 2</List.Item>
                <List.Item>List Item 3</List.Item>
              </List>

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

              <ContextMenu>
                <ContextMenu.Trigger>Open Context Menu</ContextMenu.Trigger>
                <ContextMenu.Content menuConfig={menuConfig}>
                  asdsddasd
                </ContextMenu.Content>
              </ContextMenu>
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

export default AppAakib;
