import React, { useState } from "react";
import { DropdownMenu } from "../packages/core/components/Overlays/dropdownMenu/dropdownMenu";
import { Tooltip } from "../packages/core/components/Overlays/tooltip/tooltip";
import { Carousel } from "../packages/core/components/Misc/carousel/carousel";
import { Container } from "../packages/core/components/Layout/container/container";
import { Drawer } from "../packages/core/components/Overlays/drawer/drawer";
import { Menubar } from "../packages/core/components/Overlays/menuBar/menubar";
import { Button } from "../packages/core/components/Buttons/button/button";
import { IconSelector } from "@tabler/icons-react";
import { Collapsible } from "../packages/core/components/Misc/collapsible/collapsible";
import { Sheet } from "../packages/core/components/Overlays/sheet/sheet";
import { NavigationMenu } from "../packages/core/components/Navigation/navMenu/navMenu";
import { ContextMenu } from "../packages/core/components/Overlays/contextMenu/contextMenu";
import { Dialog } from "../packages/core/components/Feedback/dialog/dialog";
import { Input } from "../packages/core/components/Inputs/textInput/textInput";
import { Label } from "../packages/core/components/Typography/label/label";
import { ConirmDialog } from "../packages/core/components/Feedback/confirmDialog/confirmDialog";
import { Select } from "../packages/core/components/Inputs/select/select";
import { ColorInput } from "../packages/core/components/Inputs/colorInput/colorInput";
import { ComboBox } from "../packages/core/components/Inputs/combobox/combobox";
import { Progress } from "../packages/core/components/Feedback/progress/progress";
import { NotificationTimeline } from "../packages/core/components/Misc/notificationTimeline/notificationTimeLine";

type MenuItem = {
  label?: string;
  items?: MenuItem[];
  type?: "sub";
  subItems?: string[];
  shortcut?: string;
  disabled?: boolean;
};

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  type MenuBarItem = {
    label?: string;
    shortcut?: string;
    disabled?: boolean;
    type?: "normal" | "checkbox" | "radio" | "submenu";
    submenu?: { label?: string; type?: string; value?: string }[];
    inset?: boolean;
    checked?: boolean;
    value?: string;
  };

  type Menu = {
    label: string;
    items: MenuBarItem[];
  };

  const menus: Menu[] = [
    {
      label: "File",
      items: [
        { label: "New Tab", shortcut: "⌘T", type: "normal" },
        { label: "New Window", shortcut: "⌘N", type: "normal" },
        { label: "New Incognito Window", disabled: true, type: "normal" },
        {
          label: "Share",
          type: "submenu",
          submenu: [
            { label: "Email link", type: "normal" },
            { label: "Messages", type: "normal" },
            { label: "Notes", type: "normal" },
          ],
        },
        { label: "Print...", shortcut: "⌘P", type: "normal" },
      ],
    },
    {
      label: "Edit",
      items: [
        { label: "Undo", shortcut: "⌘Z", type: "normal" },
        { label: "Redo", shortcut: "⇧⌘Z", type: "normal" },
        {
          label: "Find",
          type: "submenu",
          submenu: [
            { label: "Search the web", type: "normal" },
            { label: "Find...", type: "normal" },
            { label: "Find Next", type: "normal" },
            { label: "Find Previous", type: "normal" },
          ],
        },
        { label: "Cut", type: "normal" },
        { label: "Copy", type: "normal" },
        { label: "Paste", type: "normal" },
      ],
    },
    {
      label: "View",
      items: [
        { label: "Always Show Bookmarks Bar", type: "checkbox" },
        { label: "Always Show Full URLs", type: "checkbox", checked: true },
        { label: "Reload", shortcut: "⌘R", type: "normal", inset: true },
        {
          label: "Force Reload",
          shortcut: "⇧⌘R",
          type: "normal",
          inset: true,
          disabled: true,
        },
        { label: "Toggle Fullscreen", type: "normal", inset: true },
        { label: "Hide Sidebar", type: "normal", inset: true },
      ],
    },
    {
      label: "Profiles",
      items: [
        {
          type: "radio",
          value: "benoit",
          submenu: [
            { label: "Andy", value: "andy" },
            { label: "Benoit", value: "benoit" },
            { label: "Luis", value: "Luis" },
          ],
        },
        { label: "Edit...", type: "normal", inset: true },
        { label: "Add Profile...", type: "normal", inset: true },
      ],
    },
  ];
  const menuItems: MenuItem[] = [
    {
      label: "My Account",
      items: [
        { label: "Profile", shortcut: "⇧⌘P" },
        { label: "Billing", shortcut: "⌘B" },
        { label: "Settings", shortcut: "⌘S" },
        { label: "Keyboard shortcuts", shortcut: "⌘K" },
      ],
    },
    {
      items: [
        { label: "Team" },
        {
          label: "Invite users",
          type: "sub",
          subItems: ["Email", "Message", "More..."],
        },
        { label: "New Team", shortcut: "⌘+T" },
      ],
    },
    { items: [{ label: "GitHub" }] },
    { items: [{ label: "Support" }] },
    { items: [{ label: "API", disabled: true }] },
    { items: [{ label: "Log out", shortcut: "⇧⌘Q" }] },
  ];
  type CarouselItemType = {
    type?: "image" | "text" | "video";
    content?: string;
  };
  const carouselData: CarouselItemType[] = [
    {
      type: "image",
      content: "https://source.unsplash.com/random/1",
    },
    {
      type: "image",
      content: "https://source.unsplash.com/random/2",
    },
    {
      type: "image",
      content: "https://source.unsplash.com/random/3",
    },
    {
      type: "image",
      content: "https://source.unsplash.com/random/4",
    },
    {
      type: "image",
      content: "https://source.unsplash.com/random/5",
    },
    {
      type: "image",
      content: "https://source.unsplash.com/random/6",
    },
    {
      type: "image",
      content: "https://source.unsplash.com/random/7",
    },
    {
      type: "image",
      content: "https://source.unsplash.com/random/8",
    },
    {
      type: "image",
      content: "https://source.unsplash.com/random/9",
    },
    {
      type: "image",
      content: "https://source.unsplash.com/random/10",
    },
  ];

  const data = {
    title: "@peduarte starred 3 repositories",
    items: ["@radix-ui/primitives", "@radix-ui/colors", "@stitches/react"],
  };

  type NavigationMenuItem = {
    title?: string;
    href?: string;
    description?: string;
    special?: boolean;
  };

  type NavigationMenuSection = {
    title?: string;
    items?: NavigationMenuItem[];
    href?: string;
    dropdown: boolean;
  };

  const sections: NavigationMenuSection[] = [
    {
      title: "Getting started",
      items: [
        {
          title: "XbeshUi",
          href: "/docs",
          description:
            "Re-usable components built using Radix UI and Tailwind CSS.",
          special: true,
        },
        {
          title: "Introduction",
          href: "/docs",
          description:
            "Re-usable components built using Radix UI and Tailwind CSS.",
        },
        {
          title: "Installation",
          href: "/docs/installation",
          description: "How to install dependencies and structure your app.",
        },
        {
          title: "Typography",
          href: "/docs/primitives/typography",
          description: "Styles for headings, paragraphs, lists...etc",
        },
      ],
      dropdown: true,
    },
    {
      title: "Components",
      items: [
        {
          title: "Alert Dialog",
          href: "/docs/primitives/alert-dialog",
          description:
            "A modal dialog that interrupts the user with important content and expects a response.",
        },
        {
          title: "Hover Card",
          href: "/docs/primitives/hover-card",
          description:
            "For sighted users to preview content available behind a link.",
        },
        {
          title: "Progress",
          href: "/docs/primitives/progress",
          description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
        },
        {
          title: "Scroll-area",
          href: "/docs/primitives/scroll-area",
          description: "Visually or semantically separates content.",
        },
        {
          title: "Tabs",
          href: "/docs/primitives/tabs",
          description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
        },
        {
          title: "Tooltip",
          href: "/docs/primitives/tooltip",
          description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
        },
      ],
      dropdown: true,
    },
    {
      title: "Documents",
      href: "/docs",
      dropdown: false,
    },
    {
      title: "About",
      href: "/about",
      dropdown: false,
    },
  ];

  type ContextMenuItemConfig = {
    type: "item" | "sub" | "separator" | "checkbox" | "radio";
    label?: string;
    shortcut?: string;
    disabled?: boolean;
    inset?: boolean;
    checked?: boolean;
    value?: string;
    items?: ContextMenuItemConfig[];
  };

  type ContextMenuConfig = ContextMenuItemConfig[];

  const menuConfig: ContextMenuConfig = [
    {
      type: "item",
      label: "Back",
      shortcut: "⌘[",
    },
    {
      type: "item",
      label: "Forward",
      shortcut: "⌘]",
      disabled: true,
    },
    {
      type: "item",
      label: "Reload",
      shortcut: "⌘R",
    },
    {
      type: "sub",
      label: "More Tools",
      items: [
        {
          type: "item",
          label: "Save Page As...",
          shortcut: "⇧⌘S",
        },
        {
          type: "item",
          label: "Create Shortcut...",
        },
        {
          type: "item",
          label: "Name Window...",
        },
        {
          type: "separator",
        },
        {
          type: "item",
          label: "Developer Tools",
        },
      ],
    },
    {
      type: "separator",
    },
    {
      type: "checkbox",
      label: "Show Bookmarks Bar",
      shortcut: "⌘⇧B",
      checked: true,
    },
    {
      type: "checkbox",
      label: "Show Full URLs",
      checked: true,
    },
    {
      type: "separator",
    },
    {
      type: "radio",
      label: "People",
      items: [
        {
          type: "item",
          label: "Pedro Duarte",
          value: "pedro",
        },
        {
          type: "item",
          label: "Colm Tuite",
          value: "colm",
        },
      ],
    },
  ];
  interface TimezoneConfigItem {
    title: string;
    items: { label: string; value: string }[];
  }

  const timezoneConfig: TimezoneConfigItem[] = [
    {
      title: "North America",
      items: [
        { label: "Eastern Standard Time (EST)", value: "est" },
        { label: "Central Standard Time (CST)", value: "cst" },
        { label: "Mountain Standard Time (MST)", value: "mst" },
        { label: "Pacific Standard Time (PST)", value: "pst" },
        { label: "Alaska Standard Time (AKST)", value: "akst" },
        { label: "Hawaii Standard Time (HST)", value: "hst" },
      ],
    },
    {
      title: "Europe & Africa",
      items: [
        { label: "Greenwich Mean Time (GMT)", value: "gmt" },
        { label: "Central European Time (CET)", value: "cet" },
        { label: "Eastern European Time (EET)", value: "eet" },
        { label: "Western European Summer Time (WEST)", value: "west" },
        { label: "Central Africa Time (CAT)", value: "cat" },
        { label: "East Africa Time (EAT)", value: "eat" },
      ],
    },
    {
      title: "Asia",
      items: [
        { label: "Moscow Time (MSK)", value: "msk" },
        { label: "India Standard Time (IST)", value: "ist" },
        { label: "China Standard Time (CST)", value: "cst_china" },
        { label: "Japan Standard Time (JST)", value: "jst" },
        { label: "Korea Standard Time (KST)", value: "kst" },
        {
          label: "Indonesia Central Standard Time (WITA)",
          value: "ist_indonesia",
        },
      ],
    },
    {
      title: "Australia & Pacific",
      items: [
        { label: "Australian Western Standard Time (AWST)", value: "awst" },
        { label: "Australian Central Standard Time (ACST)", value: "acst" },
        { label: "Australian Eastern Standard Time (AEST)", value: "aest" },
        { label: "New Zealand Standard Time (NZST)", value: "nzst" },
        { label: "Fiji Time (FJT)", value: "fjt" },
      ],
    },

    {
      title: "South America",
      items: [
        { label: "Argentina Time (ART)", value: "art" },
        { label: "Bolivia Time (BOT)", value: "bot" },
        { label: "Brasilia Time (BRT)", value: "brt" },
        { label: "Chile Standard Time (CLT)", value: "clt" },
      ],
    },
  ];

  interface FrameworksType {
    value: string;
    label: string;
  }

  const frameworks: FrameworksType[] = [
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

  interface RoadmapItem {
    label: string;
    date: string;
    title?: string;
    desc?: string;
  }

  const roadmapData: RoadmapItem[] = [
    {
      label: "v1.0.0",
      date: "16 April, 2024",
      title: "Tailwind Color fixes",
      desc: "Components included:\nButtons, Carousels, Cards, Dropdown Menus, Select Menus",
    },
    {
      label: "v1.0.1",
      date: "21 Feb, 2024",
      title: "Initial release",
      desc: "Components included:\nButtons, Carousels, Cards, Dropdown Menus, Select Menus",
    },
    {
      label: "v1.0.2",
      date: "21 Feb, 2024",
      title: "Initial release",
      desc: "Components included:\nButtons, Carousels, Cards, Dropdown Menus, Select Menus",
    },
    {
      label: "v1.0.3",
      date: "21 Feb, 2024",
      title: "Initial release",
      desc: "Components included:\nButtons, Carousels, Cards, Dropdown Menus, Select Menus",
    },
    {
      label: "v1.0.4",
      date: "21 Feb, 2024",
      title: "Initial release",
      desc: "Components included:\nButtons, Carousels, Cards, Dropdown Menus, Select Menus",
    },
    {
      label: "v1.0.5",
      date: "21 Feb, 2024",
      title: "Initial release",
      desc: "Components included:\nButtons, Carousels, Cards, Dropdown Menus, Select Menus",
    },
    {
      label: "v1.0.6",
      date: "21 Feb, 2024",
      title: "Initial release",
      desc: "Components included:\nButtons, Carousels, Cards, Dropdown Menus, Select Menus",
    },
    {
      label: "v1.0.7",
      date: "21 Feb, 2024",
      title: "Initial release",
      desc: "Components included:\nButtons, Carousels, Cards, Dropdown Menus, Select Menus",
    },
    {
      label: "v1.0.8",
      date: "21 Feb, 2024",
      title: "Initial release",
      desc: "Components included:\nButtons, Carousels, Cards, Dropdown Menus, Select Menus",
    },
    {
      label: "v1.0.9",
      date: "21 Feb, 2024",
      title: "Initial release",
      desc: "Components included:\nButtons, Carousels, Cards, Dropdown Menus, Select Menus",
    },
    {
      label: "v1.1.0",
      date: "21 Feb, 2024",
      title: "Initial release",
      desc: "Components included:\nButtons, Carousels, Cards, Dropdown Menus, Select Menus",
    },
    {
      label: "v1.1.1",
      date: "21 Feb, 2024",
      title: "Initial release",
      desc: "Components included:\nButtons, Carousels, Cards, Dropdown Menus, Select Menus",
    },
    {
      label: "v1.1.2",
      date: "21 Feb, 2024",
      title: "Initial release",
      desc: "Components included:\nButtons, Carousels, Cards, Dropdown Menus, Select Menus",
    },
    {
      label: "v1.1.3",
      date: "21 Feb, 2024",
      title: "Initial release",
      desc: "Components included:\nButtons, Carousels, Cards, Dropdown Menus, Select Menus",
    },
    {
      label: "v1.1.4",
      date: "21 Feb, 2024",
      title: "Initial release",
      desc: "Components included:\nButtons, Carousels, Cards, Dropdown Menus, Select Menus",
    },
    {
      label: "v1.1.5",
      date: "21 Feb, 2024",
      title: "Initial release",
      desc: "Components included:\nButtons, Carousels, Cards, Dropdown Menus, Select Menus",
    },
    {
      label: "v1.1.6",
      date: "21 Feb, 2024",
      title: "Initial release",
      desc: "Components included:\nButtons, Carousels, Cards, Dropdown Menus, Select Menus",
    },
    {
      label: "v1.1.7",
      date: "21 Feb, 2024",
      title: "Initial release",
      desc: "Components included:\nButtons, Carousels, Cards, Dropdown Menus, Select Menus",
    },
    {
      label: "v1.1.8",
      date: "21 Feb, 2024",
      title: "Initial release",
      desc: "Components included:\nButtons, Carousels, Cards, Dropdown Menus, Select Menus",
    },
    {
      label: "v1.1.9",
      date: "21 Feb, 2024",
      title: "Initial release",
      desc: "Components included:\nButtons, Carousels, Cards, Dropdown Menus, Select Menus",
    },
    {
      label: "v1.2.0",
      date: "21 Feb, 2024",
      title: "Initial release",
      desc: "Components included:\nButtons, Carousels, Cards, Dropdown Menus, Select Menus",
    },
    {
      label: "v1.2.1",
      date: "21 Feb, 2024",
      title: "Initial release",
      desc: "Components included:\nButtons, Carousels, Cards, Dropdown Menus, Select Menus",
    },
    {
      label: "v1.2.2",
      date: "21 Feb, 2024",
      title: "Initial release",
      desc: "Components included:\nButtons, Carousels, Cards, Dropdown Menus, Select Menus",
    },
    {
      label: "v1.2.3",
      date: "21 Feb, 2024",
      title: "Initial release",
      desc: "Components included:\nButtons, Carousels, Cards, Dropdown Menus, Select Menus",
    },
  ];

  return (
    <Container>
      <br />
      <br />
      <Drawer
        Trigger={<Button>Open drawer</Button>}
        title="Drawer title"
        description="Drawer  description"
        onClose={() => console.log("closed")}
      >
        //Drawer content
      </Drawer>
      <br />
      <br />
      <DropdownMenu
        menuItems={menuItems}
        trigger={<Button>dropdownmenu</Button>}
      />
      <br />
      <br />
      <Tooltip
        trigger={<Button>tooltip</Button>}
        content={<p>hey what's up</p>}
      />
      <br />
      <br />
      <Carousel carouselData={carouselData} />
      <br />
      <br />
      <div>
        <Collapsible
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          data={data}
          trigger={
            <Button variant="ghost" size="sm">
              <IconSelector className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          }
        />
      </div>
      <br />
      <br />
      <Menubar menus={menus} />
      <br />
      <br />
      <Sheet
        side="left"
        Trigger={<Button>Open sheet</Button>}
        title="Sheet tiitle"
      >
        <h1>Sheet content</h1>
      </Sheet>
      <br />
      <br />
      <NavigationMenu sections={sections} />
      <br />
      <br />
      <ContextMenu menuConfig={menuConfig} />
      <br />
      <br />
      <Dialog
        trigger={<Button>open Dialog</Button>}
        title="Are you absolutely sure?"
        description="This action cannot be undone. This will permanently delete your account
        and remove your data from our servers."
        mainContent={
          <>
            {" "}
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" value="Pedro Duarte" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input id="username" value="@peduarte" className="col-span-3" />
              </div>
            </div>
          </>
        }
      />
      <br />
      <br />
      <ConirmDialog
        trigger={<Button>Confirm Dialog</Button>}
        title="Are you absolutely sure?"
        description="This action cannot be undone. This will permanently delete your
            account and remove your data from our servers."
        cancel="Cancel"
        submit="Submit"
        onSubmit={() => alert("deleted successully")}
      />
      <br />
      <br />
      <Select
        data={timezoneConfig}
        placeholder="Select a timezone"
        defaultValue="AAkib"
      />
      <br />
      <br />
      <ColorInput />
      <br />
      <br />
      <ComboBox data={frameworks} />
      <br />
      <br />
      <Progress bgColor="bg-red-500" radius="md" value={30} />
      <br />
      <br />
      <NotificationTimeline data={roadmapData} />
      <br />
      <br />
    </Container>
  );
};

export default App;
