import React, { useState } from "react";
import { Container } from "../packages/core/components/Layout/container/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../packages/core/components/DataDisplay/accordion/accordion";
import { Switch } from "../packages/core/components/Inputs/switch/switch";
import { TagsInput } from "../packages/core/components/Inputs/tags/tags";
import { Input } from "../packages/core/components/Inputs/textInput/textInput";
import { Separator } from "../packages/core/components/Misc/separator/separator";
import { Group } from "../packages/core/components/Layout/group/group";
import { Button } from "../packages/core/components/Buttons/button/button";
import { Stack } from "../packages/core/components/Layout/stack/stack";
import { Text } from "../packages/core/components/Typography/text/text";
import { Title } from "../packages/core/components/Typography/title/title";
import { Grid, GridCol } from "../packages/core/components/Layout/grid/grid";
import { SimpleGrid } from "../packages/core/components/Layout/simpleGrid/simpleGrid";
import { FlexBox } from "../packages/core/components/Layout/flexBox/flexBox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "../packages/core/components/DataDisplay/card/card";
import { Image } from "../packages/core/components/DataDisplay/image/image";
import { Badge } from "../packages/core/components/DataDisplay/badge/badge";
const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container className="py-6 flex flex-col gap-8">
      <Accordion
        type="multiple"
        variant="default"
        radius="lg"
        chevronPosition="left"
        chevronsize={"xs"}
      >
        <AccordionItem value="item1">
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent onClick={() => alert("ok")}>
            <div className="flex flex-col">
              <h3 className="text-lg">Content for Item 1</h3>
              <p>
                Naturally sweet and potassium-rich fruit. Bananas are a popular
                choice for their energy-boosting properties and can be enjoyed
                as a quick snack, added to smoothies, or used in baking.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item2">
          <AccordionTrigger>Item 2</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col">
              <h3 className="text-lg">Content for Item 2</h3>
              <p>
                Naturally sweet and potassium-rich fruit. Bananas are a popular
                choice for their energy-boosting properties and can be enjoyed
                as a quick snack, added to smoothies, or used in baking.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item3">
          <AccordionTrigger>Item 3</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col">
              <h3 className="text-lg">Content for Item 3</h3>
              <p>
                Naturally sweet and potassium-rich fruit. Bananas are a popular
                choice for their energy-boosting properties and can be enjoyed
                as a quick snack, added to smoothies, or used in baking.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Switch size={"sm"} id="ok" label="Airplane Mode" />
      <TagsInput
        width="md"
        radius="md"
        variant="unstyled"
        label="Press Enter to submit a tag"
        placeholder="Enter tag"
      />
      <Stack gap="xs" justify="center" align="center" className="border">
        <Group gap="sm">
          <Text>button2</Text>
        </Group>
        <Group gap="sm">
          <Text>button2</Text>
        </Group>
        <Group gap="sm">
          <Text>button2</Text>
        </Group>
      </Stack>
      <Grid gutter={{ base: 12, md: 6, lg: 3 }}>
        <GridCol className="bg-red-500" span={4}>
          1
        </GridCol>
        <GridCol className="bg-red-500" span={4}>
          2
        </GridCol>
        <GridCol className="bg-red-500" span={4}>
          3
        </GridCol>
        <GridCol className="bg-red-500" span={4}>
          4
        </GridCol>
        <GridCol className="bg-red-500" span={4}>
          5
        </GridCol>
        <GridCol className="bg-red-500" span={4}>
          6
        </GridCol>
      </Grid>
      <FlexBox wrap="wrap">
        <div className="bg-red-500 h-10 w-60">1</div>
        <div className="bg-red-500 h-10 w-60">2</div>
        <div className="bg-red-500 h-10 w-60">3</div>
        <div className="bg-red-500 h-10 w-60">3</div>
        <div className="bg-red-500 h-10 w-60">1</div>
        <div className="bg-red-500 h-10 w-60">2</div>
        <div className="bg-red-500 h-10 w-60">3</div>
        <div className="bg-red-500 h-10 w-60">3</div>
      </FlexBox>
      <Card size={"sm"} radius="sm" shadow="none" withBorder>
        <Image src="/images/card-bg.png" alt="" width="auto" fit="contain" />
        <div className="flex flex-row justify-between p-4">
          <Title order={"h6"}>Title name</Title>
          <Badge size="xs" className="bg-orange-500">
            on sale
          </Badge>
        </div>
        <CardContent className="flex flex-col gap-4">
          <Text className="text-gray-500">
            Make changes to your account here. Click save when you are done.
          </Text>
          <div>
            <Input placeholder={"Pedro Duarte"} radius="md" />
            <Input placeholder={"@pedro"} radius="md" className="mt-2" />
          </div>
        </CardContent>
        <CardFooter>
          <Button variant={"default"} size={"default"}>
            Book Now
          </Button>
        </CardFooter>
      </Card>
      Separator
      <Separator className="bg-red-500" orientation="horizontal" />
      <SimpleGrid cols={2} spacing="sm" verticalSpacing="lg">
        <div className="bg-blue-400">1</div>
        <div className="bg-red-400">2</div>
        <div className="bg-green-400">3</div>
        <div className="bg-orange-400">4</div>
        <div className="bg-pink-400">5</div>
      </SimpleGrid>
    </Container>
  );
};

export default App;
