
import { database } from './service/firebase';
import { RouterProvider } from 'react-router-dom';
import {router} from './routes';
import { GlobalStyles } from './styles/global'

console.log(database.app.name)
function App() {

  return (
     <div>    
      <GlobalStyles />
      <RouterProvider router= {router}/>
     </div>
  )
}

export default App
