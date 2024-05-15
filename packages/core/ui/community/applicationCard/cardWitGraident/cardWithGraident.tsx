import { Card, Text, ActionIcon } from "../../../../components";
import { IconColorSwatch } from "@tabler/icons-react";
import "./cardWithGradient.css";

export function CardGradient() {
  return (
    <Card withBorder radius="md" className="cardgrad w-[500px]">
      <ActionIcon
        size="lg"
        radius="md"
        className="bg-gradient-to-r from-pink-500 to-orange-500"
      >
        <IconColorSwatch style={{ width: 28, height: 28 }} stroke={1.5} />
      </ActionIcon>
      <Text size="xl" fontWeight="medium" className="mt-2">
        Theming documentation
      </Text>
      <Text size="sm" className="text-zinc-400 mt-1">
        Extend default theme with any amount of additional colors, replace
        shadows, radius, spacing, fonts and many other properties to match your
        design requirements. Mantine theme is just an object, you can subscribe
        to it in any part of application via context and use it to build your
        own components.
      </Text>
    </Card>
  );
}
