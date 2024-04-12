/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import "./index.css";
import { ActionIcon } from "../packages/core/components/Buttons/actionIcon/actionIcon";
import { Toggle } from "../packages/core/components/Buttons/toggle/toggle";
import {
  IconBold,
  IconItalic,
  IconSelect,
  IconUnderline,
} from "@tabler/icons-react";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "../packages/core/components/Buttons/toggle/toggleGroup";

import { FileButton } from "../packages/core/components/Buttons/fileButton/fileButton";
import { CopyButton } from "../packages/core/components/Buttons/copyButton/copyButton";
import { Avatar } from "../packages/core/components/DataDisplay/avatar/avatar";
import { Link } from "../packages/core/components/Buttons/link/link";
import { BackgroundImage } from "../packages/core/components/DataDisplay/backgroundImage/backgroundimage";
import { Image } from "../packages/core/components/DataDisplay/image/image";
import { Badge } from "../packages/core/components/DataDisplay/badge/badge";
import { XbTable } from "../packages/core/components/DataDisplay/table/table";
import { BlockQuote } from "../packages/core/components/Typography/blockquote/blockquote";
import { Code } from "../packages/core/components/Typography/code/code";
import { Label } from "../packages/core/components/Typography/label/label";
import {
  List,
  ListItem,
} from "../packages/core/components/Typography/list/list";
import { Text } from "../packages/core/components/Typography/text/text";
import { Title } from "../packages/core/components/Typography/title/title";
import { FlexBox } from "../packages/core/components/Layout/flexBox/flexBox";
import { SimpleGrid } from "../packages/core/components/Layout/simpleGrid/simpleGrid";
import { Separator } from "../packages/core/components/Misc/separator/separator";
import { Alert } from "../packages/core/components/Feedback/alert/alert";
import { Progress } from "../packages/core/components/Feedback/progress/progress";
import { Skeleton } from "../packages/core/components/Feedback/skeleton/skeleton";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../packages/core/components/Feedback/dialog/dialog";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../packages/core/components/DataDisplay/accordion/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../packages/core/components/DataDisplay/card/card";
import React from "react";
import {
  IconAlertCircle,
  IconCalculator,
  IconCalendar,
  IconCopy,
  IconCreditCard,
  IconMoodHappy,
  IconSettings,
  IconStack,
  IconUser,
} from "@tabler/icons-react";
import { Button } from "../packages/core/components/Buttons/button/button";
import { useToast } from "../packages/core/components/Feedback/toast/use-toast";
import { ToastAction } from "../packages/core/components/Feedback/toast/toast";
import { Input } from "../packages/core/components/Inputs/textInput/textInput";
import { Textarea } from "../packages/core/components/Inputs/textarea/textarea";
import { TagsInput } from "../packages/core/components/Inputs/tags/tags";
import { Switch } from "../packages/core/components/Inputs/switch/switch";
import { FileInput } from "../packages/core/components/Inputs/fileInput/fileInput";
import { Slider } from "../packages/core/components/Inputs/rangeSlider/rangeSlider";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "../packages/core/components/Inputs/spotlight/spotlight";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../packages/core/components/Inputs/select/select";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../packages/core/components/Inputs/inputOtp/inputOtp";
import { MultiSelect } from "../packages/core/components/Inputs/multiSelect/multiSelect";

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "../packages/core/components/Overlays/menuBar/menubar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../packages/core/components/Overlays/sheet/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../packages/core/components/Overlays/tooltip/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../packages/core/components/Overlays/dropdownMenu/dropdownMenu";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "../packages/core/components/Overlays/contextMenu/contextMenu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../packages/core/components/Overlays/drawer/drawer";
import { Stack } from "../packages/core/components/Layout/stack/stack";
import { IconMinus } from "@tabler/icons-react";
import { IconPlus } from "@tabler/icons-react";
import { Checkbox } from "../packages/core/components/Inputs/checkbox/checkbox";
import {
  RadioGroup,
  RadioGroupItem,
} from "../packages/core/components/Inputs/radio/radio";
import { AspectRatio } from "../packages/core/components/Layout/aspectRatio/aspectRatio";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../packages/core/components/DataDisplay/tabs/tabs";
import { XbeshThemeSwitch } from "../packages/core/components/Theme/themeSwitch/xBeshThemeSwitch";
import { Container } from "../packages/core/components/Layout/container/container";
import { Pagination } from "../packages/core/components/Navigation/pagination/pagination";
import { ColorInput } from "../packages/core/components/Inputs/colorInput/colorInput";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Calendar,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  ColorSwatch,
  DataTable,
  Grid,
  GridCol,
  Group,
  HoverCard,
  NavListItem,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  Popover,
  Resizable,
  ScrollArea,
  Timeline,
  TimelineItem,
  navigationMenuTriggerStyle,
} from "../packages/core/components";
import { ColumnDef } from "@tanstack/react-table";
// import { IconCopy } from "@tabler/icons-react";
// import { Button } from '../packages/core/components';

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const { toast } = useToast();
  const [goal, setGoal] = React.useState(350);
  const [opened, setOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = 10; // Total number of pages in your pagination

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Perform any other actions you need to do when the page changes
  };

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  const components: { title: string; href: string; description: string }[] = [
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
  ];

  const dataa = [
    {
      id: "TASK-0011",
      task: "Documentation",
      title: "Update best practices",
      status: "Todo",
      priority: "Low",
    },
    {
      id: "TASK-0012",
      task: "Documentation",
      title: "Review documentation",
      status: "In Progress",
      priority: "Medium",
    },
    {
      id: "TASK-0013",
      task: "Bug",
      title: "Fix login issue",
      status: "Done",
      priority: "High",
    },
    {
      id: "TASK-0014",
      task: "Feature",
      title: "Implement user authentication",
      status: "Backlog",
      priority: "Medium",
    },
    {
      id: "TASK-0015",
      task: "Bug",
      title: "Fix navigation bar styling",
      status: "In Progress",
      priority: "Low",
    },
    {
      id: "TASK-0016",
      task: "Feature",
      title: "Add dark mode support",
      status: "Todo",
      priority: "High",
    },
    {
      id: "TASK-0017",
      task: "Bug",
      title: "Fix database query bug",
      status: "Done",
      priority: "High",
    },
    {
      id: "TASK-0018",
      task: "Feature",
      title: "Implement user profile page",
      status: "Backlog",
      priority: "Medium",
    },
    {
      id: "TASK-0019",
      task: "Bug",
      title: "Fix form validation bug",
      status: "In Progress",
      priority: "Low",
    },
    {
      id: "TASK-0020",
      task: "Feature",
      title: "Add search functionality",
      status: "Done",
      priority: "High",
    },
    {
      id: "TASK-0021",
      task: "Bug",
      title: "Fix login authentication bug",
      status: "Todo",
      priority: "Medium",
    },
    {
      id: "TASK-0022",
      task: "Feature",
      title: "Implement file upload feature",
      status: "Backlog",
      priority: "High",
    },
    {
      id: "TASK-0023",
      task: "Bug",
      title: "Fix broken links",
      status: "In Progress",
      priority: "Low",
    },
    {
      id: "TASK-0024",
      task: "Feature",
      title: "Add product comparison feature",
      status: "Done",
      priority: "High",
    },
    {
      id: "TASK-0025",
      task: "Bug",
      title: "Fix login redirect issue",
      status: "Todo",
      priority: "Medium",
    },
    {
      id: "TASK-0026",
      task: "Feature",
      title: "Implement search suggestions",
      status: "Backlog",
      priority: "High",
    },
    {
      id: "TASK-0027",
      task: "Bug",
      title: "Fix pagination issue",
      status: "In Progress",
      priority: "Low",
    },
    {
      id: "TASK-0028",
      task: "Feature",
      title: "Add user registration page",
      status: "Done",
      priority: "High",
    },
    {
      id: "TASK-0029",
      task: "Bug",
      title: "Fix layout issue on mobile devices",
      status: "Todo",
      priority: "Medium",
    },
    {
      id: "TASK-0030",
      task: "Feature",
      title: "Implement email notification system",
      status: "Backlog",
      priority: "High",
    },
    {
      id: "TASK-0031",
      task: "Bug",
      title: "Fix email delivery issue",
      status: "In Progress",
      priority: "Low",
    },
    {
      id: "TASK-0032",
      task: "Feature",
      title: "Add subscription option",
      status: "Done",
      priority: "High",
    },
    {
      id: "TASK-0033",
      task: "Bug",
      title: "Fix 404 error page",
      status: "Todo",
      priority: "Medium",
    },
    {
      id: "TASK-0034",
      task: "Feature",
      title: "Implement admin dashboard",
      status: "Backlog",
      priority: "High",
    },
    {
      id: "TASK-0035",
      task: "Bug",
      title: "Fix session timeout issue",
      status: "In Progress",
      priority: "Low",
    },
    {
      id: "TASK-0036",
      task: "Feature",
      title: "Add social media sharing buttons",
      status: "Done",
      priority: "High",
    },
    {
      id: "TASK-0037",
      task: "Bug",
      title: "Fix date formatting issue",
      status: "Todo",
      priority: "Medium",
    },
    {
      id: "TASK-0038",
      task: "Feature",
      title: "Implement wishlist feature",
      status: "Backlog",
      priority: "High",
    },
    {
      id: "TASK-0039",
      task: "Bug",
      title: "Fix form submission issue",
      status: "In Progress",
      priority: "Low",
    },
    {
      id: "TASK-0040",
      task: "Feature",
      title: "Add chat support",
      status: "Done",
      priority: "High",
    },
  ];

  const columns: ColumnDef<unknown>[] = [
    {
      accessorKey: "id",
      header: "ID",
      cell: ({ row }) => <div>{row.getValue("id")}</div>,
    },
    {
      accessorKey: "task",
      header: "Task",
      cell: ({ row }) => <div>{row.getValue("task")}</div>,
    },
    {
      accessorKey: "title",
      header: "Title",
      cell: ({ row }) => <div>{row.getValue("title")}</div>,
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => <div>{row.getValue("status")}</div>,
    },
    {
      accessorKey: "priority",
      header: "Priority",
      cell: ({ row }) => <div>{row.getValue("priority")}</div>,
    },
  ];

  const filters = [
    {
      name: "status",
      options: ["Backlog", "Todo", "In Progress", "Done", "Cancel"],
    },
    { name: "priority", options: ["low", "medium", "high"] },
  ];
  const searchable = "title";

  type PanelConfig = {
    key: string | number;
    content: React.ReactNode;
    resizable?: boolean;
    defaultSize?: number; // Note the addition here
    direction?: "horizontal" | "vertical";
    nestedPanels?: PanelConfig[]; // Allow nested panels
  };
  const panelConfigs: PanelConfig[] = [
    {
      key: "panel1",
      content: (
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">One</span>
        </div>
      ),
      resizable: true,
      defaultSize: 50,
    },
    {
      key: "panel2",
      content: (
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Two</span>
        </div>
      ),
      nestedPanels: [
        {
          key: "nested1",
          content: (
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Three</span>
            </div>
          ),
          resizable: true,
          defaultSize: 50,
        },
        {
          key: "nested2",
          content: (
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">four</span>
            </div>
          ),
          defaultSize: 75,
        },
      ],
      direction: "vertical",
    },
  ];

  //   const [count, setCount] = useState(0)
  //   var randomNumber = Math.floor(Math.random() * 100) + 1;

  //   const useTitle = title => {
  //     const documentDefined = typeof document !== 'undefined';
  //     const originalTitle = React.useRef(documentDefined ? document.title : null);

  //     React.useEffect(() => {
  //       if (!documentDefined) return;

  //       if (document.title !== title) document.title = title;

  //       return () => {
  //         document.title = originalTitle.current as string;
  //       };
  //     }, []);
  //   };
  const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  );

  const data = [
    {
      id: 1,
      name: "John Doe",
      role: "Developer",
      city: "delhi",
      country: "india",
    },
    { id: 2, name: "Jane Doe", role: "Designer", city: "up" },
    { id: 3, name: "Alice Smith", role: "Manager", city: "haryana" },
    { id: 4, name: "Bob Johnson", role: "Engineer", city: "mumbai" },
    { id: 5, name: "Eve Wilson", role: "Analyst", city: "bangalore" },
    { id: 6, name: "Charlie Brown", role: "Consultant", city: "chennai" },
    { id: 7, name: "Grace Lee", role: "Coordinator", city: "kolkata" },
    { id: 8, name: "David Clark", role: "Administrator", city: "pune" },
    { id: 9, name: "Sarah Davis", role: "Supervisor", city: "ahmedabad" },
    { id: 10, name: "Michael Martinez", role: "Specialist", city: "hyderabad" },
    { id: 11, name: "Linda Garcia", role: "Technician", city: "jaipur" },
    { id: 12, name: "Peter Adams", role: "Coordinator", city: "lucknow" },
    { id: 13, name: "Jennifer Baker", role: "Analyst", city: "patna" },
    { id: 14, name: "Tom Wilson", role: "Manager", city: "nagpur" },
    { id: 15, name: "Jessica Perez", role: "Developer", city: "chandigarh" },
    { id: 16, name: "Mark Taylor", role: "Designer", city: "surat" },
    { id: 17, name: "Karen Lopez", role: "Engineer", city: "kanpur" },
    { id: 18, name: "Steven Young", role: "Consultant", city: "jaipur" },
    { id: 19, name: "Anna Harris", role: "Administrator", city: "ahmedabad" },
    { id: 20, name: "Robert Wright", role: "Supervisor", city: "hyderabad" },
  ];

  // const mock = {
  //   FILE_MENU_TITLE: "File",
  //   EDIT_MENU_TITLE: "Edit",
  //   VIEW_MENU_TITLE: "View",
  //   PROFILES_MENU_TITLE: "Profiles",
  //   fileMenuItems: [
  //     { name: "New", menubarShortcut: "Ctrl+N" },
  //     { name: "Open", menubarShortcut: "Ctrl+O" },
  //     { name: "Save", menubarShortcut: "Ctrl+S" },
  //     { name: "Save As", menubarShortcut: "Ctrl+Shift+S" },
  //     { name: "Close", menubarShortcut: "Ctrl+W" },
  //     { name: "Exit", menubarShortcut: "Ctrl+Q" },
  //   ],
  //   editMenuItems: [
  //     { name: "Undo", menubarShortcut: "Ctrl+Z" },
  //     { name: "Redo", menubarShortcut: "Ctrl+Shift+Z" },
  //     { name: "Cut", menubarShortcut: "Ctrl+X" },
  //     { name: "Copy", menubarShortcut: "Ctrl+C" },
  //     { name: "Paste", menubarShortcut: "Ctrl+V" },
  //     { name: "Delete", menubarShortcut: "Del" },
  //   ],
  //   viewMenuItems: [
  //     { name: "Zoom In", menubarShortcut: "Ctrl+Shift+=" },
  //     { name: "Zoom Out", menubarShortcut: "Ctrl+-" },
  //     { name: "Reset Zoom", menubarShortcut: "Ctrl+0" },
  //     { name: "Toggle Full Screen", menubarShortcut: "F11" },
  //   ],
  //   profileMenuItems: [
  //     {
  //       name: "Light Mode",
  //       isRadioItem: true,
  //       radioItems: [
  //         { name: "Light Mode", radioId: "light-mode" },
  //         { name: "Dark Mode", radioId: "dark-mode" },
  //       ],
  //       hasSeparatorBelow: true,
  //     },
  //     { name: "Settings", inset: true },
  //   ],
  // };

  const items = [
    {
      imageUrl:
        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",
      name: "Jese Leos",
      action: "likes Bonnie Greens post",
      description: "I wanted to share a webinar zeroheight",
      privacy: "Public",
    },
    {
      imageUrl:
        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",
      name: "Jese Leos",
      action: "likes Bonnie Greens post",
      description: "I wanted to share a webinar zeroheight",
      privacy: "Public",
    },
    {
      imageUrl:
        "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",
      name: "Jese Leos",
      action: "likes Bonnie Greens post",
      description: "I wanted to share a webinar zeroheight",
      privacy: "Public",
    },
  ];

  return (
    <>
      <Container fluid={false} justify="start" items="center">
        <div style={{ clear: "both" }}>
          <Title
            order={"h1"}
            fontFamily={"sans"}
            align={"right"}
            gradient={"bl"}
            gradientColors="from-pink-500 from-10% via-sky-500 via-30% to-red-500 to-90%"
            textWrap={"wrap"}
          >
            Believe you can and you're halfway there.{" "}
          </Title>
        </div>
        <br />

        <hr
          className="text-blue-400"
          style={{ color: "blue", margin: "10px", width: "100%" }}
        />
        <Title
          order={"h3"}
          fontFamily={"sans"}
          align={"center"}
          gradient={"bl"}
          gradientColors="from-green-500 from-40% via-pink-500 via-30% to-yellow-500 to-70%"
          textWrap={"wrap"}
          className="mb-10"
        >
          -Buttons-
        </Title>

        <span className="text-gray-600">Action Icon</span>
        <ActionIcon size={"lg"} variant={"destructive"} radius={"full"}>
          <IconSettings />
        </ActionIcon>
        <br />

        <span className="text-gray-600">Button</span>
        <Button radius={"md"} size={"lg"} variant={"warning"}>
          Click Me
        </Button>
        <br />

        <span className="text-gray-600">Copy Button</span>
        <CopyButton
          value={"Here we go"}
          size={"md"}
          radius={"full"}
          variant={"notice"}
        >
          Copy to clipboard
        </CopyButton>
        <br />

        <span className="text-gray-600">File Button</span>
        <FileButton
          onFileSelect={(value) => console.log(value)}
          variant={"secondary"}
          size={"lg"}
          radius={"full"}
          allowedFileTypes={["image/svg+xml"]}
        >
          Upload Image
        </FileButton>
        <br />

        <span className="text-gray-600">Link</span>
        <Link href="/docs" variant={"outline"}>
          -Documentation-
        </Link>
        <br />

        <span className="text-gray-600">Toggle</span>
        <Toggle variant={"outline"} radius={"full"} size={"lg"}>
          <IconStack size={18} />
        </Toggle>
        <br />

        <span className="text-gray-600">Toggle Group</span>
        <ToggleGroup
          type="single"
          size={"lg"}
          radius={"full"}
          variant={"outline"}
        >
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <IconBold size={18} stroke={1.5} />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <IconItalic size={18} stroke={1.5} />
          </ToggleGroupItem>
          <ToggleGroupItem
            value="strikethrough"
            aria-label="Toggle strikethrough"
          >
            <IconUnderline size={18} stroke={1.5} />
          </ToggleGroupItem>
        </ToggleGroup>
        <br />

        <hr
          className="text-blue-400"
          style={{ color: "blue", margin: "10px", width: "100%" }}
        />
        <Title
          order={"h3"}
          fontFamily={"sans"}
          align={"center"}
          gradient={"bl"}
          gradientColors="from-green-500 from-40% via-pink-500 via-30% to-yellow-500 to-70%"
          textWrap={"wrap"}
          className="mb-10"
        >
          -Data Display-
        </Title>

        <span className="text-gray-600">Accordian</span>
        <Accordion
          type="multiple"
          variant={"contained"}
          radius={"md"}
          chevronPosition={"left"}
          chevronsize={"sm"}
        >
          <AccordionItem value="item1">
            <AccordionTrigger>Item 1</AccordionTrigger>
            <AccordionContent onClick={() => alert("ok")}>
              Content for Item 1. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item2">
            <AccordionTrigger>Item 2</AccordionTrigger>
            <AccordionContent>
              Content for Item 2. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <br />

        <span className="text-gray-600">Avatar</span>
        <Avatar
          src={"https://tabler.io/packages/logo-vue.svg"}
          radius={"full"}
          size={"lg"}
          alt="Mohd aakib"
          color={"blue"}
        ></Avatar>
        <br />

        <span className="text-gray-600">Background Image</span>
        <BackgroundImage
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png"
          radius={"md"}
          fit={"cover"}
          width={800}
          height={400}
        >
          <p style={{ textAlign: "center" }} className="text-white mt-6">
            BackgroundImage component can be used to add any content on image.
            It is useful for hero headers and other similar sections
          </p>
        </BackgroundImage>
        <br />

        <span className="text-gray-600">Badge</span>
        <Card
          className="p-1"
          shadow={"xl"}
          radius={"md"}
          size={"xl"}
          withBorder={true}
        >
          <Badge variant={"notice"} size={"md"} radius={"xl"}>
            Badge
          </Badge>
        </Card>
        <br />

        <span className="text-gray-600">Card</span>
        <Card shadow={"xl"} size={"md"} radius={"md"} withBorder={true}>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
        <br />

        <span className="text-gray-600">Data Table</span>
        <DataTable
          data={dataa}
          filters={filters}
          columns={columns}
          searchable={searchable}
        />
        <br />

        <span className="text-gray-600">Image</span>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png"
          radius={"md"}
          fit={"contain"}
          width={200}
          height={200}
        />
        <br />

        <span className="text-gray-600">Table</span>
        <XbTable
          data={data}
          borderCollapse={"default"}
          withPagination
          itemsPerPage={10}
          size={"default"}
        />
        <br />

        <span className="text-gray-600">Tabs</span>
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList
            variant={"underline"}
            radius={"xl"}
            size={"xl"}
            className="grid w-full grid-cols-2"
          >
            <TabsTrigger variant={"underline"} value="account">
              Account
            </TabsTrigger>
            <TabsTrigger variant={"underline"} value="password">
              Password
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>
                  Make changes to your account here. Click save when you're
                  done.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="Pedro Duarte" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" defaultValue="@peduarte" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you'll be logged out.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Current password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">New password</Label>
                  <Input id="new" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
        <br />

        <hr
          className="text-blue-400"
          style={{ color: "blue", margin: "10px", width: "100%" }}
        />
        <Title
          order={"h3"}
          fontFamily={"sans"}
          align={"center"}
          gradient={"bl"}
          gradientColors="from-green-500 from-40% via-pink-500 via-30% to-yellow-500 to-70%"
          textWrap={"wrap"}
          className="mb-10"
        >
          -Typography-
        </Title>

        <span className="text-gray-600">BlockQuote</span>
        <BlockQuote
          cite="Nelson Mandela"
          icon={<IconAlertCircle />}
          textWrap={"wrap"}
          line={"xl"}
          align={"center"}
          size={"4xl"}
          fontFamily={"sans"}
        >
          The greatest glory in living lies not in never falling, but in rising
          every time we fall.
        </BlockQuote>
        <br />

        <span className="text-gray-600">Code</span>
        <Code>
          {`import { useState } from 'react';

            function SearchableVideoList({ videos }) {
              const [searchText, setSearchText] = useState('');
              const foundVideos = filterVideos(videos, searchText);
              return (
                <>
                  <SearchInput
                    value={searchText}
                    onChange={newText => setSearchText(newText)} />
                  <VideoList
                    videos={foundVideos}
                </>
              );
            }`}
        </Code>
        <br />

        <span className="text-gray-600">Label</span>
        <Label fontFamily={"sans"} fontSize={"6xl"} fontWidth={"bold"}>
          My Label
        </Label>
        <br />

        <span className="text-gray-600">List</span>
        <List type={"disc"} fontSize={"3xl"} position={"inside"}>
          <ListItem className="text-gray-500">Item 1</ListItem>
          <ListItem className="text-gray-500">Item 2</ListItem>
          <ListItem className="text-gray-500">Item 3</ListItem>
        </List>
        <br />

        <span className="text-gray-600">Text</span>
        <Text
          size="7xl"
          textWrap={"wrap"}
          line={"7xl"}
          fontFamily={"sans"}
          align={"right"}
          textTransform={"uppercase"}
          textOverflow={"truncate"}
          lineClamp={"clamp7"}
          fontWeight={"bold"}
          className="text-gray-800"
        >
          hello
        </Text>
        <br />

        <span className="text-gray-600">Title</span>
        <Title
          order={"h1"}
          fontFamily={"sans"}
          align={"right"}
          gradient={"bl"}
          gradientColors="from-pink-500 from-10% via-sky-500 via-30% to-red-500 to-90%"
          textWrap={"wrap"}
        >
          hello
        </Title>
        <br />

        <hr
          className="text-blue-400"
          style={{ color: "blue", margin: "10px", width: "100%" }}
        />
        <Title
          order={"h3"}
          fontFamily={"sans"}
          align={"center"}
          gradient={"bl"}
          gradientColors="from-green-500 from-40% via-pink-500 via-30% to-yellow-500 to-70%"
          textWrap={"wrap"}
          className="mb-10"
        >
          -Feedback-
        </Title>

        <span className="text-gray-600">Alert</span>
        <Alert
          className="mt-4 text-gray-500"
          id={"abc"}
          title="hello"
          message="hey aakib, are you there?"
          variant={"warning"}
        />
        <br />

        <span className="text-gray-600">Confirm Dialog</span>
        <br />

        <span className="text-gray-600">Dialog</span>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Dialog</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Share link</DialogTitle>
              <DialogDescription>
                Anyone who has this link will be able to view this.
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center space-x-2">
              <div className="grid flex-1 gap-2">
                <Label htmlFor="link" className="sr-only">
                  Link
                </Label>
                <Input
                  id="link"
                  defaultValue="https://ui.shadcn.com/docs/installation"
                  readOnly
                />
              </div>
              <Button size={"icon"}>
                <IconCopy size={18} />
              </Button>
            </div>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Close
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <br />

        <span className="text-gray-600">Progress</span>
        <Progress
          className="mt-4"
          value={20}
          variant={"default"}
          radius={"lg"}
          size={"sm"}
          striped={"default"}
          animated={"default"}
        />
        <br />

        <span className="text-gray-600">Skeleton</span>
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12" radius={"full"} animate={"default"} />
          <div className="space-y-2">
            <Skeleton
              className="h-4 w-[250px]"
              radius={"default"}
              animate={"pulse"}
            />
            <Skeleton
              className="h-4 w-[200px]"
              radius={"default"}
              animate={"pulse"}
            />
          </div>
        </div>
        <br />

        <span className="text-gray-600">Toast</span>
        <Button
          className="mt-4"
          variant={"default"}
          onClick={() => {
            toast({
              title: "Scheduled: Catch up ",
              description: "Friday, February 10, 2023 at 5:57 PM",
              action: (
                <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
              ),
              variant: "default",
            });
          }}
        >
          Toast
        </Button>
        <br />

        <hr
          className="text-blue-400"
          style={{ color: "blue", margin: "10px", width: "100%" }}
        />
        <Title
          order={"h3"}
          fontFamily={"sans"}
          align={"center"}
          gradient={"bl"}
          gradientColors="from-green-500 from-40% via-pink-500 via-30% to-yellow-500 to-70%"
          textWrap={"wrap"}
          className="mb-10"
        >
          -Inputs-
        </Title>

        <span className="text-gray-600">Checkbox</span>
        <Checkbox
          className="text-gray-600"
          id="terms"
          label={" Accept terms and conditions"}
          radius={"sm"}
          size="sm"
          variant={"filled"}
        />
        <br />

        <span className="text-gray-600">Color Input</span>
        <ColorInput
          label="Choose a color:"
          value={"#FF0000"}
          format="hex"
          variant={"outline"}
          radius={"md"}
          width={"xl"}
        />
        <br />

        <span className="text-gray-600">Color Swatch</span>
        <ColorSwatch color={"blue"} />
        <br />

        <span className="text-gray-600">File Input</span>
        <FileInput
          label="Fileinput label"
          description="Fileinput description"
          placeholder="select file.."
          variant={"filled"}
          labelPosition={"right"}
          width={"xl"}
          radius={"md"}
        />
        <br />

        <span className="text-gray-600">Input OTP</span>
        <InputOTP
          maxLength={6}
          onChange={(value) => console.log(value)}
          className="mt-0"
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <br />

        <span className="text-gray-600">Multi Select</span>
        <MultiSelect />
        <br />

        <span className="text-gray-600">Radio</span>
        <Card
          size={"lg"}
          radius={"md"}
          shadow={"md"}
          withBorder={true}
          className="w-1/6 h-[100px] center"
        >
          <RadioGroup variant={"filled"} size={"xl"} defaultValue="comfortable">
            <RadioGroupItem value="default" id="r1" label={"Default"} />
            <RadioGroupItem value="comfortable" id="r2" label={"Comfortable"} />
            <RadioGroupItem value="compact" id="r3" label={"Compact"} />
          </RadioGroup>
        </Card>
        <br />

        <span className="text-gray-600">Range Slider</span>
        <br />
        <br />

        <span className="text-gray-600">Select</span>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <br />

        <span className="text-gray-600">Spotlight</span>
        <br />
        <br />

        <span className="text-gray-600">Switch</span>
        <Switch label="this is switch" size={"md"} radius={"sm"} />
        <br />
        <br />

        <span className="text-gray-600">Tags</span>
        <TagsInput label="Tag Label" description="Tag Description" />
        <br />

        <span className="text-gray-600">Textarea</span>
        <Textarea
          className=""
          placeholder="textarea filed..."
          radius="md"
          label="Textarea label"
          description="Textarea description"
          size="xl"
        />
        <br />

        <span className="text-gray-600">TextInput</span>
        <Input />

        <Separator
          variant="solid"
          label="Label on the left"
          labelPosition="left"
          className="mt-4 text-gray-700"
        />
        <Separator
          className="mt-4"
          label="Label in the center"
          labelPosition="center"
        />
        <Separator
          className="mt-4"
          label="Label on the right"
          labelPosition="right"
        />
        <br />

        <Resizable
          panels={panelConfigs}
          className="max-w-md rounded-lg border"
        />

        <br />

        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                New Window <MenubarShortcut>⌘N</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled>New Incognito Window</MenubarItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Share</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Email link</MenubarItem>
                  <MenubarItem>Messages</MenubarItem>
                  <MenubarItem>Notes</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem>
                Print... <MenubarShortcut>⌘P</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Edit</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                Undo <MenubarShortcut>⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Find</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Search the web</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Find...</MenubarItem>
                  <MenubarItem>Find Next</MenubarItem>
                  <MenubarItem>Find Previous</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem>Cut</MenubarItem>
              <MenubarItem>Copy</MenubarItem>
              <MenubarItem>Paste</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>View</MenubarTrigger>
            <MenubarContent>
              <MenubarCheckboxItem>
                Always Show Bookmarks Bar
              </MenubarCheckboxItem>
              <MenubarCheckboxItem checked>
                Always Show Full URLs
              </MenubarCheckboxItem>
              <MenubarSeparator />
              <MenubarItem inset>
                Reload <MenubarShortcut>⌘R</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled inset>
                Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem inset>Toggle Fullscreen</MenubarItem>
              <MenubarSeparator />
              <MenubarItem inset>Hide Sidebar</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Profiles</MenubarTrigger>
            <MenubarContent>
              <MenubarRadioGroup value="benoit">
                <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
              </MenubarRadioGroup>
              <MenubarSeparator />
              <MenubarItem inset>Edit...</MenubarItem>
              <MenubarSeparator />
              <MenubarItem inset>Add Profile...</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
        <br />
        <br />

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Sheet</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value="Pedro Duarte"
                  className="col-span-3"
                  onChange={() => console.log("hello")}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input
                  id="username"
                  value="@peduarte"
                  className="col-span-3"
                  onChange={() => console.log("hello")}
                />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
        <br />
        <br />

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Tooltip</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <br />
        <br />

        <DropdownMenu>
          <DropdownMenuTrigger asChild className="pointer-events-auto">
            <Avatar radius="full">
              <IconUser />
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>
              <Stack>
                <Text size="sm" className="font-semibold">
                  xBesh
                </Text>
                <Text
                  size="xs"
                  fontFamily="sans"
                  className="text-gray-500 font-normal"
                >
                  madhav@xbesh.com
                </Text>
              </Stack>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Text className="text-sm">Profile</Text>
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Text className="text-sm">Billing</Text>
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Text className="text-sm">Settings</Text>
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Text className="text-sm">Keyboard shortcuts</Text>
                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Text className="text-sm text-red-600">Log out</Text>
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <br />
        <br />
        <ContextMenu>
          <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
            Right click here
          </ContextMenuTrigger>
          <ContextMenuContent className="w-64">
            <ContextMenuItem inset>
              Back
              <ContextMenuShortcut>⌘[</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem inset disabled>
              Forward
              <ContextMenuShortcut>⌘]</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem inset>
              Reload
              <ContextMenuShortcut>⌘R</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuSub>
              <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
              <ContextMenuSubContent className="w-48">
                <ContextMenuItem>
                  Save Page As...
                  <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                <ContextMenuItem>Name Window...</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>Developer Tools</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuSeparator />
            <ContextMenuCheckboxItem checked>
              Show Bookmarks Bar
              <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
            </ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
            <ContextMenuSeparator />
            <ContextMenuRadioGroup value="pedro">
              <ContextMenuLabel inset>People</ContextMenuLabel>
              <ContextMenuSeparator />
              <ContextMenuRadioItem value="pedro">
                Pedro Duarte
              </ContextMenuRadioItem>
              <ContextMenuRadioItem value="colm">
                Colm Tuite
              </ContextMenuRadioItem>
            </ContextMenuRadioGroup>
          </ContextMenuContent>
        </ContextMenu>
        <br />
        <br />

        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline">Open Drawer</Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Move Goal</DrawerTitle>
                <DrawerDescription>
                  Set your daily activity goal.
                </DrawerDescription>
              </DrawerHeader>
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
                  {/* <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <Bar
                    dataKey="goal"
                    style={
                      {
                        fill: "hsl(var(--foreground))",
                        opacity: 0.9,
                      } as React.CSSProperties
                    }
                  />
                </BarChart>
              </ResponsiveContainer> */}
                </div>
              </div>
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>

        <Input
          placeholder="input field..."
          radius="md"
          label="Input label"
          description="Input description"
          width="xl"
        />
        <br />
        <br />

        <br />

        <br />

        <br />
        <br />

        <br />

        <Slider />
        <br />
        <br />

        <p className="text-sm text-muted-foreground">
          Press{" "}
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>J
          </kbd>
        </p>
        <br />
        <br />

        <CommandDialog open={opened} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <IconCalendar className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <IconMoodHappy className="mr-2 h-4 w-4" />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem>
                <IconCalculator className="mr-2 h-4 w-4" />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <IconUser className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <IconCreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <IconSettings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
        <br />
        <br />

        <br />

        <br />

        <br />

        <ActionIcon size="xs" variant="ghost">
          <IconStack size={18} />
        </ActionIcon>
        <br />
        <br />

        <AspectRatio ratio={16 / 9} className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.3063874233135!2d-74.04668908358428!3d40.68924937933441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25090129c363d%3A0x40c6a5770d25022b!2sStatue%20of%20Liberty%20National%20Monument!5e0!3m2!1sen!2sru!4v1644262070010!5m2!1sen!2sru"
            title="Google map"
            style={{ border: 0 }}
          />
        </AspectRatio>
        <br />
        <br />

        <FlexBox direction="row" justify="center" align="center">
          <div className="bg-yellow-500 text-red p-5 w-full">1</div>
          <div className="bg-blue-500 text-red p-5  w-full">2</div>
          <div className="bg-blue-500 text-red p-5  w-full">3</div>
          <div className="bg-blue-500 text-red p-5  w-full">3</div>
          <div className="bg-blue-500 text-red p-5  w-full">3</div>
          <div className="bg-yellow-500 text-red p-5  w-full">1</div>
          <div className="bg-blue-500 text-red p-5  w-full">2</div>
          <div className="bg-blue-500 text-red p-5  w-full">3</div>
          <div className="bg-blue-500 text-red p-5  w-full">3</div>
          <div className="bg-blue-500 text-red p-5  w-full">3</div>
        </FlexBox>
        <br />
        <br />

        <div className="p-10">
          <SimpleGrid cols={3} spacing="lg" verticalSpacing="md">
            <div className="bg-blue-500 text-red p-5">1</div>
            <div className="bg-blue-500 text-red p-5">2</div>
            <div className="bg-blue-500 text-red p-5">3</div>
            <div className="bg-blue-500 text-red p-5">3</div>
            <div className="bg-blue-500 text-red p-5">3</div>
          </SimpleGrid>
        </div>
        <br />
        <br />

        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList variant={"underline"} className="grid w-full grid-cols-2">
            <TabsTrigger variant={"underline"} value="account">
              Account
            </TabsTrigger>
            <TabsTrigger variant={"underline"} value="password">
              Password
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>
                  Make changes to your account here. Click save when you're
                  done.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="Pedro Duarte" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" defaultValue="@peduarte" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you'll be logged out.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Current password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">New password</Label>
                  <Input id="new" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
        <br />
        <br />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
        <br />
        <br />

        <br />

        <Group>
          <div className="text-black">Group1</div>
          <div className="text-black">Group2</div>
          <div className="text-black">Group3</div>
        </Group>
        <br />
        <br />

        <Stack>
          <div className="text-black">Stack1</div>
          <div className="text-black">Stack1</div>
          <div className="text-black">Stack1</div>
        </Stack>
        <br />
        <br />

        <Grid className="bg-black">
          <GridCol span={3}>
            {" "}
            <div className="bg-blue-500 text-white p-5">1</div>
          </GridCol>
          <GridCol span={6}>
            {" "}
            <div className="bg-blue-500 text-white p-5">1</div>
          </GridCol>
          <GridCol span={3}>
            {" "}
            <div className="bg-blue-500 text-white p-5">1</div>
          </GridCol>
        </Grid>

        <br />
        <br />

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1">
                  <BreadcrumbEllipsis className="h-4 w-4" />
                  <span className="sr-only">Toggle menu</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem>Documentation</DropdownMenuItem>
                  <DropdownMenuItem>Themes</DropdownMenuItem>
                  <DropdownMenuItem>GitHub</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs/components">
                Components
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <br />
        <br />

        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border shadow"
        />

        <br />
        <br />
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <br />
        <br />
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="w-[350px] space-y-2"
        >
          <div className="flex items-center justify-between space-x-4">
            <Text size="base" className="">
              @peduarte starred 3 repositories
            </Text>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="text-secondary-foreground">
                <IconSelect className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <div className="rounded-md border border-input text-secondary-foreground px-4 py-2 font-mono text-sm shadow-sm">
            @xbeshui/core
          </div>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md border border-input text-secondary-foreground px-4 py-2 font-mono text-sm shadow-sm">
              @xbeshui/core
            </div>
            <div className="rounded-md border border-input text-secondary-foreground px-4 py-2 font-mono text-sm shadow-sm">
              @xbeshui/core
            </div>
          </CollapsibleContent>
        </Collapsible>
        <br />
        <br />

        <ScrollArea className="h-72 w-48 rounded-md border">
          <div className="p-4">
            <h4 className="mb-4 text-sm text-secondary-foreground font-medium leading-none">Tags</h4>
            {tags.map((tag) => (
              <>
                <div key={tag} className="text-sm text-secondary-foreground">
                  {tag}
                </div>
                <Separator className="my-2 border-input" />
              </>
            ))}
          </div>
        </ScrollArea>
        <br />
        <br />
        <Timeline>
          {items.map((item, index) => (
            <TimelineItem key={index}>
              <Avatar
                className="w-12 h-12 mb-3 me-3 rounded-full sm:mb-0"
                src={item.imageUrl}
                alt="Jese Leos image"
              />
              <div className="">
                <div className="text-base font-normal">
                  <span className="font-medium">{item.name}</span> likes{" "}
                  <span className="font-medium">Bonnie Greens</span> post in{" "}
                  <span className="font-medium">
                    {" "}
                    How to start with Flowbite library
                  </span>
                </div>
                <div className="text-sm font-normal">
                  I wanted to share a webinar zeroheight
                </div>
                <span className="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                  <svg
                    className="w-2.5 h-2.5 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19ZM8.374 17.4a7.6 7.6 0 0 1-5.9-7.4c0-.83.137-1.655.406-2.441l.239.019a3.887 3.887 0 0 1 2.082 2.5 4.1 4.1 0 0 0 2.441 2.8c1.148.522 1.389 2.007.732 4.522Zm3.6-8.829a.997.997 0 0 0-.027-.225 5.456 5.456 0 0 0-2.811-3.662c-.832-.527-1.347-.854-1.486-1.89a7.584 7.584 0 0 1 8.364 2.47c-1.387.208-2.14 2.237-2.14 3.307a1.187 1.187 0 0 1-1.9 0Zm1.626 8.053-.671-2.013a1.9 1.9 0 0 1 1.771-1.757l2.032.619a7.553 7.553 0 0 1-3.132 3.151Z" />
                  </svg>
                  Public
                </span>
              </div>
            </TimelineItem>
          ))}
        </Timeline>
        <br />
        <br />
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
              <NavigationMenuContent className="border-none">
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <IconStack className="h-6 w-6" />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          shadcn/ui
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Beautifully designed components built with Radix UI
                          and Tailwind CSS.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <NavListItem href="/docs" title="Introduction">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </NavListItem>
                  <NavListItem href="/docs/installation" title="Installation">
                    How to install dependencies and structure your app.
                  </NavListItem>
                  <NavListItem
                    href="/docs/primitives/typography"
                    title="Typography"
                  >
                    Styles for headings, paragraphs, lists...etc
                  </NavListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <NavListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </NavListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" variant="link">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Documentation
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <br />
        <br />
        <HoverCard
          className="flex flex-wrap"
          triggerContent={
            <button className="text-accent-foreground bg-background">
              hover card: hover me
            </button>
          }
          cardContent={
            <>
              {" "}
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
        <br />
        <br />
        <Popover
          trigger={
            <button className="text-accent-foreground bg-background">
              {" "}
              popover :Click me
            </button>
          }
          content={
            <>
              {" "}
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Dimensions</h4>
                  <p className="text-sm text-muted-foreground">
                    Set the dimensions for the layer.
                  </p>
                </div>
                <div className="grid gap-2">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label
                      htmlFor="width"
                      className="text-sm text-muted-foreground"
                    >
                      Width
                    </Label>
                    <Input
                      id="width"
                      defaultValue="100%"
                      className="col-span-2 h-8 text-muted-foreground"
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label
                      htmlFor="maxWidth"
                      className="text-sm text-muted-foreground"
                    >
                      Max. width
                    </Label>
                    <Input
                      id="maxWidth"
                      defaultValue="300px"
                      className="col-span-2 h-8 text-muted-foreground"
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label
                      htmlFor="height"
                      className="text-sm text-muted-foreground"
                    >
                      Height
                    </Label>
                    <Input
                      id="height"
                      defaultValue="25px"
                      className="col-span-2 h-8 text-muted-foreground"
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label
                      htmlFor="maxHeight"
                      className="text-sm text-muted-foreground"
                    >
                      Max. height
                    </Label>
                    <Input
                      id="maxHeight"
                      defaultValue="none"
                      className="col-span-2 h-8 text-muted-foreground"
                    />
                  </div>
                </div>
              </div>
            </>
          }
          align="center"
        />
        <br />
        <br />

        <XbeshThemeSwitch />
        <br />
        <br />
      </Container>
    </>
  );
}

export default App;
