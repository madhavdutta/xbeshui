import {
  Card,
  Avatar,
  Text,
  Progress,
  Badge,
  Group,
  ActionIcon,
} from "../../../../components";
import { IconUpload } from "@tabler/icons-react";

const avatars = [
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",
];

export function TaskCard() {
  return (
    <Card withBorder padding="lg" className="w-[500px]" radius="md">
      <Group justify="spaceBetween">
        <Avatar
          src="https://randomuser.me/api/portraits/men/1.jpg"
          size="md"
          radius="full"
        />
        <Badge>12 days left</Badge>
      </Group>

      <Text size="lg" fontWeight="medium" className="mt-2">
        5.3 minor release (September 2022)
      </Text>
      <Text size="sm" className="text-zinc-400 mt-[5px]">
        Form context management, Switch, Grid and Indicator components
        improvements, new hook and 10+ other changes
      </Text>

      <Text className="text-zinc-400 mt-4" size="sm">
        Tasks completed: <Text fontWeight="medium">23/36</Text>
      </Text>

      <Progress
        value={(23 / 36) * 100}
        bgColor="bg-black"
        radius="md"
        className="mt-2"
      />

      <Group justify="spaceBetween" className="mt-2">
        <Group gap={"none"}>
          <Avatar src={avatars[0]} radius="xl" className="-ml-[2px]" />
          <Avatar src={avatars[1]} radius="xl" className="-ml-[2px]" />
          <Avatar src={avatars[2]} radius="xl" className="-ml-[2px]" />
          <Avatar radius="xl" className="-ml-[2px]">
            +5
          </Avatar>
        </Group>
        <ActionIcon variant="outline" size="md" radius="md">
          <IconUpload size={18} />
        </ActionIcon>
      </Group>
    </Card>
  );
}
