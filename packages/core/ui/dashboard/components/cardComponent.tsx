import { Card, Text } from '../../../components'

interface DashCardDataType{
  id:number,
  title:string,
  value:string,
  desc:string,
  icon?:React.ReactNode
}



export const CardComponent = ({items} : {items:DashCardDataType}) => {
  return (
    <>
      <Card className="md:w-full lg:w-full" radius={'sm'}>
        <Card.Header >
          <Card.Title className="flex items-center justify-between">
            {items.title}
            {items.icon}
          </Card.Title>
        </Card.Header>
        <Card.Content>
          <Text size="xl" fontWeight="bold">{items.value}</Text>
          <Text size="sm">{items.desc}</Text>
        </Card.Content>
        <Card.Footer>
          {/* Card footer */}
        </Card.Footer>
      </Card>
    </>
  )
}

