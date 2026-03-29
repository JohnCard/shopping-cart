import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { BuyPage } from "./pages/BuyPage"
import { Cart } from "./pages/Cart"
import { ProductosProvider } from "./context/ProductosProvider"
import { CarritoProvider } from "./context/CarritoProvider"

export const ShoppingCart = () => {
  return (
    <ProductosProvider>
        <CarritoProvider>
            <NavBar/>
            <div className="container">
                <Routes>
                    <Route path="/" element={<BuyPage/>}/>
                    <Route path="/carrito" element={<Cart/>}/>
                    <Route path="/*" element={<Navigate to='/'/>}/>
                </Routes>
            </div>
        </CarritoProvider>
    </ProductosProvider>
  )
}
