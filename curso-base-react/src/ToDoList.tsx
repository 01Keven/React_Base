import { useState } from "react";


export function ToDoList() {

    const [value, setValue] = useState('');

    const [list, setList] = useState([
        {id: '1', label: 'Bater o Ponto'},
        {id: '2', label: 'Esperar horario de pico'},
        {id: '3', label: 'Ir ate os setores'},
    ]);

    console.log(list[0]);
    

    return (
        <div>

            <input value={value} onChange={(e) => setValue(e.target.value)} />

            <button onClick={() => {
                setList([ 
                    ...list, {id: (list.length + 1).toString(), label: value}]);
                    setValue('');
            }}
                
                >Add</button>


            <ol>
                {list.map(listItem => (
                    <li key={listItem.id}> {listItem.label} </li>
                ))}
            </ol>
        </div>
        
    )
}