import { Card, Image, Avatar, Text, Group } from "../../../../components";
import "./articleCardVertical.css";

export function ArticleCardVertical() {
  return (
    <Card withBorder radius="md" className="card p-0 w-[600px]">
      <Group wrap="nowrap" gap={"none"}>
        <Image
          src="https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
          height={160}
          className="rounded-l-md"
          alt={"The best laptop for Frontend engineers in 2022"}
        />
        <div className="body">
          <Text className="text-zinc-400 uppercase" fontWeight="bold" size="xs">
            technology
          </Text>
          <Text className="font-medium">
            The best laptop for Frontend engineers in 2022
          </Text>
          <Group wrap="nowrap" gap="xs">
            <Group gap="xs" wrap="nowrap">
              <Avatar
                size={"sm"}
                radius="full"
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
              />
              <Text size="xs">Elsa Typechecker</Text>
            </Group>
            <Group>
            <Text size="xs" className="text-zinc-400">
              •
            </Text>
            <Text size="xs" className="text-zinc-400">
              Feb 6th
            </Text>
            </Group>
          </Group>
        </div>
      </Group>
    </Card>
  );
}
