/* eslint-disable @typescript-eslint/no-explicit-any */
import { Text, SimpleGrid, Container } from "../../../components";
import { IconTruck, IconCertificate, IconCoin } from "@tabler/icons-react";
import "./featuresAsymmetrical.css";

interface FeatureProps extends React.ComponentPropsWithoutRef<"div"> {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  icon: React.FC<any>;
  title: string;
  description: string;
}

function Feature({ icon: Icon, title, description, ...others }: FeatureProps) {
  return (
    <div className="feature" {...others}>
      <div className="featureoverlay" />

      <div className="content">
        <Icon style={{ width: 38, height: 38 }} className="icon" stroke={1.5} />
        <Text fontWeight="bold" size="lg" className="title mt-[5px] mb-1">
          {title}
        </Text>
        <Text className="text-zinc-400" size="sm">
          {description}
        </Text>
      </div>
    </div>
  );
}

const mockdata = [
  {
    icon: IconTruck,
    title: "Free Worldwide shipping",
    description:
      "As electricity builds up inside its body, it becomes more aggressive. One theory is that the electricity.",
  },
  {
    icon: IconCertificate,
    title: "Best Quality Product",
    description:
      "Slakoth’s heart beats just once a minute. Whatever happens, it is content to loaf around motionless.",
  },
  {
    icon: IconCoin,
    title: "Very Affordable Pricing",
    description:
      "Thought to have gone extinct, Relicanth was given a name that is a variation of the name of the person who discovered.",
  },
];

export function FeaturesAsymmetrical() {
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

  return (
    <Container className="mt-[30px] mb-[30px]" size="lg">
      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
        {items}
      </SimpleGrid>
    </Container>
  );
}
