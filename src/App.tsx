// import { useState } from 'react'
import "./App.css";
import { Button } from '../packages/core/components/Buttons/button/button';
// import { Stack } from "../packages/core/components/Layout/stack/stack";
// import { Group } from '../packages/core/components/Layout/group/group';
// import { Toggle } from '../packages/core/components/Buttons/toggle/toggle';
// import { Text } from '../packages/core/components/Typography/text/text';
// import { IconBold, IconItalic, IconStack, IconUnderline } from "@tabler/icons-react";
// import { ToggleGroup, ToggleGroupItem } from '../packages/core/components/Buttons/toggle/toggleGroup';

// import { FileButton } from '../packages/core/components/Buttons/fileButton/fileButton';
// import { CopyButton } from '../packages/core/components/Buttons/copyButton/copyButton'; 

import {Avatar} from "../packages/core/components/DataDisplay/avatar/avatar"; 
import {Alert} from "../packages/core/components/Feedback/alert/alert";
import {v4} from "uuid";

import React from "react";
import { IconBodyScan, IconBolt, IconRocket, IconStack } from "@tabler/icons-react";
// import { IconCopy } from '@tabler/icons-react';
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
         {/* <FileButton onFileSelect={(value) => console.log(value)} variant={"default"} size={"lg"} radius={"md"} allowedFileTypes={["image/svg+xml"]}>Upload Image</FileButton> */}

        {/* <CopyButton value={"Here we go"} size="lg" radius={"md"}>Copy to clipboard</CopyButton> */}
       <Alert variant="default" title="Hello World" message="Here we go now" id={v4()} icon={<IconStack size={20} />} />
          <br />
      {/* <Button variant="outline" size="icon" radius="md" ><IconBolt /></Button> */}
      
    </>
  );
}

export default App;
