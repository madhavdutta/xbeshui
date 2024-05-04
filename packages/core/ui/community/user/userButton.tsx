
import { Avatar, Group, Stack, Text } from "../../../components";
import { IconChevronRight } from "@tabler/icons-react";
import { Link } from "../../../components/Buttons/link/link";

export const UserButton = () => {
  return (
    <>
      <Link variant={"ghost"}>
        <Group justify='spaceBetween' className="p-2">
        <Group>
          <Avatar
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
            size="md"
            radius="full"
          />
          <Stack gap={'none'}>
            <Text size="sm" className="font-medium">
              {" "}
              Harriette Spoonlicker
            </Text>
            <Text size="xs" className="text-zinc-400">
              {" "}
              hspoonlicker@outlook.com
            </Text>
          </Stack>
        </Group>
        <IconChevronRight size={16} color="gray"/>
        </Group>
      </Link>
    </>
  );
};
