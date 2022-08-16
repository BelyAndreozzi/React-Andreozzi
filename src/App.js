import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <main>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer grettings="Bienvenido"/>}/>
          <Route path="/category/:category" element={<ItemListContainer grettings="Bienvenido"/>}/>
          <Route path="/product/:id" element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
      </main>

      <footer>
      </footer>
    </>
  )
}

export default App;
