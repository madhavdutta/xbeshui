"use client";
// import { useState } from 'react'
import "./App.css";
// import { Button } from '../packages/core/components/Buttons/button/button';
// import { Stack } from "../packages/core/components/Layout/stack/stack";
// import { Group } from '../packages/core/components/Layout/group/group';
// import { Toggle } from '../packages/core/components/Buttons/toggle/toggle';
// import { Text } from "../packages/core/components/Typography/text/text";
// import { IconBold, IconItalic, IconStack, IconUnderline } from "@tabler/icons-react";
// import { ToggleGroup, ToggleGroupItem } from '../packages/core/components/Buttons/toggle/toggleGroup';

// import { FileButton } from '../packages/core/components/Buttons/fileButton/fileButton';
// import { CopyButton } from '../packages/core/components/Buttons/copyButton/copyButton';
import { Avatar } from "../packages/core/components/DataDisplay/avatar/avatar";
// import { BackgroundImage } from "../packages/core/components/DataDisplay/backgroundImage/backgroundimage";
// import { Image } from "../packages/core/components/DataDisplay/image/image";
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
  // CardHeader,
  // CardFooter,
  // CardTitle,
  // CardDescription,
  // CardContent,
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
// import { IconCopy } from "@tabler/icons-react";
// import { Button } from '../packages/core/components';

function App() {
  const { toast } = useToast();
  const [goal, setGoal] = React.useState(350);
  const [opened, setOpen] = React.useState(false);

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

  return (
    <>
      {/* <Group><Text>xs :</Text> <Button radius='md' size={'xs'} variant={"default"}>clickme</Button></Group>
      <Group><Text>sm :</Text> <Button radius='md' size={'sm'} variant={"ghost"}>clickme</Button></Group>
      <Group><Text>md/default :</Text> <Button radius='md' size={'md'} variant={"destructive"}>clickme</Button></Group>
      <Group><Text>lg :</Text> <Button radius='md' size={'lg'} variant={"secondary"}>clickme</Button></Group>
      <Group><Text>lg :</Text> <Button radius='md' size={'icon'} variant={"outline"}><IconStack stroke={1.5} /></Button></Group>
      <Group><Text>compact-xm :</Text> <Button radius='md' size={'compact-xs'} variant={"default"}>clickme</Button></Group>
      <Group><Text>compact-sm :</Text> <Button radius='md' size={'compact-sm'} variant={"default"}>clickme</Button></Group>
      <Group><Text>comapact-md :</Text> <Button radius='md' size={'compact-md'} variant={"default"}>clickme</Button></Group>
      <Group><Text>compact-lg :</Text> <Button radius='md' size={'compact-lg'} variant={"default"}>clickme</Button></Group>
      <Group><Text>Toggle :</Text> <Toggle variant={"outline"} size={"xs"} ><IconStack size={16} /></Toggle></Group> */}

      {/* <Group><Text>Toggle : xs</Text> <Toggle variant={"outline"} size={"xs"} ><IconStack size={14} /></Toggle></Group>
        <Group><Text>Toggle : sm</Text> <Toggle variant={"outline"} size={"sm"} ><IconStack size={18} /></Toggle></Group>
        <Group><Text>Toggle : md /default</Text> <Toggle variant={"outline"} size={"md"} ><IconStack size={20} /></Toggle></Group>

        <Group><Text>Toggle : lg</Text> <Toggle variant={"outline"} size={"lg"} ><IconStack size={25} /></Toggle></Group> */}
      {/* <Group><Text>Toggle group </Text>

          <ToggleGroup type='single' size={"xs"} radius={"sm"} variant={"notice"}>
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <IconBold size={18} stroke={1.5} />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <IconItalic size={18} stroke={1.5} />
            </ToggleGroupItem>
            <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
              <IconUnderline size={18} stroke={1.5} />
            </ToggleGroupItem>
          </ToggleGroup>

        </Group> */}
      {/* <FileButton onFileSelect={(value) => console.log(value)} variant={"default"} size={"lg"} radius={"md"} allowedFileTypes={["image/svg+xml"]}>Upload Image</FileButton>

         <CopyButton value={"Here we go"} size="lg" radius={"md"} icon={<IconCopy size={18}/>}>Copy to clipboard</CopyButton>*/}

      {/* <Avatar
        // src={"https://tabler.io/packages/logo-vue.svg"}
        // fallback="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png"
        radius="md"
        size="md"
        alt="Mohd aakib"
        color="blue"
      ></Avatar> */}
      {/* 
      <BackgroundImage
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png"
        radius="xl"
        fit="cover"
        width={800}
        height={400}
      >
        <div>
          <Text style={{ textAlign: "center" }} className="text-white mt-6">
            BackgroundImage component can be used to add any content on image.
            It is useful for hero headers and other similar sections
          </Text>
        </div>
      </BackgroundImage>

      <Image
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png"
        radius="xl"
        fit="cover"
        width={200}
        height={200}
      />
      */}

      {/* <XbTable
        data={data}
        borderCollapse="collapse"
        withPagination
        itemsPerPage={10}
      /> */}

      {/* <Card className="p-1" shadow="md">
        <Badge variant={"default"} size={"md"} radius={"xl"}>
          badge
        </Badge>
      </Card> */}

      {/* <Accordion
        type="multiple"
        variant="default"
        radius="lg"
        chevronsize="xxl"
        chevronPosition="right"
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
      </Accordion> */}

      {/* <BlockQuote cite="Nelson Mandela" icon={<IconAlertCircle />}>
        The greatest glory in living lies not in never falling, but in rising
        every time we fall.
      </BlockQuote> */}

      {/* <Code>
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
}`}{" "}
      </Code> */}

      <Label fontFamily={"mono"} fontSize={"6xl"}>
        abdcjhdbcdkjcbd
      </Label>

      <List type="disc" fontSize="xs" position="inside">
        <ListItem className="text-red-500">Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
      </List>

      <Text size="7xl">hello</Text>
      <Title order="h4"> hello</Title>

      <FlexBox direction="row" justify="center" align="center">
        <div className="bg-blue-500 text-white p-5">1</div>
        <div className="bg-blue-500 text-white p-5">2</div>
        <div className="bg-blue-500 text-white p-5">3</div>
        <div className="bg-blue-500 text-white p-5">3</div>
        <div className="bg-blue-500 text-white p-5">3</div>
      </FlexBox>

      <div className="p-10">
        <SimpleGrid cols={3} spacing="lg" verticalSpacing="md">
          <div className="bg-blue-500 text-white p-5">1</div>
          <div className="bg-blue-500 text-white p-5">2</div>
          <div className="bg-blue-500 text-white p-5">3</div>
          <div className="bg-blue-500 text-white p-5">3</div>
          <div className="bg-blue-500 text-white p-5">3</div>
        </SimpleGrid>
      </div>

      <Separator
        variant="solid"
        label="Label on the left"
        labelPosition="left"
        className="mt-4"
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
      <Alert
        className="mt-4"
        id={"abc"}
        title="hello"
        message="hey aakib, are you there?"
      />
      <Progress className="mt-4" value={20} />

      <Skeleton className="mt-4  h-20" radius={"xl"} animate={"pulse"} />
      <Button
        className="mt-4"
        variant="outline"
        onClick={() => {
          toast({
            title: "Scheduled: Catch up ",
            description: "Friday, February 10, 2023 at 5:57 PM",
            action: (
              <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            ),
            variant: "outline",
          });
        }}
      >
        toast
      </Button>

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
            <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
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

      <DropdownMenu>
        <DropdownMenuTrigger asChild className="pointer-events-auto">
          <Avatar icon={<IconUser />} radius="full" />
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
            <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuContent>
      </ContextMenu>

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
        size="xl"
      />
      <Textarea
        className=""
        placeholder="textarea filed..."
        radius="md"
        label="Textarea label"
        description="Textarea description"
        size="xl"
      />
      <TagsInput label="tag label" description="tag description" size="sm" />

      <Switch label="this is switch" size="lg" radius="lg" />

      <FileInput
        size={"xl"}
        label="Fileinput label"
        description="Fileinput description"
        placeholder="select file.."
        radius="md"
      />

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

      <Slider />
      <p className="text-sm text-muted-foreground">
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>J
        </kbd>
      </p>
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

      <MultiSelect />


      <Checkbox id="terms" label={' Accept terms and conditions'}  radius="md" size="xs"/>

    </>
  );
}

export default App;
