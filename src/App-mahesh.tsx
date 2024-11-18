import React, { useState } from "react";
import {
  Timeline,
  Container,
  TimelineItem,
  Avatar,
  XbeshThemeSwitch,
  ColorInput,
  CopyButton,
  Group,
  Checkbox,
  Label,
  Text,
  DataTable,
  Card,
  MultiSelect,
  Accordion,
  Toggle,
  TextInput,
  RadioGroup,
  Tabs,
  Button,
  Switch,
} from "../packages";
import { selectListDataset } from "../packages/core/components/Inputs/multiSelect/config";
import { DynamicSelectOption } from "../packages/core/components/Inputs/multiSelect/type";
import { IconStack } from "@tabler/icons-react";

const AppMaheshUi = () => {
  const [selectListData] = useState<DynamicSelectOption[]>(selectListDataset);
  const handleChange = (selected: Array<{ value: string; label: string }>) => {
    console.log("Selected Option:", selected);
  };
  const data = [
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
  ];

  const columns = [
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

  const items = [
    {
      imageUrl: "https://avatars.githubusercontent.com/u/5016004",
      name: "Madhav D",
      action: "likes Bonnie Greens post",
      description: "I wanted to share a webinar zeroheight",
      privacy: "Public",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/108726788",
      name: "Milan Thakur",
      action: "likes Madhav Greens post",
      description: "I wanted to share a webinar zeroheight",
      privacy: "Public",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/72692494",
      name: "Mohd. Aakib",
      action: "likes Bonnie Greens post",
      description: "I wanted to share a webinar zeroheight",
      privacy: "Public",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/145119425",
      name: "Mahesh Sharma",
      action: "likes Bonnie Greens post",
      description: "I wanted to share a webinar zeroheight",
      privacy: "Public",
    },
  ];
  // const data = [
  //   { label: "Default", value: "Default", id: "r1" },
  //   { label: "Comfortable", value: "comfortable", id: "r2" },
  //   { label: "Compact", value: "compact", id: "r3" },
  // ];
  return (
    <Container className="flex flex-col gap-8 p-4 mx-auto">
      <XbeshThemeSwitch />
      {/* <Timeline>
        {items.map((item, index) => (
          <TimelineItem key={index}>
            <div>
              <Avatar
                className="w-10 h-10 mb-3 me-3 rounded-full sm:mb-0"
                src={item.imageUrl}
                alt="Jese Leos image"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-sm font-bold">
                <span>{item.name}</span> likes <span>Bonnie Greens</span> post
                in <span> How to start with Flowbite library</span>
              </div>
              <div className="text-xs font-normal">
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
      </Timeline> */}

      {/* <ColorInput
        label="Choose a color:"
        value={"#FF0000"}
        format="hex"
        variant={"filled"}
        radius={"sm"}
        width={"xl"}
        className="relative"
      /> */}

      {/* <CopyButton buttonMessage={true} value={"Here we go"} size="lg" radius={"sm"}>Copy to clipboard</CopyButton>
      <CopyButton buttonMessage={false} value={"Here we go"} size="lg" radius={"sm"}>Copy to clipboard</CopyButton>
      <CopyButton value={"Here we go"} size="lg" radius={"sm"}>Copy to clipboard</CopyButton> */}

      <DataTable data={data} filters={filters} columns={columns} searchable={searchable} />
      {/* <MultiSelect
        options={selectListData}
        placeholder="Select Audience Lists.."
        onChange={handleChange}
        maxSelected={9}
        searchable={true}
        clearable={true}
        className="w-64"
      /> */}
      {/* <Checkbox
          className="text-gray-600"
          radius={"sm"}
          size={"sm"}
          variant={"default"}
          label={"Accept terms and conditions"}
        /> */}
      {/* <Card className="w-full p-0 rounded-none gap-6">
      <Accordion
        type="multiple"
        variant="default"
        radius="lg"
        chevronPosition="right"
      >
        <Accordion.Item value="item1">
          <Accordion.Trigger>Item 1</Accordion.Trigger>
          <Accordion.Content>
            <Text size="xs">Content for Item 1. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.</Text>

          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item2">
          <Accordion.Trigger>Item 2</Accordion.Trigger>
          <Accordion.Content>
          <Text size="xs">Content for Item 2. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.</Text>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
      </Card> */}
      {/* <TextInput
        variant={"outline"}
        placeholder="input field..."
        radius={"sm"}
        label="Input label"
        description="Input description"
      /> */}
      {/* <Card className="w-full">
        <RadioGroup variant="default" labelSize="lg" defaultValue="comfortable" radioOptions={data} />
      </Card> */}

      {/* <Tabs defaultValue="account" className="w-[400px]">
        <Tabs.TabsList
          variant={"underline"}
          className="grid w-full grid-cols-2"
        >
          <Tabs.TabsTrigger variant={"underline"} value="account">
            Account
          </Tabs.TabsTrigger>
          <Tabs.TabsTrigger variant={"underline"} value="password">
            Password
          </Tabs.TabsTrigger>
        </Tabs.TabsList>
        <Tabs.TabsContent value="account">
          <Card className="p-4">
            <Card.Header>
              <Card.Title>Account</Card.Title>
              <Card.Description>
                Make changes to your account here. Click save when you're done.
              </Card.Description>
            </Card.Header>
            <Card.Content className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <TextInput id="name" defaultValue="Pedro Duarte" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <TextInput id="username" defaultValue="@peduarte" />
              </div>
            </Card.Content>
            <Card.Footer>
              <Button>Save changes</Button>
            </Card.Footer>
          </Card>
        </Tabs.TabsContent>
        <Tabs.TabsContent value="password">
          <Card className="p-4">
            <Card.Header>
              <Card.Title>Password</Card.Title>
              <Card.Description>
                Change your password here. After saving, you'll be logged out.
              </Card.Description>
            </Card.Header>
            <Card.Content className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <TextInput id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <TextInput id="new" type="password" />
              </div>
            </Card.Content>
            <Card.Footer>
              <Button>Save password</Button>
            </Card.Footer>
          </Card>
        </Tabs.TabsContent>
      </Tabs> */}

      {/* <Group justify="center">
        <Switch id="SwitchMode" size={"lg"} radius="full" thumbSize="md" />
        <Label htmlFor="SwitchMode">Airplane Mode</Label>
      </Group> */}
    </Container>
  );
};

export default AppMaheshUi;
