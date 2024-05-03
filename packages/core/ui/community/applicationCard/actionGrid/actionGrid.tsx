import {
    IconCreditCard,
    IconBuildingBank,
    IconRepeat,
    IconReceiptRefund,
    IconReceipt,
    IconReceiptTax,
    IconReport,
    IconCashBanknote,
    IconCoin,
  } from "@tabler/icons-react";
  import './actionGrid.css';
  import { Card, Group, SimpleGrid, Text } from "../../../../components";
  import { Link } from "../../../../components/Buttons/link/link";
  
  const mockdata = [
    { title: "Credit cards", icon: IconCreditCard, color: "violet" },
    { title: "Banks nearby", icon: IconBuildingBank, color: "indigo" },
    { title: "Transfers", icon: IconRepeat, color: "blue" },
    { title: "Refunds", icon: IconReceiptRefund, color: "green" },
    { title: "Receipts", icon: IconReceipt, color: "teal" },
    { title: "Taxes", icon: IconReceiptTax, color: "cyan" },
    { title: "Reports", icon: IconReport, color: "pink" },
    { title: "Payments", icon: IconCoin, color: "red" },
    { title: "Cashback", icon: IconCashBanknote, color: "orange" },
  ];
  
  export function ActionsGrid() {
    const items = mockdata.map((item) => (
      <Link key={item.title} variant={'ghost'} className="item shadow-sm">
        <item.icon color={item.color} size="2rem" />
        <Text size="xs" className="mt-[7px]">
          {item.title}
        </Text>
      </Link>
    ));
  
    return (
      <Card withBorder  radius="md" className="card">
        <Group justify="spaceBetween">
          <Text className="title">Services</Text>
          <Link variant={'link'} size="xs" className= "text-zinc-400 bg-transparent" style={{ lineHeight: 1 }}>
            + 21 other services
          </Link>
        </Group>
        <SimpleGrid cols={{ lg: 3 }} className="mt-4">
          {items}
        </SimpleGrid>
      </Card>
    );
  }
  
  