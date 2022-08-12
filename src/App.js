import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";


function App() {
  return (
    <>
      <NavBar/>
      <main>
      <ItemListContainer grettings="Bienvenido"/>
      <ItemDetailContainer/>
      
      </main>

      <footer>
      
      </footer>
    </>
  )
}

export default App;
