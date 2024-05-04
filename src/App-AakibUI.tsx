import React from "react";

import {
  TextInput,
  Group,
  XbeshThemeSwitch,
  AppShell,
  Breadcrumb,
  DropdownMenu,
  Avatar,
  NavbarUI,
  Title,
  Separator,
} from "../packages/core/components";
import {
  IconBox,
  IconDeviceAnalytics,
  IconHome,
  IconSearch,
  IconSettings,
  IconShoppingCart,
  IconStack,
  IconUsers,
} from "@tabler/icons-react";
import {
  ActionsGrid,
  ArticleCardVertical,
  ArticlesCardsGrid,
  BadgeCard,
  CardGradient,
  CardWithStats,
  FeaturesAsymmetrical,
  FeaturesCard,
  ImageCard,
  TaskCard,
  UserButton,
  UserCardWithImage,
  UserInfoAction,
  UserInfoIcons,
} from "../packages/core/ui/index";

interface NavItemProps {
  link: string;
  title: string;
  icon: React.ReactNode;
}

const AppAakibUi = () => {
  const navItems: NavItemProps[] = [
    {
      link: "/dashboard",
      title: "Dashboard",
      icon: <IconHome stroke={1.8} size={21} />,
    },
    {
      link: "/orders",
      title: "Orders",
      icon: <IconShoppingCart stroke={1.8} size={21} />,
    },
    {
      link: "/products",
      title: "Products",
      icon: <IconBox stroke={1.8} size={21} />,
    },
    {
      link: "/customers",
      title: "Customers",
      icon: <IconUsers stroke={1.8} size={21} />,
    },
    {
      link: "/analytics",
      title: "Analytics",
      icon: <IconDeviceAnalytics stroke={1.8} size={21} />,
    },
  ];

  const HeaderUI = () => {
    return (
      <Group className={"w-full h-full px-10 py-4"} justify="spaceBetween">
        <Breadcrumb>
          <Breadcrumb.List>
            <Breadcrumb.Item>
              <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.Link href="/category">Category</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator />
            <Breadcrumb.Item>
              <Breadcrumb.Page>Current Page</Breadcrumb.Page>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        </Breadcrumb>

        <Group className="w-96">
          <XbeshThemeSwitch />
          <TextInput
            leftSection={<IconSearch size={16} stroke={0.5} />}
            placeholder="Type here to search"
            width="full"
          />

          <DropdownMenu>
            <DropdownMenu.Trigger>
              <Avatar size="sm" radius="default" alt="madhav dutta" />
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Label>My Account</DropdownMenu.Label>
              <DropdownMenu.Separator />
              <DropdownMenu.Item>Profile</DropdownMenu.Item>
              <DropdownMenu.Item>Billing</DropdownMenu.Item>
              <DropdownMenu.Item>Team</DropdownMenu.Item>
              <DropdownMenu.Item>Subscription</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu>
        </Group>
      </Group>
    );
  };
  const FooterUI = () => {
    return <div className={"h-full w-full p-4"}>footer</div>;
  };

  return (
    <>
      <AppShell
        Navbar={
          <NavbarUI
            navItem={navItems}
            headerItem={<IconStack stroke={1.5} size={28} />}
            footerItem={<IconSettings stroke={1.5} size={22} />}
          />
        }
        Header={<HeaderUI />}
        Footer={<FooterUI />}
        // Aside={<AsideUI />}
        layout="default"
        variant="default"
        withBorder={false}
        className="bg-muted/40"
        fixedHeader={false}
      >
        <br />
        <br />
        <Separator
          labelPosition="center"
          label={<Title order="h4">UserButton</Title>}
        />
        <br />
        <br />
        <Group justify="spaceAround">
          <UserButton />
        </Group>
        <br />
        <br />
        <Separator
          labelPosition="center"
          label={<Title order="h4">UserInfo</Title>}
        />

        <br />
        <br />
        <Group justify="spaceAround">
          <UserInfoIcons />
        </Group>
        <br />
        <br />
        <Separator
          labelPosition="center"
          label={<Title order="h4">UserActionInfo</Title>}
        />
        <br />
        <br />
        <Group justify="spaceAround">
          <UserInfoAction />
        </Group>
        <br />
        <br />
        <Separator
          labelPosition="center"
          label={<Title order="h4">UserCardWithImage</Title>}
        />
        <br />
        <br />
        <Group justify="spaceAround">
          <UserCardWithImage />
        </Group>
        <br />
        <br />
        <Separator
          labelPosition="center"
          label={<Title order="h4">ActionsGrid</Title>}
        />
        <br />
        <br />
        <Group justify="spaceAround">
          <ActionsGrid />
        </Group>
        <br />
        <br />
        <Separator
          labelPosition="center"
          label={<Title order="h4">BadgeCard</Title>}
        />
        <br />
        <br />
        <Group justify="spaceAround">
          <BadgeCard />
        </Group>
        <br />
        <br />
        <Separator
          labelPosition="center"
          label={<Title order="h4">CardWithStats</Title>}
        />
        <br />
        <br />
        <Group justify="spaceAround">
          <CardWithStats />
        </Group>
        <br />
        <br />
        <Separator
          labelPosition="center"
          label={<Title order="h4">FeaturesCard</Title>}
        />
        <br />
        <br />
        <Group justify="spaceAround">
          <FeaturesCard />
        </Group>
        <br />
        <br />
        <Separator
          labelPosition="center"
          label={<Title order="h4">TaskCard</Title>}
        />
        <br />
        <br />
        <Group justify="spaceAround">
          <TaskCard />
        </Group>
        <br />
        <br />
        <Separator
          labelPosition="center"
          label={<Title order="h4">ArticleCardVertical</Title>}
        />
        <br />
        <br />
        <Group justify="spaceAround">
          <ArticleCardVertical />
        </Group>
        <br />
        <br />
        <Separator
          labelPosition="center"
          label={<Title order="h4">ArticlesCardsGrid</Title>}
        />
        <br />
        <br />
        <Group justify="spaceAround">
          <ArticlesCardsGrid />
        </Group>
        <br />
        <br />
        <Separator
          labelPosition="center"
          label={<Title order="h4">CardGradient</Title>}
        />
        <br />
        <br />
        <Group justify="spaceAround">
          <CardGradient />
        </Group>
        <br />
        <br />
        <Separator
          labelPosition="center"
          label={<Title order="h4">ImageCard</Title>}
        />
        <br />
        <br />
        <Group justify="spaceAround">
          <ImageCard />
        </Group>
        <br />
        <br />
        <Separator
          labelPosition="center"
          label={<Title order="h4">FeaturesAsymmetrical</Title>}
        />
        <br />
        <br />
        <Group justify="spaceAround">
          <FeaturesAsymmetrical />
        </Group>
      </AppShell>
    </>
  );
};

export default AppAakibUi;
