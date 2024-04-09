"use client";
import React from "react";
// import { useState } from 'react'
import "./index.css";
import {Tabs, TabsList, TabsTrigger, TabsContent, Button, Input, ActionIcon, Card, XbeshThemeSwitch, Container} from '../packages/core/components/index'
import { IconStack } from "@tabler/icons-react";

function App() {
  return (
    <Container fluid={false} justify="start" items="center">
    <Button  >Click me</Button>
    <br /><br />
    <ActionIcon> <IconStack /></ActionIcon>

    <br /><br />
    <Card withBorder={false} shadow={"default"} size={"sm"} radius={"md"}>
    sdfs
    </Card>
    <Tabs defaultValue="1">
      <TabsList>
        <TabsTrigger value="1">Tab 1</TabsTrigger>
        <TabsTrigger value="2">Tab 2</TabsTrigger>
        <TabsTrigger value="3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="1">Content 1</TabsContent>
      <TabsContent value="2">Content 2</TabsContent>
      <TabsContent value="3">Content 3</TabsContent>
    </Tabs>

    <XbeshThemeSwitch />
    </Container>
  );
}

export default App;
