interface ICardProps {
  title: string
}

export const Card = (props: ICardProps) => {
  return (
    <div>
      <span>Title: {props.title} </span>
      <div>Content</div>
      <div>Footer</div>
    </div>
  )
}


export function App() {

  return (
    <>
      ola mundo
      <Card title="Title 1"/>
      <Card title="Title 1"/>
      <Card title="Title 3"/>
      <Card title="Title 1"/>
    </>
  )
}

