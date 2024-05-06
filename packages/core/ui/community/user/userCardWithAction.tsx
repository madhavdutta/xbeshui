import { Image, Card, Text, Button } from "../../../components";

export function UserInfoAction() {
  return (
    <Card radius="sm" withBorder className="p-4">
      <Image
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
        width={120}
        radius={"xl"}
        className="mx-auto"
        alt="Jane Fingerlicker"
      />
      <Text size="lg" className="text-center mt-4 font-medium ">
        Jane Fingerlicker
      </Text>
      <Text className="text-center text-zinc-400" size="sm">
        jfingerlicker@me.io • Art director
      </Text>

      <Button variant="outline" radius="sm" className="mt-4 w-full">
        Send message
      </Button>
    </Card>
  );
}
