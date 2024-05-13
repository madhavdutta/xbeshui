import { IconHeart } from "@tabler/icons-react";

import "./badgesCard.css";
import {
  ActionIcon,
  Badge,
  Button,
  Card,
  Group,
  Image,
  Text,
} from "../../../../components";

const mockdata = {
  image:
    "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
  title: "Verudela Beach",
  country: "Croatia",
  description:
    "Completely renovated for the season 2020, Arena Verudela Bech Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.",
  badges: [
    { emoji: "☀️", label: "Sunny weather" },
    { emoji: "🦓", label: "Onsite zoo" },
    { emoji: "🌊", label: "Sea" },
    { emoji: "🌲", label: "Nature" },
    { emoji: "🤽", label: "Water sports" },
  ],
};

export function BadgeCard() {
  const { image, title, description, country, badges } = mockdata;
  const features = badges.map((badge) => (
    <Badge
      variant="secondary"
      key={badge.label}
      leftSection={badge.emoji}
      radius="lg"
      size="compact-md"
    >
      {badge.label}
    </Badge>
  ));

  return (
    <Card withBorder radius="md" className="card p-0">
      <Card.Header>
        <Image src={image} alt={title} className="rounded-t-md" height={180} />
      </Card.Header>

      <Card.Content className="section mt-2 p-2">
        <Group>
          <Text size="lg" fontWeight="medium">
            {title}
          </Text>
          <Badge size="compact-md" radius="lg" variant="secondary">
            {country}
          </Badge>
        </Group>
        <Text size="sm" className="mt-2">
          {description}
        </Text>
      </Card.Content>
      <Card.Content className="section p-2">
        <Text className="label mt-2 text-zinc-400 font-medium">
          Perfect for you, if you enjoy
        </Text>
        <Group gap={"xs"} className="mt-2 flex-wrap">
          {features}
        </Group>
      </Card.Content>
      <Group className="mt-1 p-2">
        <Button radius="md" variant={"outline"} style={{ flex: 1 }}>
          Show details
        </Button>
        <ActionIcon variant="outline" radius="md" size={"md"}>
          <IconHeart className="like" stroke={1.5} />
        </ActionIcon>
      </Group>
    </Card>
  );
}
