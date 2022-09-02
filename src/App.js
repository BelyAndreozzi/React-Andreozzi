import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { Cart } from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./components/CartContext";
import "./components/firebase"
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";

function App() {
  return (
    <>
      <main>
        <BrowserRouter>
          <CartContextProvider>
            <MantineProvider>
              <NotificationsProvider>
                <NavBar />
                <Routes>
                  <Route path="/" element={<ItemListContainer grettings="Bienvenido" />} />
                  <Route path="/category/:category" element={<ItemListContainer grettings="Bienvenido" />} />
                  <Route path="/product/:id" element={<ItemDetailContainer />} />
                  <Route path="/cart" element={<Cart />} />
                </Routes>
              </NotificationsProvider>
            </MantineProvider>
          </CartContextProvider>
        </BrowserRouter>
      </main>

      <footer>
      </footer>
    </>
  )
}

export default App;
