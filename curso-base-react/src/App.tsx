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
  const [hide, setHide] = useState(false);

  return (
    <>

      {hide && <p>TEST 1</p>}
      {!hide && <p>TEST 2</p>}

      {
        hide
        ? <p>TEST 1</p>
        : <p>TEST 2</p>
      }

      <button onClick={() => {setCount(count + 1)}}> {count} </button>

      <button onClick={() => {setHide(!hide)}}> Toggle</button>
    </>
  )
}

