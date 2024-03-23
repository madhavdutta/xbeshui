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
// import { Avatar } from "../packages/core/components/DataDisplay/avatar/avatar";
// import { BackgroundImage } from "../packages/core/components/DataDisplay/backgroundImage/backgroundimage";
// import { Image } from "../packages/core/components/DataDisplay/image/image";
import { Badge } from "../packages/core/components/DataDisplay/badge/badge";
import { XbTable } from "../packages/core/components/DataDisplay/table/table";
import { BlockQuote } from "../packages/core/components/Typography/blockquote/blockquote";
import { Code } from "../packages/core/components/Typography/code/code";
import {Label} from "../packages/core/components/Typography/label/label";
import {List,ListItem} from "../packages/core/components/Typography/list/list";
import {Text} from "../packages/core/components/Typography/text/text";
import {Title} from "../packages/core/components/Typography/title/title";
import {FlexBox} from "../packages/core/components/Layout/flexBox/flexBox";
import {SimpleGrid} from "../packages/core/components/Layout/simpleGrid/simpleGrid";
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
import { IconAlertCircle } from "@tabler/icons-react";
// import { IconCopy } from "@tabler/icons-react";
// import { Button } from '../packages/core/components';

function App() {
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

        <CopyButton value={"Here we go"} size="lg" radius={"md"}>Copy to clipboard</CopyButton> */}

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

      <XbTable
        data={data}
        borderCollapse="collapse"
        withPagination
        itemsPerPage={10}
      />

      <Card className="p-1" shadow="md">
        <Badge variant={"default"} size={"md"} radius={"xl"}>
          badge
        </Badge>
      </Card>

      <Accordion
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
      </Accordion>

      <BlockQuote cite="Nelson Mandela" icon={<IconAlertCircle />}>
        The greatest glory in living lies not in never falling, but in rising
        every time we fall.
      </BlockQuote>

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
}`}{" "}
      </Code>

      <Label fontFamily={'mono'} fontSize={'6xl'}>abdcjhdbcdkjcbd</Label>

      <List type='disc' fontSize='xs' position='inside'>
      <ListItem className="text-red-500">Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
    </List>

    <Text  size='7xl'>hello</Text>
    <Title order='h4' > hello</Title>

    <FlexBox direction='row' justify='center' align='center' >
          <div className="w-50 bg-red-500 p-20 mx-2">Item 1</div>
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
    </>

  );
}

export default App;
