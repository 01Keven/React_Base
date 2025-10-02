// interface ICardProps {
//   title: string

// }

// export const Card = (props: ICardProps) => {
//   return (
//     <div>
//       <span>Title: {props.title} </span>
//       <div>Content</div>
//       <div>Footer</div>
//     </div>
//   )
// }

import { useState } from "react";


export function App() {

  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Click {count}</button>
    </>
  )
}

