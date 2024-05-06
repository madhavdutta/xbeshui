import { Card, Code, Group, Tabs, ToggleGroup } from "../../components";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../../components/Layout/resizable/resizable";
import App from "../../../../src/App";
import { useEffect, useState } from "react";
import {
  IconDeviceLaptop,
  IconDeviceTablet,
  IconPhone,
} from "@tabler/icons-react";

export const PreviewComp = () => {
  const [screenSize, setScreenSize] = useState(33);
  const [panelSize, setPanelSize] = useState(33);
  const [changedSize, setChangedSize] = useState(1);

  const handleScreenSize = (value: number) => {
    setScreenSize(value);
    setPanelSize(value);
    setChangedSize(100 - value);
    console.log(value);
  };

  useEffect(() => {
    // setPanelSize(screenSize);
    console.log("working..");
  }, [screenSize, panelSize]);

  return (
    <Card className="w-full">
      <ToggleGroup type="single" radius={"full"}>
        <ToggleGroup.Item
          onClick={() => {
            handleScreenSize(33);
          }}
          value="33"
          aria-label="Toggle phone"
        >
          <IconPhone
            size={18}
            stroke={1.5}
            className="text-secondary-foreground "
          />
        </ToggleGroup.Item>
        <ToggleGroup.Item
          onClick={() => {
            handleScreenSize(66);
          }}
          value="66"
          aria-label="Toggle tablet"
        >
          <IconDeviceTablet
            size={18}
            stroke={1.5}
            className="text-secondary-foreground"
          />
        </ToggleGroup.Item>
        <ToggleGroup.Item
          onClick={() => {
            handleScreenSize(99);
          }}
          value="99"
          aria-label="Toggle laptop"
        >
          <IconDeviceLaptop
            size={18}
            stroke={1.5}
            className="text-secondary-foreground"
          />
        </ToggleGroup.Item>
      </ToggleGroup>
      <Group>
        <Group justify="spaceBetween">
          <Tabs defaultValue="preview" className="w-full">
            <Tabs.TabsList
              variant="pill"
              className="grid grid-cols-2 h-[35px] w-[200px]"
            >
              <Tabs.TabsTrigger
                variant="pill"
                className=" h-[25px]"
                value="preview"
              >
                Preview
              </Tabs.TabsTrigger>
              <Tabs.TabsTrigger
                variant="pill"
                className=" h-[25px]"
                value="code"
              >
                Code
              </Tabs.TabsTrigger>
            </Tabs.TabsList>
            <Tabs.TabsContent
              className="mt-4 w-full rounded-sm bg-accent "
              value="preview"
            >
              <ResizablePanelGroup
                direction="horizontal"
                className="border rounded-sm"
              >
                <div style={{ flex: `${panelSize} 1 0px`, overflow: "hidden" }}>
                  <ResizablePanel defaultSize={panelSize} minSize={30}>
                    <iframe
                      src="http://localhost:5173"
                      className="w-full h-full"
                    />
                  </ResizablePanel>
                </div>
                <ResizableHandle withHandle />
                <div
                  style={{ flex: `${changedSize} 1 0px`, overflow: "hidden" }}
                >
                  <ResizablePanel defaultSize={100 - panelSize}>
                    <div className="flex h-full items-center justify-center p-6">
                      <span className="font-semibold"></span>
                    </div>
                  </ResizablePanel>
                </div>
              </ResizablePanelGroup>
            </Tabs.TabsContent>
            <Tabs.TabsContent
              value="code"
              className="w-full mt-4 border rounded-sm"
            >
              <Code className="bg-black  rounded-sm text-white">
                {`import { useState } from 'react';
import { UnstyledButton, Tooltip, Title, rem } from '@mantine/core';
import {
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
} from '@tabler/icons-react';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './DoubleNavbar.module.css';

const mainLinksMockdata = [
  { icon: IconHome2, label: 'Home' },
  { icon: IconGauge, label: 'Dashboard' },
  { icon: IconDeviceDesktopAnalytics, label: 'Analytics' },
  { icon: IconCalendarStats, label: 'Releases' },
  { icon: IconUser, label: 'Account' },
  { icon: IconFingerprint, label: 'Security' },
  { icon: IconSettings, label: 'Settings' },
];

const linksMockdata = [
  'Security',
  'Settings',
  'Dashboard',
  'Releases',
  'Account',
  'Orders',
  'Clients',
  'Databases',
  'Pull Requests',
  'Open Issues',
  'Wiki pages',
];

export function DoubleNavbar() {
  const [active, setActive] = useState('Releases');
  const [activeLink, setActiveLink] = useState('Settings');

  const mainLinks = mainLinksMockdata.map((link) => (
    <Tooltip
      label={link.label}
      position="right"
      withArrow
      transitionProps={{ duration: 0 }}
      key={link.label}
    >
      <UnstyledButton
        onClick={() => setActive(link.label)}
        className={classes.mainLink}
        data-active={link.label === active || undefined}
      >
        <link.icon style={{ width: rem(22), height: rem(22) }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  ));

  const links = linksMockdata.map((link) => (
    <a
      className={classes.link}
      data-active={activeLink === link || undefined}
      href="#"
      onClick={(event) => {
        event.preventDefault();
        setActiveLink(link);
      }}
      key={link}
    >
      {link}
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.wrapper}>
        <div className={classes.aside}>
          <div className={classes.logo}>
            <MantineLogo type="mark" size={30} />
          </div>
          {mainLinks}
        </div>
        <div className={classes.main}>
          <Title order={4} className={classes.title}>
            {active}
          </Title>

          {links}
        </div>
      </div>
    </nav>
  );
}`}
              </Code>
            </Tabs.TabsContent>
          </Tabs>
        </Group>
      </Group>
    </Card>
  );
};
