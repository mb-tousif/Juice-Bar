import { createContext, ReactNode, useContext } from 'react'
import { useLocalStorage } from '../Hooks/useLocalStorage';

interface CartContextProps {
  children: ReactNode;
}

interface CartItem {
  id: number;
  quantity: number;
};

interface ShoppingCartContext {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItem[];
};

const CartContext = createContext({} as ShoppingCartContext);
export function useContextAPI() {
  return useContext(CartContext)
}

export function CartContextProvider({ children }: CartContextProps) {
 const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
   "shopping-cart",
   []
 );

 const cartQuantity = cartItems.reduce(
   (quantity, item) => item.quantity + quantity,
   0
 );

 function getItemQuantity(id: number) {
   return cartItems.find((item) => item.id === id)?.quantity || 0;
 }

 function increaseCartQuantity(id: number) {
   setCartItems((currItems) => {
     if (currItems.find((item) => item.id === id) == null) {
       return [...currItems, { id, quantity: 1 }];
     } else {
       return currItems.map((item) => {
         if (item.id === id) {
           return { ...item, quantity: item.quantity + 1 };
         } else {
           return item;
         }
       });
     }
   });
 }

 function decreaseCartQuantity(id: number) {
   setCartItems((currItems) => {
     if (currItems.find((item) => item.id === id)?.quantity === 1) {
       return currItems.filter((item) => item.id !== id);
     } else {
       return currItems.map((item) => {
         if (item.id === id) {
           return { ...item, quantity: item.quantity - 1 };
         } else {
           return item;
         }
       });
     }
   });
 }

 function removeFromCart(id: number) {
   setCartItems((currItems) => {
     return currItems.filter((item) => item.id !== id);
   });
 }

  return (
    <CartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
