import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// named import
import { App} from './App'
import { ToDoList } from './ToDoList'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Componente react */}
    <App /> <br />
    <ToDoList />
  </StrictMode>,
)
