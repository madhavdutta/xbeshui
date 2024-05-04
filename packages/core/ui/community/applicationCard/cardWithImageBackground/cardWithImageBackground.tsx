import { IconEye, IconMessageCircle } from "@tabler/icons-react";
import { Card, Text, Group } from "../../../../components";
import "./cardWithImageBackground.css";

export function ImageCard() {
  return (
    <Card padding="lg" shadow="lg" className="cardImg w-[400px]" radius="md">
      <div
        className="image rounded-md"
        style={{
            
          backgroundImage:
            "url(https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80)",
        }}
      />


      <div className="content">
        <div>
          <Text size="lg" className="title" fontWeight="medium">
            Journey to Swiss Alps
          </Text>

          <Group justify="spaceBetween" gap="xs" wrap="nowrap">
            <Text size="sm" className="author text-wrap">
              Robert Gluesticker
            </Text>

            <Group gap="xs">
              <Group gap="xs">
                <IconEye size={16} stroke={1.5} color={"gray"} />
                <Text size="sm" className="bodyText">
                  7847
                </Text>
              </Group>
              <Group gap="xs">
                <IconMessageCircle size={16} stroke={1.5} color={"gray"} />
                <Text size="sm" className="bodyText">
                  5
                </Text>
              </Group>
            </Group>
          </Group>
        </div>
      </div>
    </Card>
  );
}
