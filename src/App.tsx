import { useState } from 'react'
import './App.css'
import { Button } from '../packages/core/components/Buttons/button/button';
import { Stack } from '../packages/core/components/Layout/stack/stack';
import { Group } from '../packages/core/components/Layout/group/group';
import { Toggle } from '../packages/core/components/Buttons/toggle/toggle';
import { Text } from '../packages/core/components/Typography/text/text';
import {IconStack} from "@tabler/icons-react";
import React from 'react';

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Stack gap='sm'>
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

       <Group><Text>Toggle : xs</Text> <Toggle variant={"outline"} size={"xs"} ><IconStack size={14} /></Toggle></Group>
      <Group><Text>Toggle : sm</Text> <Toggle variant={"outline"} size={"sm"} ><IconStack size={18} /></Toggle></Group>
      <Group><Text>Toggle : md /default</Text> <Toggle variant={"outline"} size={"md"} ><IconStack size={20} /></Toggle></Group>
      
      <Group><Text>Toggle : lg</Text> <Toggle variant={"outline"} size={"lg"} ><IconStack size={25} /></Toggle></Group>
      

      </Stack>
      </>
  )
}

export default App
