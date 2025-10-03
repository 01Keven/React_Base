import { useState } from "react";


export function ToDoList() {

    const [value, setValue] = useState('');

    const [list, setList] = useState([
        {id: '1', label: 'Bater o Ponto', complete: false},
        {id: '2', label: 'Esperar horario de pico', complete: false},
        {id: '3', label: 'Ir ate os setores', complete: false},
    ]);

    console.log(list[0]);
    

    return (
        <div>

            <input value={value} onChange={(e) => setValue(e.target.value)} />

            <button onClick={() => {
                setList([ 
                    ...list, {id: (list.length + 1).toString(), label: value, complete: false}]);
                    setValue('');
            }} >Add</button>

            <ol>
                {list.map(listItem => (
                    <li 
                    
                    key={listItem.id}
                    style={{textDecoration: listItem.complete ? 'line-through' : 'none'}}

                    > 
                    {listItem.label} 

                    <button onClick={() => 
                        setList([...list.filter(item => item.id !== listItem.id)])}> 🗑 
                    </button>

                    <button onClick={() => 
                        setList(list.map(item =>
                            item.id === listItem.id
                            ? {...item, complete: !item.complete}
                            : item
                        ))
                    }> Check </button>
                    
                    
                    </li>
                ))}
            </ol>
        </div>
        
    )
}