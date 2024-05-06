import { Avatar, Card, Group, Stack, Text } from "../../../components"

interface innerItemsType {
    id: number,
    name: string,
    value: string,
    email: string,
    imgUrl: string,
}

interface CardSalesProps {
    title: string
    items: innerItemsType[]
}

export const CardSalesComponent = ({ title, items }: CardSalesProps) => {
    return (
        <Card className="md:w-full lg:w-full" radius={'sm'}>
            <Card.Header>
                <Card.Title className="flex items-center justify-between">
                    <Text size="xl" fontWeight="bold">{title}</Text>
                </Card.Title>
            </Card.Header>
            <Card.Content>
                {items.map((item: innerItemsType) =>
                    <Group key={item.id} className="py-2">
                        <Group>
                            <Avatar
                                src={item.imgUrl}
                                alt={item.name}
                                radius={"full"}
                                size={"default"}
                            />
                            <Stack className="gap-0">
                                <Text> {item.name} </Text>
                                <Text> {item.email} </Text>
                            </Stack>
                        </Group>
                        <Text> {item.value} </Text>
                    </Group>
                )}
            </Card.Content>
            <Card.Footer>
                {/* Card footer */}
            </Card.Footer>
        </Card>
    )
}
