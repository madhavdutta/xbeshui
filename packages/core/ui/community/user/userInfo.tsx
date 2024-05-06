import { IconPhoneCall, IconAt } from "@tabler/icons-react";
import { Image, Group, Text } from "../../../components";

export function UserInfoIcons() {
  return (
    <div>
      <Group wrap="nowrap">
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
          width={94}
          radius="md"
          alt="Robert Glassbreaker"
        />
        <div>
          <Text size="xs" className="font-bold text-zinc-400">
            Software engineer
          </Text>

          <Text size="lg" className="font-medium">
            Robert Glassbreaker
          </Text>

          <Group wrap="nowrap" gap={"xs"} className="mt-1">
            <IconAt stroke={1.5} size="1rem" />
            <Text size="xs" className="text-zinc-400">
              robert@glassbreaker.io
            </Text>
          </Group>

          <Group wrap="nowrap" gap={"xs"} className="mt-2">
            <IconPhoneCall stroke={1.5} size="1rem" />
            <Text size="xs" className="text-zinc-400">
              +11 (876) 890 56 23
            </Text>
          </Group>
        </div>
      </Group>
    </div>
  );
}
