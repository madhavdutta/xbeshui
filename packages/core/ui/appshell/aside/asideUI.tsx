// import { Button, Card,  Group, Text, Separator, Stack, DropdownMenu } from "../../../components/index";
// import { IconTruckDelivery, IconDotsVertical, IconChevronLeft, IconChevronRight, IconCreditCard } from '@tabler/icons-react';

import { IconTargetArrow, IconX, IconArrowsDiagonalMinimize2 } from "@tabler/icons-react";
import { Stack, Group, Text, Button } from "../../../components";

export const AsideUI = () => {
  return (
    <>
      <Group gap="xs" justify="spaceBetween" className="bg-secondary/30 h-16 border-b pl-4 pr-12">
        <Group gap="xs">
          <IconTargetArrow width={22} />
          <Text size="lg">Boards</Text>
        </Group>
        <Group gap="xs" justify="right">
            <Button variant={'ghost'}>
                <IconArrowsDiagonalMinimize2 width={16} />
            </Button>
            <Button variant={'ghost'}>
                <IconX width={16} />
            </Button>
        </Group>
      </Group>
    </>
  );
};
