import { Card, Group, Image, Text } from "../../../../components";
import "./cardWithStats.css";

const stats = [
  { title: "Distance", value: "27.4 km" },
  { title: "Avg. speed", value: "9.6 km/h" },
  { title: "Score", value: "88/100" },
];

export function CardWithStats() {
  const items = stats.map((stat) => (
    <div key={stat.title}>
      <Text size="xs" className="text-zinc-400">
        {stat.title}
      </Text>
      <Text fontWeight="medium" size="sm">
        {stat.value}
      </Text>
    </div>
  ));

  return (
    <Card withBorder className="card p-0 w-96">
      <Card.Header >
        <Image
         className="rounded-t-sm"
          src="https://images.unsplash.com/photo-1581889470536-467bdbe30cd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
          alt="Running challenge"
          height={100}
        />
      </Card.Header>

      <Group justify="spaceBetween" className="mt-4 p-4">
        <Text size="sm" fontWeight="bold" className="title">
          Running challenge
        </Text>

        <Text size="xs" className="text-zinc-400">
          80% completed
        </Text>
      </Group>
      <Text className=" mb-2 text-zinc-400 px-4" size="xs">
        56 km this month • 17% improvement compared to last month • 443 place in
        global scoreboard
      </Text>
      <Card.Content className="footer p-4">{items}</Card.Content>
    </Card>
  );
}
