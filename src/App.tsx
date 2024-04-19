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
      content: "https://source.unsplash.com/random/1"
    },
    {
      type: "image",
      content: "https://source.unsplash.com/random/2"
    },
    {
      type: "image",
      content: "https://source.unsplash.com/random/3"
    },
    {
      type: "image",
      content: "https://source.unsplash.com/random/4"
    },
    {
      type: "image",
      content: "https://source.unsplash.com/random/5"
    },
    {
      type: "image",
      content: "https://source.unsplash.com/random/6"
    },
    {
      type: "image",
      content: "https://source.unsplash.com/random/7"
    },
    {
      type: "image",
      content: "https://source.unsplash.com/random/8"
    },
    {
      type: "image",
      content: "https://source.unsplash.com/random/9"
    },
    {
      type: "image",
      content: "https://source.unsplash.com/random/10"
    }
  ];

  const data = {
    title: "@peduarte starred 3 repositories",
    items: ["@radix-ui/primitives", "@radix-ui/colors", "@stitches/react"],
  };

  return (
    <Container>
      <Drawer
        Trigger={<Button>Open drawer</Button>}
        title="Drawer title"
        description="Drawer  description"
        onClose={() => console.log("closed")}
      >
        //Drawer content
      </Drawer>
      <DropdownMenu
        menuItems={menuItems}
        trigger={<Button>dropdownmenu</Button>}
      />
      <Tooltip
        trigger={<Button>tooltip</Button>}
        content={<p>hey what's up</p>}
      />

      <Carousel carouselData={carouselData} />

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

      <Menubar menus={menus} />

      <Sheet
        side="left"
        Trigger={<Button>Open sheet</Button>}
        title="Sheet tiitle"
      >
        <h1>Sheet content</h1>
      </Sheet>
    </Container>
  );
};

export default App;
