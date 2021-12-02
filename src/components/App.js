import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import "../styles/Layout.css";

function App() {
    const existingCart = localStorage.getItem("cart");
    const [cart, updateCart] = useState(
        existingCart ? JSON.parse(existingCart) : []
    );

    useEffect(() => {
        if (localStorage.getItem("cart") !== cart)
            localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
    return (
        <>
            <Banner />
            <main className="lmj-layout-inner">
                <Cart cart={cart} updateCart={updateCart} />
                <ShoppingList cart={cart} updateCart={updateCart} />
            </main>
            <Footer />
        </>
    );
}

export default App;
