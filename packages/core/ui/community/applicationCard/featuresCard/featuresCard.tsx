import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
} from "../../../../components";
import {
  IconGasStation,
  IconGauge,
  IconManualGearbox,
  IconUsers,
} from "@tabler/icons-react";
import "./featuresCard.css";

const mockdata = [
  { label: "4 passengers", icon: IconUsers },
  { label: "100 km/h in 4 seconds", icon: IconGauge },
  { label: "Automatic gearbox", icon: IconManualGearbox },
  { label: "Electric", icon: IconGasStation },
];

export function FeaturesCard() {
  const features = mockdata.map((feature) => (
    <div className="flex justify-center items-center" key={feature.label}>
      <feature.icon size="1.05rem" className="icon" stroke={1.5} />
      <Text size="xs">{feature.label}</Text>
    </div>
  ));

  return (
    <Card withBorder radius="md" className="card p-0 w-[400px]">
      <Card.Header className="imageSection">
        <Image src="https://i.imgur.com/ZL52Q2D.png" height={150} alt="Tesla Model S" />
      </Card.Header>

      <Group justify="spaceBetween" className="mt-2 px-4">
        <div>
          <Text fontWeight="medium">Tesla Model S</Text>
          <Text size="xs" className="text-zinc-400">
            Free recharge at any station
          </Text>
        </div>
        <Badge >25% off</Badge>
      </Group>

      <Card.Content className="section mt-2 ">
        <Text size="sm" className="label text-zinc-400">
          Basic configuration
        </Text>

        <Group gap={"sm"} className="-mb-2 flex-wrap">
          {features}
        </Group>
      </Card.Content>

      <Card.Content className="section">
        <Group gap={"md"} >
          <div>
            <Text size="xl" fontWeight="bold" style={{ lineHeight: 1 }}>
              $168.00
            </Text>
            <Text
              size="sm"
              className="text-zinc-400 mt-1"
              fontWeight="medium"
              style={{ lineHeight: 1 }}
            >
              per day
            </Text>
          </div>

          <Button radius="xl" style={{ flex: 1 }}>
            Rent now
          </Button>
        </Group>
      </Card.Content>
    </Card>
  );
}
