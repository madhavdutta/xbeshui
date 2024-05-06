
import { Card, Group, Stack, Text, Button } from '../../../components'
import { IconArrowGuide } from '@tabler/icons-react'

interface TransactionDataProps {
    id: number,
    name: string,
    email: string,
    amount: string,
}

export const CardTransactions = ({items}:{items:TransactionDataProps[]} ) => {
    return (
        <>
            <Card className="md:w-full lg:w-full" radius={'sm'}>
                <Card.Header >
                    <Card.Title className="flex items-center justify-between">
                        <Group justify="spaceBetween">
                            <Stack>
                                <Text size="xl" fontWeight="bold">Transactions</Text>
                                <Text size="sm">Recent transactions from your store.</Text>
                            </Stack>
                            <Button> View All <IconArrowGuide size={16} /></Button>
                        </Group>
                    </Card.Title>
                </Card.Header>
                <Card.Content>
                    <Group justify="spaceBetween" className="p-4 border-b-2">
                        <Text>Customer</Text>
                        <Text>Amount</Text>
                    </Group>
             { items.map((cardData:TransactionDataProps)=>
             
              <Group key={cardData.id} justify="spaceBetween" className="p-4 border-b-2">
              <Stack className="gap-0">
                  <Text> {cardData.name} </Text>
                  <Text> {cardData.email} </Text>
              </Stack>
              <Text> {cardData.amount} </Text>
          </Group>

        ) }

                </Card.Content>
                <Card.Footer>
                    {/* Card footer */}
                </Card.Footer>
            </Card>
        </>
    )
}
