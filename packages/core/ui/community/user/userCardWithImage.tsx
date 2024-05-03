
import { Text, Card, Avatar, Group, Button, Stack } from "../../../components";

const stats = [
  { value: "34K", label: "Followers" },
  { value: "187", label: "Follows" },
  { value: "1.6K", label: "Posts" },
];

export function UserCardWithImage() {
  const items = stats.map((stat) => (
    <div key={stat.label}>
      <Text className="text-center font-medium" fontWeight="medium" size="lg">
        {stat.value}
      </Text>
      <Text className="text-center text-zinc-400 " size="sm">
        {stat.label}
      </Text>
    </div>
  ));

  return (
    <Card withBorder  className="p-0" radius="md">
      <Card.Header
     
        style={{
          height: "160px",
          width:"300px",
          borderRadius:'12px 12px 0px 0px',
          backgroundImage:
            "url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80)",
        }}
      />
      <Stack gap="none" className="p-4">
      <Avatar
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png"
        size='xl'
        radius='full'
        className="-mt-[60px] mx-auto"
      />
      <Text className="text-center mt-2 " size="lg" fontWeight="medium">
        Bill Headbanger
      </Text>
      <Text className="text-center text-zinc-400 " size="sm">
        Fullstack engineer
      </Text>
      <Group className="mt-4" justify="center" gap={"xl"}>
        {items}
      </Group>
      <Button className="w-full mt-4" radius="md" size="md" variant="outline">
        Follow
      </Button>
      </Stack>
    </Card>
  );
}
