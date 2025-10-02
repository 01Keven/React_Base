*Componente React*

```<App />``

*Componente Funcional React*

```const Test = () => {
  return (
    <div> Teste <div/>
  )}
```

- retorna um HTML
- ou é um hooker ou uma função


*Props no Component*

````
interface ICardProps {
  title: string
}

export const Card = (props: ICardProps) => {
      <Card title="Title 1"/>
}
````
