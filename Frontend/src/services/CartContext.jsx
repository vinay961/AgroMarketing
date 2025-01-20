import React, { useContext, createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : {};
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            if (prevCart[product._id]) {
                return {
                    ...prevCart,
                    [product._id]: {
                        ...prevCart[product._id],
                        quantity: prevCart[product._id].quantity + 1,
                    },
                };
            } else {
                return {
                    ...prevCart,
                    [product._id]: { ...product, quantity: 1 },
                };
            }
        });
    };

    const incrementQuantity = (productId) => {
        setCart((prevCart) => ({
            ...prevCart,
            [productId]: {
                ...prevCart[productId],
                quantity: prevCart[productId].quantity + 1,
            },
        }));
    };

    const decrementQuantity = (productId) => {
        setCart((prevCart) => {
            if (prevCart[productId].quantity === 1) {
                const { [productId]: _, ...rest } = prevCart; // Omit the product from the cart
                return rest;
            }
            return {
                ...prevCart,
                [productId]: {
                    ...prevCart[productId],
                    quantity: prevCart[productId].quantity - 1,
                },
            };
        });
    };

    const clearCart = () => {
        setCart({});
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, incrementQuantity, decrementQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
